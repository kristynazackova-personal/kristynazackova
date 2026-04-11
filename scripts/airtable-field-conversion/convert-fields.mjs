/**
 * Step 2: Convert text fields to their proper types (select, number, etc.)
 *
 * This script reads the conversion config below and applies PATCH requests
 * to the Airtable Metadata API to convert field types.
 *
 * Usage:
 *   1. Run `npm run inspect` first to get your table/field IDs
 *   2. Fill in the CONVERSIONS array below with your actual IDs
 *   3. npm run convert
 *
 * IMPORTANT: Airtable may not cleanly map existing text values to select
 * options. After conversion, run the cleanup script if needed.
 */

import axios from "axios";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env
function loadEnv() {
  try {
    const envPath = resolve(__dirname, "../.env");
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
  process.exit(1);
}

// ═══════════════════════════════════════════════════════════════
// CONVERSION CONFIG — fill in your table/field IDs from inspect
// ═══════════════════════════════════════════════════════════════

const CONVERSIONS = [
  // Example: Category → single select
  // {
  //   tableId: "tblXXXXXXXXXX",
  //   fieldId: "fldXXXXXXXXXX",
  //   fieldName: "Category",  // just for logging
  //   type: "singleSelect",
  //   options: {
  //     choices: [
  //       { name: "Work" },
  //       { name: "Startup" },
  //       { name: "Growth" },
  //       { name: "Idea" },
  //       { name: "Personal Brand" },
  //     ],
  //   },
  // },

  // Example: Status → single select
  // {
  //   tableId: "tblXXXXXXXXXX",
  //   fieldId: "fldXXXXXXXXXX",
  //   fieldName: "Status",
  //   type: "singleSelect",
  //   options: {
  //     choices: [
  //       { name: "Idea" },
  //       { name: "Early" },
  //       { name: "In Progress" },
  //       { name: "Active" },
  //       { name: "Paused" },
  //       { name: "Done" },
  //     ],
  //   },
  // },

  // Example: Priority → single select
  // {
  //   tableId: "tblXXXXXXXXXX",
  //   fieldId: "fldXXXXXXXXXX",
  //   fieldName: "Priority",
  //   type: "singleSelect",
  //   options: {
  //     choices: [
  //       { name: "High" },
  //       { name: "Medium" },
  //       { name: "Low" },
  //     ],
  //   },
  // },

  // Example: Impact → number
  // {
  //   tableId: "tblXXXXXXXXXX",
  //   fieldId: "fldXXXXXXXXXX",
  //   fieldName: "Impact",
  //   type: "number",
  //   options: { precision: 0 },
  // },

  // Example: Effort → number
  // {
  //   tableId: "tblXXXXXXXXXX",
  //   fieldId: "fldXXXXXXXXXX",
  //   fieldName: "Effort",
  //   type: "number",
  //   options: { precision: 0 },
  // },

  // Example: Confidence → number
  // {
  //   tableId: "tblXXXXXXXXXX",
  //   fieldId: "fldXXXXXXXXXX",
  //   fieldName: "Confidence",
  //   type: "number",
  //   options: { precision: 0 },
  // },
];

// ═══════════════════════════════════════════════════════════════

async function convertField(conversion) {
  const { tableId, fieldId, fieldName, type, options } = conversion;
  const url = `https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables/${tableId}/fields/${fieldId}`;

  const body = { type };
  if (options) {
    body.options = options;
  }

  const res = await axios.patch(url, body, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  return res.data;
}

async function run() {
  if (CONVERSIONS.length === 0) {
    console.log("No conversions configured.");
    console.log("");
    console.log("Steps:");
    console.log("  1. Run `npm run inspect` to get your table/field IDs");
    console.log("  2. Edit scripts/convert-fields.mjs");
    console.log("  3. Uncomment and fill in the CONVERSIONS array");
    console.log("  4. Run `npm run convert` again");
    return;
  }

  console.log(`\nConverting ${CONVERSIONS.length} field(s)...\n`);

  for (const conversion of CONVERSIONS) {
    const { fieldName, type } = conversion;
    process.stdout.write(`  ${fieldName} → ${type} ... `);

    try {
      await convertField(conversion);
      console.log("done");
    } catch (err) {
      const detail = err.response?.data?.error?.message || err.message;
      console.log(`FAILED: ${detail}`);
    }

    // Small delay to respect rate limits (5 req/sec for metadata API)
    await new Promise((r) => setTimeout(r, 250));
  }

  console.log("\nConversion complete.");
  console.log(
    "Tip: Run `npm run inspect` again to verify the field types changed."
  );
}

run();
