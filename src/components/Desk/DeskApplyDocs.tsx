import {
  DESK_APPLY_DOCS_CV,
  DESK_APPLY_DOCS_INTRO,
  DESK_APPLY_DOCS_LETTER,
  DESK_APPLY_DOCS_TITLE,
} from "@/lib/desk/copy";
import { COVER_LETTER_DOC_URL, MASTER_CV_DOC_URL } from "@/lib/site";

export default function DeskApplyDocs() {
  return (
    <div className="max-w-3xl border-t border-black/10 pt-8 pb-12">
      <h2 className="text-2xl font-bold text-textDark mb-4">
        {DESK_APPLY_DOCS_TITLE}
      </h2>
      <p className="text-lg text-textLight mb-6">{DESK_APPLY_DOCS_INTRO}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        <a
          href={MASTER_CV_DOC_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-textDark underline underline-offset-4"
        >
          {DESK_APPLY_DOCS_CV}
        </a>
        <a
          href={COVER_LETTER_DOC_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-textDark underline underline-offset-4"
        >
          {DESK_APPLY_DOCS_LETTER}
        </a>
      </div>
    </div>
  );
}
