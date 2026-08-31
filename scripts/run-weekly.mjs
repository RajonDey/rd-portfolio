import { mkdir } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, ".desk-out");
const outfile = path.join(outDir, "_weekly.cjs");

await mkdir(outDir, { recursive: true });

await build({
  absWorkingDir: root,
  entryPoints: [path.join(root, "scripts/desk-weekly.ts")],
  bundle: true,
  platform: "node",
  format: "cjs",
  outfile,
  packages: "external",
  logLevel: "silent",
});

const child = spawn(
  process.execPath,
  [outfile, ...process.argv.slice(2)],
  { stdio: "inherit", cwd: root }
);

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
