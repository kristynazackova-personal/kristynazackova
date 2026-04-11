/**
 * Airtable Field Migration System
 *
 * Production-safe, idempotent migration that:
 *   1. Normalizes text data (trim, case-correct) before conversion
 *   2. Ensures select options exist on the schema
 *   3. Converts field types (text → select, text → number)
 *   4. Links Tasks → Projects via record IDs
 *   5. Logs everything, continues on error
 *
 * Usage:
 *   DRY_RUN=true  npm run convert   # preview (default)
 *   DRY_RUN=false npm run convert   # apply changes
 */

import axios from "axios";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ═══════════════════════════════════════════════════════════════
// ENV
// ═══════════════════════════════════════════════════════════════

function loadEnv() {
  try {
    const envPath = resolve(__dirname, ".env");
    const content = readFileSync(envPath, "utf-8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIndex = trimmed.indexOf("=");
      if (eqIndex === -1) continue;
      const key = trimmed.slice(0, eqIndex).trim();
      const value = trimmed.slice(eqIndex + 1).trim();
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  } catch {
    // .env not found
  }
}

loadEnv();

const API_KEY = process.env.AIRTABLE_API_KEY;
const BASE_ID = process.env.AIRTABLE_BASE_ID;
const DRY_RUN = (process.env.DRY_RUN ?? "true").toLowerCase() !== "false";

if (!API_KEY || !BASE_ID) {
  console.error("Missing AIRTABLE_API_KEY or AIRTABLE_BASE_ID.");
  console.error("Copy .env.example to .env and fill in your values.");
  process.exit(1);
}

const api = axios.create({
  baseURL: "https://api.airtable.com/v0",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
});

// Rate-limit helper: Airtable allows 5 req/sec
async function rateLimit() {
  await new Promise((r) => setTimeout(r, 220));
}

// ═══════════════════════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════════════════════

const CATEGORY_CHOICES = ["Work", "Startup", "Growth", "Idea", "Personal Brand"];
const STATUS_CHOICES = ["Idea", "Early", "In Progress", "Active", "Paused", "Done"];
const PRIORITY_CHOICES = ["High", "Medium", "Low"];

// Normalization maps: lowercase input → canonical value
const CATEGORY_MAP = {
  work: "Work",
  startup: "Startup",
  "start-up": "Startup",
  growth: "Growth",
  idea: "Idea",
  "personal brand": "Personal Brand",
};

const STATUS_MAP = {
  idea: "Idea",
  early: "Early",
  "in progress": "In Progress",
  active: "Active",
  paused: "Paused",
  done: "Done",
};

const PRIORITY_MAP = {
  high: "High",
  medium: "Medium",
  low: "Low",
};

// Field conversion rules: fieldName → target schema
const FIELD_RULES = {
  Category: {
    type: "singleSelect",
    options: { choices: CATEGORY_CHOICES.map((name) => ({ name })) },
  },
  Status: {
    type: "singleSelect",
    options: { choices: STATUS_CHOICES.map((name) => ({ name })) },
  },
  Priority: {
    type: "singleSelect",
    options: { choices: PRIORITY_CHOICES.map((name) => ({ name })) },
  },
  Impact: {
    type: "number",
    options: { precision: 0 },
  },
  Effort: {
    type: "number",
    options: { precision: 0 },
  },
  Confidence: {
    type: "number",
    options: { precision: 0 },
  },
};

// Which fields get normalized (maps fieldName → normalization map)
const NORMALIZATION_RULES = {
  Category: CATEGORY_MAP,
  Status: STATUS_MAP,
  Priority: PRIORITY_MAP,
};

// ═══════════════════════════════════════════════════════════════
// COUNTERS & WARNINGS
// ═══════════════════════════════════════════════════════════════

const stats = {
  recordsNormalized: 0,
  fieldsConverted: 0,
  fieldsSkipped: 0,
  fieldsFailed: 0,
  optionsUpdated: 0,
  tasksLinked: 0,
  tasksUnmatched: 0,
  warnings: [],
};

function warn(msg) {
  stats.warnings.push(msg);
  console.log(`  ⚠ WARNING: ${msg}`);
}

// ═══════════════════════════════════════════════════════════════
// AIRTABLE HELPERS
// ═══════════════════════════════════════════════════════════════

async function fetchSchema() {
  const res = await api.get(`/meta/bases/${BASE_ID}/tables`);
  return res.data.tables;
}

/**
 * Fetch ALL records from a table, handling pagination.
 * @param {string} tableId
 * @param {string[]} fields - field names to return (optional)
 * @returns {Array} records
 */
async function fetchAllRecords(tableId, fields) {
  const records = [];
  let offset = undefined;

  do {
    const params = {};
    if (offset) params.offset = offset;
    if (fields) params.fields = fields;

    const res = await api.get(`/${BASE_ID}/${tableId}`, { params });
    records.push(...res.data.records);
    offset = res.data.offset;
    await rateLimit();
  } while (offset);

  return records;
}

/**
 * Batch-update records (max 10 per request per Airtable limit).
 * @param {string} tableId
 * @param {Array} updates - [{ id, fields: { ... } }, ...]
 */
async function batchUpdateRecords(tableId, updates) {
  const BATCH_SIZE = 10;
  for (let i = 0; i < updates.length; i += BATCH_SIZE) {
    const batch = updates.slice(i, i + BATCH_SIZE);

    if (DRY_RUN) {
      for (const rec of batch) {
        console.log(`    [DRY RUN] Would update record ${rec.id}:`, JSON.stringify(rec.fields));
      }
    } else {
      await api.patch(`/${BASE_ID}/${tableId}`, { records: batch });
    }
    await rateLimit();
  }
}

async function patchField(tableId, fieldId, body) {
  const url = `/meta/bases/${BASE_ID}/tables/${tableId}/fields/${fieldId}`;
  if (DRY_RUN) {
    console.log(`    [DRY RUN] Would PATCH field ${fieldId}:`, JSON.stringify(body));
    return body;
  }
  const res = await api.patch(url, body);
  return res.data;
}

// ═══════════════════════════════════════════════════════════════
// STEP 1: NORMALIZE DATA
// ═══════════════════════════════════════════════════════════════

async function normalizeTable(table) {
  // Find which normalization-eligible fields exist in this table
  const tableFieldNames = table.fields.map((f) => f.name);
  const fieldsToNormalize = Object.keys(NORMALIZATION_RULES).filter((name) =>
    tableFieldNames.includes(name)
  );

  if (fieldsToNormalize.length === 0) return;

  console.log(`\n  Normalizing fields: ${fieldsToNormalize.join(", ")}`);

  const records = await fetchAllRecords(table.id, fieldsToNormalize);
  console.log(`  Fetched ${records.length} record(s)`);

  const updates = [];

  for (const record of records) {
    const changes = {};
    let hasChanges = false;

    for (const fieldName of fieldsToNormalize) {
      const raw = record.fields[fieldName];
      if (raw == null || typeof raw !== "string") continue;

      const trimmed = raw.trim();
      if (trimmed === "") continue;

      const normalMap = NORMALIZATION_RULES[fieldName];
      const canonical = normalMap[trimmed.toLowerCase()];

      if (canonical && canonical !== raw) {
        changes[fieldName] = canonical;
        hasChanges = true;
      } else if (!canonical) {
        warn(
          `Table "${table.name}", record ${record.id}: "${fieldName}" value "${trimmed}" has no normalization mapping`
        );
      }
    }

    if (hasChanges) {
      updates.push({ id: record.id, fields: changes });
    }
  }

  if (updates.length === 0) {
    console.log("  No records need normalization");
    return;
  }

  console.log(`  Normalizing ${updates.length} record(s)...`);
  await batchUpdateRecords(table.id, updates);
  stats.recordsNormalized += updates.length;
  console.log(`  Done — ${updates.length} record(s) normalized`);
}

// ═══════════════════════════════════════════════════════════════
// STEP 2: ENSURE SELECT OPTIONS EXIST
// ═══════════════════════════════════════════════════════════════

async function ensureSelectOptions(table) {
  const selectRules = {
    Category: CATEGORY_CHOICES,
    Status: STATUS_CHOICES,
    Priority: PRIORITY_CHOICES,
  };

  for (const [fieldName, requiredChoices] of Object.entries(selectRules)) {
    const field = table.fields.find((f) => f.name === fieldName);
    if (!field) continue;

    // Only relevant if already a singleSelect (may not be yet on first run)
    if (field.type !== "singleSelect") {
      console.log(`  ${fieldName}: not yet singleSelect (type=${field.type}), options will be set during conversion`);
      continue;
    }

    const existingNames = (field.options?.choices || []).map((c) => c.name);
    const missing = requiredChoices.filter((name) => !existingNames.includes(name));

    if (missing.length === 0) {
      console.log(`  ${fieldName}: all ${requiredChoices.length} options present`);
      continue;
    }

    console.log(`  ${fieldName}: adding missing options: ${missing.join(", ")}`);

    const allChoices = [
      ...(field.options?.choices || []),
      ...missing.map((name) => ({ name })),
    ];

    try {
      await patchField(table.id, field.id, {
        options: { choices: allChoices },
      });
      stats.optionsUpdated++;
    } catch (err) {
      const detail = err.response?.data?.error?.message || err.message;
      warn(`Failed to update options for ${fieldName}: ${detail}`);
    }
    await rateLimit();
  }
}

// ═══════════════════════════════════════════════════════════════
// STEP 3: CONVERT FIELD TYPES
// ═══════════════════════════════════════════════════════════════

async function convertFieldTypes(table) {
  for (const [fieldName, rule] of Object.entries(FIELD_RULES)) {
    const field = table.fields.find((f) => f.name === fieldName);
    if (!field) continue;

    if (field.type === rule.type) {
      console.log(`  ${fieldName}: already ${rule.type} — skipped`);
      stats.fieldsSkipped++;
      continue;
    }

    const body = { type: rule.type };
    if (rule.options) body.options = rule.options;

    console.log(`  ${fieldName} (${field.id}): ${field.type} → ${rule.type}`);

    try {
      await patchField(table.id, field.id, body);
      stats.fieldsConverted++;
      console.log(`  ${fieldName}: converted`);
    } catch (err) {
      const detail = err.response?.data?.error?.message || err.message;
      console.log(`  ${fieldName}: FAILED — ${detail}`);
      stats.fieldsFailed++;
    }
    await rateLimit();
  }
}

// ═══════════════════════════════════════════════════════════════
// STEP 4: LINK TASKS → PROJECTS
// ═══════════════════════════════════════════════════════════════

async function linkTasksToProjects(tables) {
  // Find the Tasks and Projects tables (case-insensitive)
  const tasksTable = tables.find(
    (t) => t.name.toLowerCase() === "tasks"
  );
  const projectsTable = tables.find(
    (t) => t.name.toLowerCase() === "projects"
  );

  if (!tasksTable) {
    console.log('  No "Tasks" table found — skipping linking');
    return;
  }
  if (!projectsTable) {
    console.log('  No "Projects" table found — skipping linking');
    return;
  }

  const projectField = tasksTable.fields.find(
    (f) => f.name.toLowerCase() === "project"
  );
  if (!projectField) {
    console.log('  No "Project" field in Tasks — skipping linking');
    return;
  }

  // If already linked, skip
  if (projectField.type === "multipleRecordLinks") {
    console.log("  Project field is already a linked record field — skipped");
    return;
  }

  console.log(`  Tasks table: ${tasksTable.id}`);
  console.log(`  Projects table: ${projectsTable.id}`);
  console.log(`  Project field: ${projectField.id} (type: ${projectField.type})`);

  // 4a. Fetch all Projects and build name → recordId map
  console.log("\n  Fetching Projects...");
  const projectRecords = await fetchAllRecords(projectsTable.id, ["Name"]);
  const projectMap = {};
  for (const rec of projectRecords) {
    const name = rec.fields.Name;
    if (name) {
      projectMap[name.trim().toLowerCase()] = rec.id;
    }
  }
  console.log(`  Found ${Object.keys(projectMap).length} project(s): ${Object.keys(projectMap).map(k => projectMap[k]).join(", ")}`);

  // 4b. Fetch all Tasks with their Project text value
  console.log("  Fetching Tasks...");
  const taskRecords = await fetchAllRecords(tasksTable.id, ["Project"]);
  console.log(`  Found ${taskRecords.length} task(s)`);

  // 4c. Build updates: match text → record ID
  const linkUpdates = [];
  for (const task of taskRecords) {
    const projectText = task.fields.Project;
    if (projectText == null || (typeof projectText === "string" && projectText.trim() === "")) {
      continue;
    }

    // If already an array of record IDs (re-run safety), skip
    if (Array.isArray(projectText)) {
      continue;
    }

    const key = String(projectText).trim().toLowerCase();
    const projectRecordId = projectMap[key];

    if (projectRecordId) {
      linkUpdates.push({
        id: task.id,
        fields: { Project: [projectRecordId] },
      });
    } else {
      stats.tasksUnmatched++;
      warn(
        `Task ${task.id}: Project "${projectText}" not found in Projects table`
      );
    }
  }

  if (linkUpdates.length === 0 && stats.tasksUnmatched === 0) {
    console.log("  No Task records have a Project value to link");
  }

  // 4d. First update records with linked IDs (while field is still text,
  //     we store the record ID as text; it will become the link after conversion)
  //     Actually — Airtable requires us to:
  //       1. Convert the field type FIRST
  //       2. Then write the linked record IDs
  //     Because you can't write an array to a text field.

  // So: convert field type first
  console.log(`\n  Converting "Project" field to multipleRecordLinks...`);
  try {
    await patchField(tasksTable.id, projectField.id, {
      type: "multipleRecordLinks",
      options: {
        linkedTableId: projectsTable.id,
      },
    });
    stats.fieldsConverted++;
    console.log("  Field type converted to multipleRecordLinks");
  } catch (err) {
    const detail = err.response?.data?.error?.message || err.message;
    console.log(`  FAILED to convert Project field: ${detail}`);
    stats.fieldsFailed++;
    warn("Project field conversion failed — cannot write linked record IDs");
    return;
  }
  await rateLimit();

  // Now write the linked record IDs
  if (linkUpdates.length > 0) {
    console.log(`  Writing ${linkUpdates.length} linked record(s)...`);
    await batchUpdateRecords(tasksTable.id, linkUpdates);
    stats.tasksLinked += linkUpdates.length;
    console.log(`  Done — ${linkUpdates.length} task(s) linked to projects`);
  }
}

// ═══════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════

async function run() {
  console.log("╔══════════════════════════════════════════════════╗");
  console.log("║       AIRTABLE FIELD MIGRATION SYSTEM           ║");
  console.log("╚══════════════════════════════════════════════════╝");
  console.log("");

  if (DRY_RUN) {
    console.log("🔒 MODE: DRY RUN (no changes will be made)");
    console.log("   Set DRY_RUN=false in .env to apply changes.\n");
  } else {
    console.log("🔴 MODE: LIVE — changes WILL be applied to Airtable\n");
  }

  // Fetch schema
  console.log("Fetching table schema...");
  let tables = await fetchSchema();
  console.log(`Found ${tables.length} table(s)\n`);

  // ── STEP 1: Normalize data ──────────────────────────────────

  console.log("━━━ STEP 1: NORMALIZE DATA ━━━");
  for (const table of tables) {
    console.log(`\nTable: "${table.name}" (${table.id})`);
    await normalizeTable(table);
  }

  // ── STEP 2: Ensure select options ───────────────────────────

  console.log("\n━━━ STEP 2: ENSURE SELECT OPTIONS ━━━");
  // Re-fetch schema in case normalization changed anything
  tables = await fetchSchema();
  for (const table of tables) {
    console.log(`\nTable: "${table.name}" (${table.id})`);
    await ensureSelectOptions(table);
  }

  // ── STEP 3: Convert field types ─────────────────────────────

  console.log("\n━━━ STEP 3: CONVERT FIELD TYPES ━━━");
  // Re-fetch schema to get current types
  tables = await fetchSchema();
  for (const table of tables) {
    console.log(`\nTable: "${table.name}" (${table.id})`);
    await convertFieldTypes(table);
  }

  // ── STEP 4: Link Tasks → Projects ──────────────────────────

  console.log("\n━━━ STEP 4: LINK TASKS → PROJECTS ━━━");
  // Re-fetch schema one more time (field types may have changed)
  tables = await fetchSchema();
  await linkTasksToProjects(tables);

  // ── SUMMARY ─────────────────────────────────────────────────

  console.log("\n╔══════════════════════════════════════════════════╗");
  console.log("║                    SUMMARY                      ║");
  console.log("╚══════════════════════════════════════════════════╝");
  console.log("");
  console.log(`  Mode:                ${DRY_RUN ? "DRY RUN" : "LIVE"}`);
  console.log(`  Records normalized:  ${stats.recordsNormalized}`);
  console.log(`  Select options updated: ${stats.optionsUpdated}`);
  console.log(`  Fields converted:    ${stats.fieldsConverted}`);
  console.log(`  Fields skipped:      ${stats.fieldsSkipped} (already correct type)`);
  console.log(`  Fields failed:       ${stats.fieldsFailed}`);
  console.log(`  Tasks linked:        ${stats.tasksLinked}`);
  console.log(`  Tasks unmatched:     ${stats.tasksUnmatched}`);
  console.log("");

  if (stats.warnings.length > 0) {
    console.log(`  Warnings (${stats.warnings.length}):`);
    for (const w of stats.warnings) {
      console.log(`    - ${w}`);
    }
    console.log("");
  }

  if (DRY_RUN) {
    console.log("  ─────────────────────────────────────────────");
    console.log("  This was a DRY RUN. No changes were made.");
    console.log("  Set DRY_RUN=false in .env and re-run to apply.");
    console.log("  ─────────────────────────────────────────────");
  } else {
    console.log("  Migration complete. Run `npm run inspect` to verify.");
  }
}

run().catch((err) => {
  if (err.response) {
    console.error(
      `\nAPI Error ${err.response.status}:`,
      JSON.stringify(err.response.data, null, 2)
    );
  } else {
    console.error("\nError:", err.message);
  }
  process.exit(1);
});
