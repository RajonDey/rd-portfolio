import { ABOUT_LOCATION, ABOUT_STACK } from "../about";
import { experiences } from "../data";
import { getCareerStartYear, getYearsOfExperienceLabel } from "../experience";
import {
  DESK_DSA_NOTE,
  DESK_FLAG_DSA,
  DESK_PREP_GERMAN,
  DESK_PREP_NOTICE,
  DESK_PREP_ROLE,
  DESK_PREP_SALARY,
  DESK_PREP_VISA,
} from "./copy";
import { fetchJobDescription } from "./fetch-jd";
import { scoreJobText, type FitResult } from "./fit";
import { hasDsaInterviewBar } from "./rules";

export interface InterviewPrep {
  fit: FitResult;
  fetched: boolean;
  jdText: string;
  logistics: string[];
  experience: string[];
}

function currentRoleBullets(): string[] {
  const role =
    experiences.find((item) => /SJ Innovation/i.test(item.company)) ??
    experiences[0];
  return role?.description ?? [];
}

export function interviewLogistics(): string[] {
  return [
    DESK_PREP_ROLE,
    DESK_PREP_NOTICE,
    `${getYearsOfExperienceLabel()} of corporate experience since ${getCareerStartYear()}.`,
    ABOUT_LOCATION,
    ABOUT_STACK,
    DESK_PREP_VISA,
    DESK_PREP_GERMAN,
    DESK_PREP_SALARY,
  ];
}

function withDsaNote(fit: FitResult, scoreText: string): FitResult {
  const dsa =
    fit.redFlags.includes(DESK_FLAG_DSA) || hasDsaInterviewBar(scoreText);
  if (!dsa || fit.notes.includes(DESK_DSA_NOTE)) {
    return fit;
  }
  return { ...fit, notes: [...fit.notes, DESK_DSA_NOTE] };
}

export function interviewPrepFromText(
  scoreText: string,
  fetched: boolean,
  jdText: string
): InterviewPrep {
  return {
    fit: withDsaNote(scoreJobText(scoreText), scoreText),
    fetched,
    jdText,
    logistics: interviewLogistics(),
    experience: currentRoleBullets(),
  };
}

export async function buildInterviewPrep(input: {
  url: string;
  title: string;
  company: string;
}): Promise<InterviewPrep> {
  const fetchedText = input.url.trim()
    ? await fetchJobDescription(input.url)
    : null;
  const fallback = [input.title, input.company].filter(Boolean).join("\n");
  const scoreText = fetchedText || fallback;
  return interviewPrepFromText(
    scoreText,
    Boolean(fetchedText),
    fetchedText || ""
  );
}
