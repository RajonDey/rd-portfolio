import { hasDeskSession } from "@/lib/desk/access";
import {
  DESK_KICKER,
  DESK_LOOP_INTRO,
  DESK_OPEN_LABEL,
  DESK_PASSWORD_LABEL,
  DESK_PASTE_TITLE,
  DESK_SIGN_OUT_LABEL,
  DESK_TITLE,
} from "@/lib/desk/copy";
import DeskNotes from "@/components/Desk/DeskNotes";
import DeskDiscover from "@/components/Desk/DeskDiscover";
import DeskFitForm from "@/components/Desk/DeskFitForm";
import DeskTracker from "@/components/Desk/DeskTracker";

export default async function DeskPage() {
  const signedIn = await hasDeskSession();

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
            <div>
              <p className="max-w-3xl text-lg text-textLight mb-8">
                {DESK_LOOP_INTRO}
              </p>
              <form action="/desk/session" method="post" className="mb-10">
                <input type="hidden" name="_action" value="signout" />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  {DESK_SIGN_OUT_LABEL}
                </button>
              </form>
              <DeskDiscover />
              <DeskTracker />
              <details className="max-w-3xl border-t border-black/10 pt-8 pb-12">
                <summary className="cursor-pointer mb-6">
                  <h2 className="inline text-2xl font-bold text-textDark">
                    {DESK_PASTE_TITLE}
                  </h2>
                </summary>
                <DeskFitForm />
              </details>
              <DeskNotes />
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
