import { readFileSync } from "node:fs";
import {
  buildWeeklyMail,
  sendWeeklyMail,
  writeWeeklyDryRun,
} from "../src/lib/desk/weekly";

function loadEnvLocal() {
  try {
    const text = readFileSync(".env.local", "utf8");
    for (const line of text.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }
      const eq = trimmed.indexOf("=");
      if (eq < 1) {
        continue;
      }
      const key = trimmed.slice(0, eq);
      const value = trimmed.slice(eq + 1).replace(/^["']|["']$/g, "");
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  } catch {
    // GitHub Actions and CI have no .env.local.
  }
}

async function main() {
  loadEnvLocal();
  const dryRun = process.argv.includes("--dry-run");
  const mail = await buildWeeklyMail();
  if (dryRun) {
    const dir = await writeWeeklyDryRun(mail);
    console.log(`Dry run wrote email.html to ${dir}`);
    console.log(mail.subject);
    return;
  }
  await sendWeeklyMail(mail);
  console.log(`Sent: ${mail.subject}`);
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : "Weekly run failed.";
  console.error(message);
  process.exit(1);
});
