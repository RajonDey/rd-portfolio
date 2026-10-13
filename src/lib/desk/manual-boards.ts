export interface ManualBoardLink {
  label: string;
  href: string;
}

export interface ManualBoard {
  id: string;
  name: string;
  mark: string;
  links: ManualBoardLink[];
  note: string;
}

/** Paste-only boards from the job-search overlay. No fetch. */
export const MANUAL_BOARDS: ManualBoard[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    mark: "Li",
    links: [{ label: "Open", href: "https://www.linkedin.com/jobs/" }],
    note: "Search the filter below. Paste a posting into Desk when you want a score before you send.",
  },
  {
    id: "indeed",
    name: "Indeed",
    mark: "In",
    links: [
      { label: "Germany", href: "https://de.indeed.com/" },
      { label: "Netherlands", href: "https://nl.indeed.com/" },
      { label: "Canada", href: "https://ca.indeed.com/" },
    ],
    note: "Use these three sites. Skip Indeed United States.",
  },
  {
    id: "wellfound",
    name: "Wellfound",
    mark: "Wf",
    links: [{ label: "Open", href: "https://wellfound.com/jobs" }],
    note: "Same filter. Skip contract and equity-only roles.",
  },
  {
    id: "relocate",
    name: "Relocate.me",
    mark: "Re",
    links: [{ label: "Open", href: "https://relocate.me/" }],
    note: "Prefer visa or sponsorship in the posting. A relocation package is often an EU-internal move.",
  },
  {
    id: "job-bank",
    name: "Job Bank",
    mark: "JB",
    links: [
      {
        label: "Open",
        href: "https://www.jobbank.gc.ca/jobsearch/jobsearch?searchstring=senior+software+engineer",
      },
    ],
    note: "Canada, full-time. Express Entry stays a separate profile.",
  },
  {
    id: "supercoder",
    name: "SuperCoder",
    mark: "SC",
    links: [{ label: "Open", href: "https://developer.supercoder.co/" }],
    note: "Full-time senior only. Skip hourly and contract.",
  },
];

const BOARD_IDS = new Set(MANUAL_BOARDS.map((board) => board.id));

export function isManualBoardId(value: string): boolean {
  return BOARD_IDS.has(value);
}

export function manualBoardById(id: string): ManualBoard | undefined {
  return MANUAL_BOARDS.find((board) => board.id === id);
}
