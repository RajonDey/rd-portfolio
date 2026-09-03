import { LEAD_FRONTEND_TITLE_PATTERN } from "./queries";

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

export const ENTRY_LEVEL_PATTERNS: RegExp[] = [/\bentry[-\s]?level\b/i];

export const SHORT_CONTRACT_PATTERNS: RegExp[] = [
  /\b(?:contract|fixed[-\s]?term).{0,48}(?:1|2|3|one|two|three)[-\s]?months?\b/i,
  /\b(?:1|2|3|one|two|three)[-\s]?months?\s+(?:contract|fixed[-\s]?term)\b/i,
  /\bshort[-\s]?term\s+contract\b/i,
];

export const PART_TIME_PATTERN = /\bpart[-\s]?time\b/i;
export const FULL_TIME_PATTERN = /\bfull[-\s]?time\b/i;

const US_AUTH_PATTERNS: RegExp[] = [
  /\bus\s+citizenship\b/i,
  /\bunited states citizenship\b/i,
  /\bgreen\s*card\b/i,
  /\bw-?2\b/i,
  /\bauthorized to work in the\s+(?:united states|u\.s\.a?|us)\b/i,
  /\bmust be (?:a )?u\.?s\.?\s+citizen\b/i,
  /\b(?:united states|usa|u\.s\.a?)\s+only\b/i,
  /\bus[-\s]only\b/i,
  /\bcitizens(?:hip)? of the united states\b/i,
];

const US_CONTEXT_PATTERNS: RegExp[] = [
  /\bunited states\b/i,
  /\busa\b/i,
  /\bu\.s\.a?\.?\b/i,
  /\bus[-\s]based\b/i,
  /\bus\s+work\b/i,
];

const NO_SPONSORSHIP_PATTERN =
  /\bno (?:visa )?sponsorship\b|\bcannot sponsor (?:a )?visa\b|\bunwilling to sponsor\b/i;

export function hasUsWorkAuthorizationVeto(text: string): boolean {
  if (US_AUTH_PATTERNS.some((pattern) => pattern.test(text))) {
    return true;
  }
  if (!NO_SPONSORSHIP_PATTERN.test(text)) {
    return false;
  }
  return (
    US_CONTEXT_PATTERNS.some((pattern) => pattern.test(text)) ||
    EXCLUDED_LOCATION_PATTERNS.some((pattern) => pattern.test(text))
  );
}

const ALREADY_RESIDE_PATTERNS: RegExp[] = [
  /\bmust (?:already )?(?:currently )?(?:live|reside|be (?:based|located)) in (?:the )?(?:eu|europe|uk|united kingdom|germany|deutschland|netherlands|holland|berlin|amsterdam)\b/i,
  /\bcandidates must (?:already )?be (?:based|located|living) in (?:the )?(?:eu|uk|germany|netherlands|europe)\b/i,
  /\bonly (?:candidates|applicants) (?:who are )?(?:already )?(?:based|living|residing) in (?:the )?(?:eu|uk|germany|netherlands|europe)\b/i,
  /\byou must (?:already )?be (?:located|based) in (?:germany|the netherlands|the eu|the uk)\b/i,
  /\buk residents only\b/i,
  /\bmust be (?:an? )?(?:eu|uk|german|dutch) resident\b/i,
  /\bmust currently reside in (?:the )?(?:eu|uk|europe|germany|netherlands)\b/i,
];

const RELOCATION_OK_PATTERNS: RegExp[] = [
  /\brelocat(?:e|ion)\b/i,
  /\bvisa\s+sponsor/i,
  /\bblue card\b/i,
  /\bkennismigrant\b/i,
  /\bhire from abroad\b/i,
];

export function hasRelocationVisaSignal(text: string): boolean {
  return RELOCATION_OK_PATTERNS.some((pattern) => pattern.test(text));
}

export function hasAlreadyInEuVeto(text: string): boolean {
  if (hasRelocationVisaSignal(text)) {
    return false;
  }
  return ALREADY_RESIDE_PATTERNS.some((pattern) => pattern.test(text));
}

const WRONG_ROLE_PATTERNS: RegExp[] = [
  /\b(?:devops|sre)\s+(?:engineer|specialist|lead)\b/i,
  /\bsite reliability engineer\b/i,
  /\bml research engineer\b/i,
  /\bmachine learning research engineer\b/i,
];

const MANAGER_TITLE_PATTERNS: RegExp[] = [
  /\bengineering manager\b/i,
  /\bhead of engineering\b/i,
  /\bvp of engineering\b/i,
  /\bdirector of engineering\b/i,
];

const HANDS_ON_IC_PATTERNS: RegExp[] = [
  /\bhands[-\s]?on\b/i,
  /\bindividual contributor\b/i,
  /\bstill code\b/i,
  /\bwrite code\b/i,
  /\bic\s+(?:engineer|role|track)\b/i,
];

