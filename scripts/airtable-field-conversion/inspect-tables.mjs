/**
 * Step 1: Inspect your Airtable base to see all tables, fields, and their current types.
 *
 * Usage:
 *   1. Copy .env.example to .env and fill in your values
 *   2. npm install
 *   3. npm run inspect
 */

import axios from "axios";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env manually (no extra dependency needed)
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
    // .env file not found, rely on existing env vars
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

async function inspectTables() {
  const res = await axios.get(
    `https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`,
    {
      headers: { Authorization: `Bearer ${API_KEY}` },
    }
  );

  const tables = res.data.tables;

  console.log(`\nFound ${tables.length} table(s) in base ${BASE_ID}:\n`);

  for (const table of tables) {
    console.log(`━━━ TABLE: "${table.name}" (${table.id}) ━━━`);
    console.log("");

    for (const field of table.fields) {
      const typeInfo = field.options
        ? `${field.type} → options: ${JSON.stringify(field.options)}`
        : field.type;
      console.log(`  ${field.name}`);
      console.log(`    ID:   ${field.id}`);
      console.log(`    Type: ${typeInfo}`);
      console.log("");
    }
  }

  // Also write raw JSON for reference
  const outputPath = resolve(__dirname, "../table-schema.json");
  const { writeFileSync } = await import("fs");
  writeFileSync(outputPath, JSON.stringify(tables, null, 2));
  console.log(`\nFull schema saved to table-schema.json`);
}

inspectTables().catch((err) => {
  if (err.response) {
    console.error(`API Error ${err.response.status}:`, err.response.data);
  } else {
    console.error("Error:", err.message);
  }
  process.exit(1);
});
