import { readdir, unlink } from "node:fs/promises";
import path from "node:path";

export const DESK_OUT_DIR = ".desk-out";

async function deletePdfsUnder(dir: string): Promise<number> {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return 0;
  }

  let count = 0;
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += await deletePdfsUnder(full);
      continue;
    }
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".pdf")) {
      try {
        await unlink(full);
        count += 1;
      } catch {
        // Keep going. Tracker write must not fail because a file is locked.
      }
    }
  }
  return count;
}

/** Remove leftover pack PDFs. Never touches tracker.json or weekly HTML. */
export async function deleteDeskOutPackPdfs(): Promise<number> {
  const root = path.join(process.cwd(), DESK_OUT_DIR);
  return deletePdfsUnder(root);
}
