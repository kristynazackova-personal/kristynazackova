/**
 * Auto-convert Airtable fields from text to proper types.
 *
 * This script:
 *   1. Fetches your table schema to find field IDs by name
 *   2. Converts matching fields to their target types
 *   3. Reports results
 *
 * Usage:
 *   1. Copy .env.example to .env and fill in your values
 *   2. npm install
 *   3. npm run convert
 */

import axios from "axios";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

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
    // .env file not found
  }
}

loadEnv();

const API_KEY = process.env.AIRTABLE_API_KEY;
const BASE_ID = process.env.AIRTABLE_BASE_ID;

if (!API_KEY || !BASE_ID) {
  console.error("Missing AIRTABLE_API_KEY or AIRTABLE_BASE_ID.");
  console.error("Copy .env.example to .env and fill in your values.");
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

// ═══════════════════════════════════════════════════════════════
// FIELD CONVERSION RULES
//
// Maps field names → target types. Case-insensitive matching.
// Add or remove entries as needed for your tables.
// ═══════════════════════════════════════════════════════════════

const FIELD_RULES = {
  // Single select fields
  Category: {
    type: "singleSelect",
    options: {
      choices: [
        { name: "Work" },
        { name: "Startup" },
        { name: "Growth" },
        { name: "Idea" },
        { name: "Personal Brand" },
      ],
    },
  },
  Status: {
    type: "singleSelect",
    options: {
      choices: [
        { name: "Idea" },
        { name: "Early" },
        { name: "In Progress" },
        { name: "Active" },
        { name: "Paused" },
        { name: "Done" },
      ],
    },
  },
  Priority: {
    type: "singleSelect",
    options: {
      choices: [
        { name: "High" },
        { name: "Medium" },
        { name: "Low" },
      ],
    },
  },

  // Number fields
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

// ═══════════════════════════════════════════════════════════════

async function fetchSchema() {
  const res = await axios.get(
    `https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`,
    { headers }
  );
  return res.data.tables;
}

async function convertField(tableId, fieldId, body) {
  const url = `https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables/${tableId}/fields/${fieldId}`;
  const res = await axios.patch(url, body, { headers });
  return res.data;
}

async function run() {
  console.log("Fetching table schema...\n");
  const tables = await fetchSchema();

  // Build a lowercase lookup for field rules
  const rulesLower = {};
  for (const [name, rule] of Object.entries(FIELD_RULES)) {
    rulesLower[name.toLowerCase()] = { originalName: name, ...rule };
  }

  let totalConverted = 0;
  let totalSkipped = 0;
  let totalFailed = 0;

  for (const table of tables) {
    const matches = [];

    for (const field of table.fields) {
      const rule = rulesLower[field.name.toLowerCase()];
      if (rule && field.type !== rule.type) {
        matches.push({ field, rule });
      } else if (rule && field.type === rule.type) {
        totalSkipped++;
      }
    }

    if (matches.length === 0) continue;

    console.log(`━━━ TABLE: "${table.name}" (${table.id}) ━━━\n`);

    for (const { field, rule } of matches) {
      const body = { type: rule.type };
      if (rule.options) body.options = rule.options;

      process.stdout.write(
        `  ${field.name} (${field.id}): ${field.type} → ${rule.type} ... `
      );

      try {
        await convertField(table.id, field.id, body);
        console.log("done");
        totalConverted++;
      } catch (err) {
        const detail = err.response?.data?.error?.message || err.message;
        console.log(`FAILED: ${detail}`);
        totalFailed++;
      }

      // Respect rate limits (5 req/sec for metadata API)
      await new Promise((r) => setTimeout(r, 250));
    }

    console.log("");
  }

  console.log("─────────────────────────────────");
  console.log(`Converted: ${totalConverted}`);
  console.log(`Already correct type: ${totalSkipped}`);
  if (totalFailed > 0) console.log(`Failed: ${totalFailed}`);
  console.log("");

  if (totalConverted === 0 && totalFailed === 0) {
    console.log("No fields needed conversion. Either:");
    console.log("  - Field names don't match the rules in this script");
    console.log("  - Fields are already the correct type");
    console.log("");
    console.log("Run `npm run inspect` to see your current field names/types.");
  } else {
    console.log(
      "Tip: Run `npm run inspect` to verify the field types changed."
    );
    console.log(
      "Note: If existing text values don't match select options exactly,"
    );
    console.log("      those cells may appear empty. Check your data in Airtable.");
  }
}

run().catch((err) => {
  if (err.response) {
    console.error(`API Error ${err.response.status}:`, err.response.data);
  } else {
    console.error("Error:", err.message);
  }
  process.exit(1);
});
