"use client";

import { FormEvent, useEffect, useState } from "react";
import { deskTextActionClass } from "@/components/Desk/DeskTracker";
import {
  DESK_NOTES_EMPTY,
  DESK_NOTES_FAIL,
  DESK_NOTES_INTRO,
  DESK_NOTE_FIELD,
  DESK_NOTES_SAVE,
  DESK_NOTES_TITLE,
  DESK_TRACK_CLEAR,
} from "@/lib/desk/copy";
import type { DeskNote } from "@/lib/desk/notes-types";

const fieldClass =
  "mt-2 block w-full bg-background border border-black/10 px-3 py-2 text-textDark";

export default function DeskNotes() {
  const [notes, setNotes] = useState<DeskNote[] | null>(null);
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const response = await fetch("/desk/notes", { cache: "no-store" });
      if (!response.ok) {
        if (!cancelled) {
          setNotes([]);
        }
        return;
      }
      const data = (await response.json()) as { notes: DeskNote[] };
      if (!cancelled) {
        setNotes(data.notes);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  async function onSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setFailed(false);
    try {
      const body = new FormData();
      body.set("text", draft);
      const response = await fetch("/desk/notes", { method: "POST", body });
      if (!response.ok) {
        setFailed(true);
        return;
      }
      const data = (await response.json()) as { notes: DeskNote[] };
      setNotes(data.notes);
      setDraft("");
    } finally {
      setPending(false);
    }
  }

  async function onClear(id: string) {
    setPending(true);
    setFailed(false);
    try {
      const body = new FormData();
      body.set("id", id);
      body.set("status", "clear");
      const response = await fetch("/desk/notes", { method: "POST", body });
      if (!response.ok) {
        setFailed(true);
        return;
      }
      const data = (await response.json()) as { notes: DeskNote[] };
      setNotes(data.notes);
    } finally {
      setPending(false);
    }
  }

  const list = notes ?? [];

  return (
    <details className="max-w-3xl border-t border-black/10 pt-8 pb-12">
      <summary className="cursor-pointer mb-6">
        <h2 className="inline text-2xl font-bold text-textDark">
          {DESK_NOTES_TITLE}
        </h2>
      </summary>
      <p className="text-lg text-textLight mb-6">{DESK_NOTES_INTRO}</p>
      <form onSubmit={onSave} className="space-y-4 mb-10">
        <label className="block">
          <span className="text-sm font-medium text-textDark">
            {DESK_NOTE_FIELD}
          </span>
          <textarea
            name="text"
            rows={4}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            className={fieldClass}
          />
        </label>
        <button
          type="submit"
          disabled={pending || !draft.trim()}
          className={deskTextActionClass}
        >
          {DESK_NOTES_SAVE}
        </button>
      </form>
      {failed ? <p className="text-textLight mb-6">{DESK_NOTES_FAIL}</p> : null}
      {list.length === 0 ? (
        <p className="text-lg text-textLight">{DESK_NOTES_EMPTY}</p>
      ) : (
        <ul>
          {list.map((note) => (
            <li
              key={note.id}
              className="space-y-2 py-6 border-b border-black/10 last:border-b-0"
            >
              <p className="text-sm text-textLight">
                {note.createdAt.slice(0, 10)}
              </p>
              <p className="text-textDark whitespace-pre-wrap">{note.text}</p>
              <button
                type="button"
                disabled={pending}
                onClick={() => void onClear(note.id)}
                className={deskTextActionClass}
              >
                {DESK_TRACK_CLEAR}
              </button>
            </li>
          ))}
        </ul>
      )}
    </details>
  );
}