function leadWindow(text: string): string {
  const lines = text
    .trim()
    .split(/\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  return lines.slice(0, 4).join("\n").slice(0, 400);
}

export function hasWrongRoleVeto(text: string): boolean {
  const lead = leadWindow(text);
  if (WRONG_ROLE_PATTERNS.some((pattern) => pattern.test(lead))) {
    return true;
  }
  if (!MANAGER_TITLE_PATTERNS.some((pattern) => pattern.test(lead))) {
    return false;
  }
  return !HANDS_ON_IC_PATTERNS.some((pattern) => pattern.test(text));
}

export const DSA_BAR_PATTERNS: RegExp[] = [
  /\bleetcode\b/i,
  /\bcompetitive programming\b/i,
  /\bdata structures?(?:\s+and\s+|\s*[&/]\s*)algorithms?\b/i,
  /\bdsa\s+(?:round|interview|bar|onsite)\b/i,
  /\balgorithm(?:ic)?\s+interview\b/i,
  /\bhackerrank\b.{0,48}\b(?:dsa|algorithm|data structure)/i,
];

export function hasDsaInterviewBar(text: string): boolean {
  return DSA_BAR_PATTERNS.some((pattern) => pattern.test(text));
}

const CS_DEGREE_REQUIRED_PATTERNS: RegExp[] = [
  /(?:computer science|cse)\s+degree\s+required/i,
  /degree in computer science required/i,
  /must (?:have|hold) (?:a )?(?:computer science|cs|cse) degree/i,
  /(?:cs|cse) degree is required/i,
  /required:? (?:a )?(?:bachelor'?s? )?(?:degree )?in computer science/i,
];

const CS_PREFERRED_PATTERNS: RegExp[] = [
  /(?:computer science|cs|cse) degree (?:preferred|is a plus|nice to have)/i,
  /(?:preferred|plus|nice to have):? (?:a )?degree in computer science/i,
];

const CS_EQUIVALENT_PATTERN =
  /\bor equivalent\b|\bor related (?:field|discipline)\b|\bor comparable experience\b|\bor similar experience\b/i;

export function hasCsDegreeRequired(text: string): boolean {
  if (CS_PREFERRED_PATTERNS.some((pattern) => pattern.test(text))) {
    if (!CS_DEGREE_REQUIRED_PATTERNS.some((pattern) => pattern.test(text))) {
      return false;
    }
  }
  if (!CS_DEGREE_REQUIRED_PATTERNS.some((pattern) => pattern.test(text))) {
    return false;
  }
  return !CS_EQUIVALENT_PATTERN.test(text);
}

export function hasCsDegreePreferred(text: string): boolean {
  if (hasCsDegreeRequired(text)) {
    return false;
  }
  return CS_PREFERRED_PATTERNS.some((pattern) => pattern.test(text));
}

const DSA_SOFT_PATTERNS: RegExp[] = [
  /\bhackerrank\b/i,
  /\bwhiteboard\b/i,
  /\balgorithms?\s+round\b/i,
];

export function hasDsaSoftMention(text: string): boolean {
  if (hasDsaInterviewBar(text)) {
    return false;
  }
  return DSA_SOFT_PATTERNS.some((pattern) => pattern.test(text));
}

const REMOTE_COUNTRY_PATTERNS: RegExp[] = [
  /\bremote[-\s]?(?:de|nl|ca)\b/i,
  /\bremote(?:ly)?\s+(?:in|from|to)\s+(?:germany|deutschland|netherlands|nederland|holland|canada|berlin|munich|m[uü]nchen|hamburg|amsterdam|rotterdam|toronto|vancouver|montreal)\b/i,
  /\b(?:germany|deutschland|netherlands|nederland|holland|canada|berlin|munich|m[uü]nchen|hamburg|amsterdam).{0,24}remote\b/i,
  /\bremote.{0,24}(?:germany|deutschland|netherlands|nederland|holland|canada|berlin|amsterdam)\b/i,
];

export function hasRemoteCountrySignal(text: string): boolean {
  return REMOTE_COUNTRY_PATTERNS.some((pattern) => pattern.test(text));
}

export function hasMidSizeCompanySignal(text: string): boolean {
  if (/\b(?:mid[-\s]?sized?|scale[-\s]?up)\b/i.test(text)) {
    return true;
  }
  const range = text.match(
    /\b(\d{2,4})\s*(?:-|–|to)\s*(\d{2,4})\s*(?:employees|people)\b/i
  );
  if (range) {
    const low = Number(range[1]);
    const high = Number(range[2]);
    return low >= 50 && high <= 500;
  }
  const singles = text.matchAll(/\b(\d{2,4})\s+(?:employees|people)\b/gi);
  for (const match of singles) {
    const count = Number(match[1]);
    if (count >= 50 && count <= 500) {
      return true;
    }
  }
  return false;
}

export const CORE_STACK_LABELS = ["React", "Next.js", "TypeScript"] as const;
export const BRIDGE_STACK_LABELS = ["Node.js", "Python", "FastAPI"] as const;

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
    {
      label: "Tech Lead",
      pattern:
        /\b(?:tech(?:nical)?\s+lead|module\s+lead|lead\s+front[-\s]?end)\b/i,
    },
  ];

export const FRONTEND_TITLE_PATTERN =
  /\b(?:senior\s+)?front[-\s]?end\s+(?:engineer|developer)|ui engineer|react developer\b/i;

export const TECH_LEAD_TITLE_PATTERN =
  /\b(?:tech(?:nical)?\s+lead|module\s+lead|lead\s+front[-\s]?end)\b/i;

export function matchesOverlayTitle(title: string): boolean {
  return (
    TARGET_TITLE_PATTERNS.some((item) => item.pattern.test(title)) ||
    FRONTEND_TITLE_PATTERN.test(title) ||
    TECH_LEAD_TITLE_PATTERN.test(title) ||
    LEAD_FRONTEND_TITLE_PATTERN.test(title)
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
