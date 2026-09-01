export const DESK_KICKER = "Private";
export const DESK_TITLE = "Desk";
export const DESK_LOOP_INTRO =
  "Monday mail is a reminder. Open the posting. Apply by hand from Desk. Mark the tracker. Delete the download.";
export const DESK_PASSWORD_LABEL = "Password";
export const DESK_OPEN_LABEL = "Open";
export const DESK_SIGN_OUT_LABEL = "Sign out";
export const DESK_FORM_INTRO =
  "Paste a job description. The desk will say apply or skip.";
export const DESK_JD_LABEL = "Job description";
export const DESK_URL_LABEL = "Job URL (optional)";
export const DESK_EVALUATE_LABEL = "Evaluate";
export const DESK_DECISION_APPLY = "Apply";
export const DESK_DECISION_SKIP = "Skip";
export const DESK_DOWNLOAD_CV = "Download CV";
export const DESK_DOWNLOAD_LETTER = "Download letter";
export const DESK_APPLY_CV_LABEL = "Apply CV";
export const DESK_APPLY_CV_SWE = "SWE Doc";
export const DESK_APPLY_CV_FRONTEND = "Frontend Doc";
export const DESK_ATS_CV = "ATS draft CV";
export const DESK_CV_LABEL = "CV";

export function applyCvDocLabel(variant: "swe" | "frontend"): string {
  return variant === "frontend" ? DESK_APPLY_CV_FRONTEND : DESK_APPLY_CV_SWE;
}
export const DESK_WORK_LABEL = "Work to attach";
export const DESK_IEEE_LABEL = "Writing";
export const DESK_FLAGS_LABEL = "Red flags";
export const DESK_SIGNALS_LABEL = "Signals";
export const DESK_NOTES_LABEL = "Notes";
export const DESK_FETCH_FAIL =
  "Could not fetch that URL. Paste the description.";
export const DESK_GERMAN_PLUS = "German is a plus. Not a skip.";
export const DESK_INBOX_TITLE = "Inbox";
export const DESK_FIND_LABEL = "Find jobs";
export const DESK_FIND_INTRO =
  "Scan Arbeitnow and the curated company boards. Netherlands Arbeitnow hits need an IND-recognised sponsor. Up to two extra Singapore or Bangladesh Apply hits.";
export const DESK_FIND_EMPTY = "No apply-fit jobs in this scan.";
export const DESK_FIND_SKIPPED = "Skipped";
export const DESK_FIND_ERRORS = "Sources that failed";
export const DESK_OVERFLOW_TITLE = "Singapore / Bangladesh";
export const DESK_OVERFLOW_INTRO =
  "Up to two extra Apply hits. Same quality bar. Not the relocation track.";
export const DESK_OPEN_POSTING = "Open posting";
export const DESK_WEEKLY_INTRO =
  "Weekly shortlist. Reminder only. Open Desk for the pack. Nothing was submitted.";
export const DESK_WEEKLY_OPEN_DESK = "Open Desk";
export const DESK_WEEKLY_EMPTY = "No apply-fit jobs this week.";
export const DESK_TRACK_TITLE = "Tracker";
export const DESK_TRACK_INTRO =
  "Recorded jobs. They will not return in Find jobs or a local weekly run.";
export const DESK_STATUS_LABEL = "Status";
export const DESK_PASTE_TITLE = "Paste a job";
export const DESK_TRACK_APPLIED = "Applied";
export const DESK_TRACK_INTERVIEW = "Interview";
export const DESK_TRACK_SKIP = "Skip";
export const DESK_TRACK_SILENCE = "Silence";
export const DESK_TRACK_CLEAR = "Clear";
export const DESK_TRACK_EMPTY = "No recorded jobs.";
export const DESK_PREP_LABEL = "Prep";
export const DESK_PREP_INTRO =
  "Locked facts for this interview. Do not invent extra stories.";
export const DESK_PREP_FETCH_FAIL =
  "Could not load the posting. Prep uses the title and company only.";
export const DESK_PREP_LOGISTICS = "Logistics";
export const DESK_PREP_FACTS = "Experience to cite";
export const DESK_PREP_NOTICE = "Currently employed. 4-week notice.";
export const DESK_PREP_VISA =
  "Germany: EU Blue Card via employer offer. Netherlands: Kennismigrant via an IND-recognised sponsor. Canada: Express Entry STEM (secondary).";
export const DESK_PREP_GERMAN =
  "Professional English. German is not fluent.";
export const DESK_PREP_SALARY =
  "Ask range: about €65k–€85k gross, country-adjusted.";
export const DESK_PREP_ROLE =
  "Current role: Module Lead (Frontend) and Senior Software Engineer at SJ Innovation LLC.";
export const DESK_NOTES_TITLE = "Notes";
export const DESK_NOTES_INTRO =
  "Issues and ideas for a later spec. Same store as the tracker (gist on live, file locally). No database.";
export const DESK_NOTE_FIELD = "Note";
export const DESK_NOTES_SAVE = "Save";
export const DESK_NOTES_EMPTY = "No notes yet.";
export const DESK_NOTES_FAIL = "Could not save that note.";
