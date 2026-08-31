import { DESK_FETCH_FAIL } from "./copy";
import { fetchJobDescription } from "./fetch-jd";
import { scoreJobText, type FitResult } from "./fit";

export interface ScoredJobInput {
  result: FitResult;
  jdText: string;
}

export async function scoreJobFromForm(
  form: FormData
): Promise<ScoredJobInput> {
  const pasted = String(form.get("description") ?? "").trim();
  const url = String(form.get("url") ?? "").trim();

  let fetched: string | null = null;
  let fetchFailed = false;
  if (url) {
    fetched = await fetchJobDescription(url);
    if (!fetched) {
      fetchFailed = true;
    }
  }

  const jdText = [pasted, fetched].filter(Boolean).join("\n\n");
  const result = scoreJobText(jdText);
  if (fetchFailed && !pasted) {
    result.decision = "skip";
    result.work = [];
    result.includeIeee = false;
    result.redFlags = [DESK_FETCH_FAIL];
    result.signals = [];
    result.notes = [];
  } else if (fetchFailed) {
    result.notes = [...result.notes, DESK_FETCH_FAIL];
  }

  return { result, jdText };
}
