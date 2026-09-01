import { ABOUT_LOCATION, ABOUT_STACK } from "../about";
import { experiences } from "../data";
import { getCareerStartYear, getYearsOfExperienceLabel } from "../experience";
import {
  DESK_PREP_GERMAN,
  DESK_PREP_NOTICE,
  DESK_PREP_ROLE,
  DESK_PREP_SALARY,
  DESK_PREP_VISA,
} from "./copy";
import { fetchJobDescription } from "./fetch-jd";
import { scoreJobText, type FitResult } from "./fit";

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

export function interviewPrepFromText(
  scoreText: string,
  fetched: boolean,
  jdText: string
): InterviewPrep {
  return {
    fit: scoreJobText(scoreText),
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
