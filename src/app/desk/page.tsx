import { hasDeskSession } from "@/lib/desk/access";
import {
  DESK_KICKER,
  DESK_LOOP_INTRO,
  DESK_OPEN_LABEL,
  DESK_PASSWORD_LABEL,
  DESK_STORE_GIST,
  DESK_STORE_GIST_WARNING,
  DESK_STORE_LOCAL,
  DESK_TITLE,
} from "@/lib/desk/copy";
import {
  deskStoreMode,
  deskStoreNeedsGistWarning,
} from "@/lib/desk/gist-tracker";
import DeskShell from "@/components/Desk/DeskShell";

export default async function DeskPage() {
  const signedIn = await hasDeskSession();
  const storeMode = deskStoreMode();
  const showGistWarning = deskStoreNeedsGistWarning();

  return (
    <main className="min-h-screen bg-background">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-wider text-textLight mb-4">
            {DESK_KICKER}
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-textDark mb-4">
            {DESK_TITLE}
          </h1>
          {signedIn ? (
            <div className="max-w-5xl">
              <p className="text-sm text-textLight mb-2">{DESK_LOOP_INTRO}</p>
              <p className="text-sm text-textLight mb-2">
                {storeMode === "gist" ? DESK_STORE_GIST : DESK_STORE_LOCAL}
              </p>
              {showGistWarning ? (
                <p className="text-sm text-textLight mb-4">
                  {DESK_STORE_GIST_WARNING}
                </p>
              ) : (
                <div className="mb-4" />
              )}
              <DeskShell />
            </div>
          ) : (
            <form
              action="/desk/session"
              method="post"
              className="max-w-3xl space-y-6"
            >
              <label className="block">
                <span className="text-sm font-medium text-textDark">
                  {DESK_PASSWORD_LABEL}
                </span>
                <input
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  className="mt-2 block w-full max-w-sm bg-background border border-black/10 px-3 py-2 text-textDark"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-accent transition-colors"
              >
                {DESK_OPEN_LABEL}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
