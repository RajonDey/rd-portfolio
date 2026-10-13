import {
  DESK_APPLY_DOCS_CV,
  DESK_APPLY_DOCS_INTRO,
  DESK_APPLY_DOCS_LETTER,
} from "@/lib/desk/copy";
import { COVER_LETTER_DOC_URL, MASTER_CV_DOC_URL } from "@/lib/site";

export default function DeskApplyDocs() {
  return (
    <div className="mb-2">
      <p className="flex flex-wrap gap-x-4 gap-y-2 mb-2">
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
      </p>
      <p className="text-sm text-textLight">{DESK_APPLY_DOCS_INTRO}</p>
    </div>
  );
}
