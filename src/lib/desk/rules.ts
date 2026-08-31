export const GERMAN_SKIP_PATTERNS: RegExp[] = [
  /deutsch in wort und schrift/i,
  /flie[sß]send deutsch/i,
  /verhandlungssicher/i,
  /german\s*(language\s*)?(c1|c2)/i,
  /fluent(?:\s+in)?\s+german/i,
  /native(?:-|\s+)german/i,
  /german\s+native/i,
  /deutsch(?:kenntnisse)?\s+erforderlich/i,
];

export const GERMAN_PLUS_PATTERNS: RegExp[] = [
  /german\s+(is\s+)?(a\s+)?(plus|bonus|advantage|nice to have|optional)/i,
  /deutsch(?:e?\s+kenntnisse)?\s+(von\s+)?vorteil/i,
];

export const GERMAN_REQUIRED_PATTERNS: RegExp[] = [
  /german(?:\s+language)?\s+required/i,
  /must\s+(?:speak|have)\s+german/i,
];

export const CONTRACT_SKIP_PATTERNS: RegExp[] = [
  /\bfreelance\b/i,
  /\bcontractor\b/i,
  /\bcontract(?:or)?\s+(?:role|position|job|work)\b/i,
  /\bhourly\b/i,
  /\bwerkstudent\b/i,
  /\bpraktikum\b/i,
  /\bworking[-\s]?student\b/i,
  /\bintern(?:ship)?\b/i,
  /\bjunior\b/i,
];

export const PART_TIME_PATTERN = /\bpart[-\s]?time\b/i;
export const FULL_TIME_PATTERN = /\bfull[-\s]?time\b/i;

export const EXCLUDED_LOCATION_PATTERNS: RegExp[] = [
  /\bportugal\b/i,
  /\bestonia\b/i,
  /\bunited states\b/i,
  /\busa\b/i,
  /\bu\.s\.a?\.?\b/i,
  /\bmust be (?:located )?in the us\b/i,
];

export const TARGET_TITLE_PATTERNS: Array<{ label: string; pattern: RegExp }> =
  [
    { label: "Senior Software Engineer", pattern: /senior\s+software\s+engineer/i },
    { label: "Full-Stack Engineer", pattern: /full[-\s]?stack\s+(?:engineer|developer)/i },
    { label: "Senior Frontend Engineer", pattern: /senior\s+front[-\s]?end/i },
    { label: "Tech Lead", pattern: /\b(?:tech(?:nical)?\s+lead|module\s+lead)\b/i },
  ];

export const FRONTEND_TITLE_PATTERN =
  /\b(?:senior\s+)?front[-\s]?end\s+(?:engineer|developer)|ui engineer|react developer\b/i;

export const TECH_LEAD_TITLE_PATTERN =
  /\b(?:tech(?:nical)?\s+lead|module\s+lead)\b/i;

export function matchesOverlayTitle(title: string): boolean {
  return (
    TARGET_TITLE_PATTERNS.some((item) => item.pattern.test(title)) ||
    FRONTEND_TITLE_PATTERN.test(title) ||
    TECH_LEAD_TITLE_PATTERN.test(title)
  );
}

export const STACK_PATTERNS: Array<{ label: string; pattern: RegExp }> = [
  { label: "React", pattern: /\breact\b/i },
  { label: "Next.js", pattern: /\bnext(?:\.js|js)\b/i },
  { label: "TypeScript", pattern: /\btypescript\b/i },
  { label: "Node.js", pattern: /\bnode(?:\.js)?\b/i },
  { label: "Python", pattern: /\bpython\b/i },
  { label: "FastAPI", pattern: /\bfastapi\b/i },
];

export const INDUSTRY_PATTERNS: Array<{
  label: string;
  pattern: RegExp;
  slugs: string[];
  ieee?: boolean;
}> = [
  {
    label: "healthcare / EMR",
    pattern: /\b(?:healthcare|health care|emr|ehr|clinic|medical spa|patient)\b/i,
    slugs: ["calystapro-emr", "patient-experience-propel-health"],
  },
  {
    label: "headless CMS / DXP",
    pattern: /\b(?:headless|dxp|contentful|cms)\b/i,
    slugs: ["dxp-neutrogena-migration"],
  },
  {
    label: "B2B / marketplace",
    pattern: /\b(?:b2b|marketplace|data center)\b/i,
    slugs: ["racksub-b2b-platform"],
  },
  {
    label: "EdTech",
    pattern: /\b(?:edtech|ed-tech|education(?:al)?|ielts|assessment)\b/i,
    slugs: ["online-ielts-test-platform"],
  },
  {
    label: "product / planning",
    pattern: /\b(?:year in review|goal|habit|planning platform)\b/i,
    slugs: ["year-in-review"],
  },
  {
    label: "LLM / AI security",
    pattern:
      /\b(?:llm|large language model|jailbreak|adversarial|ai security|prompt injection)\b/i,
    slugs: [],
    ieee: true,
  },
];
