export type AtsProvider = "greenhouse" | "lever" | "ashby" | "personio";

export interface AtsBoard {
  provider: AtsProvider;
  token: string;
  company: string;
}

/** Owner-named boards only; do not invent. Remotive and HN Who is Hiring are separate feeds (`2.21`). */
export const ATS_BOARDS: AtsBoard[] = [
  { provider: "greenhouse", token: "contentful", company: "Contentful" },
  { provider: "greenhouse", token: "doctolib", company: "Doctolib" },
  { provider: "greenhouse", token: "adahealth", company: "Ada Health" },
  { provider: "greenhouse", token: "celonis", company: "Celonis" },
  { provider: "greenhouse", token: "n26", company: "N26" },
  { provider: "greenhouse", token: "bird", company: "Bird" },
  { provider: "ashby", token: "mollie", company: "Mollie" },
  { provider: "personio", token: "personio", company: "Personio" },
  { provider: "ashby", token: "babbel", company: "Babbel" },
  { provider: "greenhouse", token: "d2l", company: "D2L" },
  { provider: "greenhouse", token: "storyblok", company: "Storyblok" },
  { provider: "ashby", token: "1password", company: "1Password" },
  { provider: "ashby", token: "wealthsimple", company: "Wealthsimple" },
  { provider: "ashby", token: "cohere", company: "Cohere" },
  { provider: "greenhouse", token: "raisin", company: "Raisin" },
  { provider: "ashby", token: "miro", company: "Miro" },
];
