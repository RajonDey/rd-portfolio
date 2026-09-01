export type AtsProvider = "greenhouse" | "lever" | "ashby" | "personio";

export interface AtsBoard {
  provider: AtsProvider;
  token: string;
  company: string;
}

/** Curated DE/NL boards. Add owner-named tokens only; do not invent. */
export const ATS_BOARDS: AtsBoard[] = [
  { provider: "greenhouse", token: "contentful", company: "Contentful" },
  { provider: "greenhouse", token: "doctolib", company: "Doctolib" },
  { provider: "greenhouse", token: "adahealth", company: "Ada Health" },
  { provider: "greenhouse", token: "celonis", company: "Celonis" },
  { provider: "greenhouse", token: "n26", company: "N26" },
  { provider: "greenhouse", token: "bird", company: "Bird" },
  { provider: "ashby", token: "mollie", company: "Mollie" },
  { provider: "personio", token: "personio", company: "Personio" },
];
