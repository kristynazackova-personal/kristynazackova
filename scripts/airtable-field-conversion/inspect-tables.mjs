/**
 * Inspect your Airtable base: tables, fields, types, and record counts.
 *
 * Usage:
 *   1. Copy .env.example to .env and fill in your values
 *   2. npm install
 *   3. npm run inspect
 */

import axios from "axios";
import { readFileSync, writeFileSync } from "fs";
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
    // .env not found
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

const api = axios.create({
  baseURL: "https://api.airtable.com/v0",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
});

async function countRecords(tableId) {
  let total = 0;
  let offset = undefined;

  do {
    const params = { pageSize: 100 };
    if (offset) params.offset = offset;

    const res = await api.get(`/${BASE_ID}/${tableId}`, { params });
    total += res.data.records.length;
    offset = res.data.offset;
    await new Promise((r) => setTimeout(r, 220));
  } while (offset);

  return total;
}

async function inspectTables() {
  console.log("Fetching table schema...\n");

  const res = await api.get(`/meta/bases/${BASE_ID}/tables`);
  const tables = res.data.tables;

  console.log(`Found ${tables.length} table(s) in base ${BASE_ID}:\n`);

  for (const table of tables) {
    const recordCount = await countRecords(table.id);

    console.log(`━━━ TABLE: "${table.name}" (${table.id}) — ${recordCount} record(s) ━━━`);
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

  const outputPath = resolve(__dirname, "table-schema.json");
  writeFileSync(outputPath, JSON.stringify(tables, null, 2));
  console.log(`Full schema saved to table-schema.json`);
}

inspectTables().catch((err) => {
  if (err.response) {
    console.error(`API Error ${err.response.status}:`, err.response.data);
  } else {
    console.error("Error:", err.message);
  }
  process.exit(1);
});
