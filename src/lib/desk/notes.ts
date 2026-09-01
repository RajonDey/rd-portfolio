import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  GIST_FEEDBACK_FILE,
  isGistTrackerEnabled,
  readGistTextFile,
  writeGistTextFile,
} from "./gist-tracker";
import type { DeskNote, NotesFile } from "./notes-types";

export type { DeskNote, NotesFile } from "./notes-types";

const NOTES_PATH = path.join(process.cwd(), ".desk-out", "feedback.json");
const TEXT_CAP = 2_000;
const NOTE_CAP = 80;

function parseNotes(file: NotesFile): NotesFile {
  if (!Array.isArray(file.notes)) {
    return { notes: [] };
  }
  return {
    notes: file.notes.filter(
      (note): note is DeskNote =>
        Boolean(note) &&
        typeof note.id === "string" &&
        typeof note.text === "string" &&
        typeof note.createdAt === "string" &&
        note.text.trim().length > 0
    ),
  };
}

async function readNotesFile(): Promise<NotesFile> {
  if (isGistTrackerEnabled()) {
    const raw = await readGistTextFile(GIST_FEEDBACK_FILE);
    if (!raw) {
      return { notes: [] };
    }
    try {
      const parsed: unknown = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object" || !("notes" in parsed)) {
        return { notes: [] };
      }
      return parseNotes(parsed as NotesFile);
    } catch {
      return { notes: [] };
    }
  }

  try {
    const raw = await readFile(NOTES_PATH, "utf8");
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || !("notes" in parsed)) {
      return { notes: [] };
    }
    return parseNotes(parsed as NotesFile);
  } catch {
    return { notes: [] };
  }
}

async function writeNotesFile(file: NotesFile): Promise<void> {
  const next = parseNotes(file);
  const body = `${JSON.stringify(next, null, 2)}\n`;
  if (isGistTrackerEnabled()) {
    const ok = await writeGistTextFile(GIST_FEEDBACK_FILE, body);
    if (!ok) {
      throw new Error("Notes write failed.");
    }
    return;
  }
  await mkdir(path.dirname(NOTES_PATH), { recursive: true });
  await writeFile(NOTES_PATH, body, "utf8");
}

export async function listDeskNotes(): Promise<DeskNote[]> {
  const file = await readNotesFile();
  return [...file.notes].sort((left, right) =>
    right.createdAt.localeCompare(left.createdAt)
  );
}

function noteId(): string {
  return `n${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

export async function addDeskNote(text: string): Promise<DeskNote[]> {
  const trimmed = text.trim().slice(0, TEXT_CAP);
  if (!trimmed) {
    return listDeskNotes();
  }
  const file = await readNotesFile();
  const next: DeskNote = {
    id: noteId(),
    text: trimmed,
    createdAt: new Date().toISOString(),
  };
  const notes = [next, ...file.notes].slice(0, NOTE_CAP);
  await writeNotesFile({ notes });
  return listDeskNotes();
}

export async function clearDeskNote(id: string): Promise<DeskNote[]> {
  const key = id.trim();
  if (!key) {
    return listDeskNotes();
  }
  const file = await readNotesFile();
  await writeNotesFile({
    notes: file.notes.filter((note) => note.id !== key),
  });
  return listDeskNotes();
}
