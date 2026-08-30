import {
  CaseStudy,
  ProjectDetail,
  getCaseStudyBySlug,
  getProjectDetailBySlug,
  projects,
} from "./portfolio";

export interface WorkArticleSection {
  heading: string;
  body?: string;
  items?: string[];
}

export interface WorkArticleLink {
  label: string;
  href: string;
}

export interface WorkArticle {
  title: string;
  intro?: string;
  image?: string;
  sections: WorkArticleSection[];
  links: WorkArticleLink[];
}

function imageForProjectTitle(title: string): string | undefined {
  return projects.find((project) => project.name === title)?.image;
}

function fromCaseStudy(study: CaseStudy): WorkArticle {
  const sections: WorkArticleSection[] = [];

  if (study.challenge) {
    sections.push({ heading: "Problem", body: study.challenge });
  }

  const roleParts = [study.role, study.client].filter(Boolean);
  if (roleParts.length) {
    sections.push({ heading: "Role", body: `${roleParts.join(". ")}.` });
  }

  const constraintFacts = [
    study.duration ? `Duration: ${study.duration}.` : "",
    study.teamSize ? `Team: ${study.teamSize}.` : "",
  ]
    .filter(Boolean)
    .join(" ");
  const constraintItems = (study.challenges || []).slice(0, 3);
  if (constraintFacts || constraintItems.length) {
    sections.push({
      heading: "Constraints",
      body: constraintFacts || undefined,
      items: constraintItems.length ? constraintItems : undefined,
    });
  }

  if (study.results?.length) {
    sections.push({
      heading: "Outcome",
      items: study.results.map(
        (result) =>
          `${result.value} ${result.metric}. ${result.description}`
      ),
    });
  }

  if (study.solution) {
    sections.push({ heading: "What I owned", body: study.solution });
  }

  const links: WorkArticleLink[] = [];
  if (study.links.live) {
    links.push({ label: "Live", href: study.links.live });
  }
  if (study.links.github) {
    links.push({ label: "Code", href: study.links.github });
  }
  if (study.links.demo) {
    links.push({ label: "Demo", href: study.links.demo });
  }

  return {
    title: study.title,
    image: study.image,
    sections,
    links,
  };
}

function fromProjectDetail(detail: ProjectDetail): WorkArticle {
  const sections: WorkArticleSection[] = [];

  const roleParts = [detail.role, detail.company].filter(Boolean);
  if (roleParts.length) {
    sections.push({ heading: "Role", body: `${roleParts.join(". ")}.` });
  }

  const constraintFacts = [
    detail.duration ? `Duration: ${detail.duration}.` : "",
    detail.team ? `Team: ${detail.team}.` : "",
  ]
    .filter(Boolean)
    .join(" ");
  if (constraintFacts) {
    sections.push({ heading: "Constraints", body: constraintFacts });
  }

  const outcome = detail.impact?.length
    ? detail.impact
    : detail.highlights;
  if (outcome?.length) {
    sections.push({ heading: "Outcome", items: outcome });
  }

  if (detail.contributions?.length) {
    sections.push({ heading: "What I owned", items: detail.contributions });
  }

  const links: WorkArticleLink[] = (detail.links || []).map((link) => ({
    label: link.label,
    href: link.url,
  }));

  return {
    title: detail.title,
    intro: detail.overview,
    image: imageForProjectTitle(detail.title),
    sections,
    links,
  };
}

export function getWorkArticle(slug: string): WorkArticle | undefined {
  const study = getCaseStudyBySlug(slug);
  if (study) return fromCaseStudy(study);
  const detail = getProjectDetailBySlug(slug);
  if (detail) return fromProjectDetail(detail);
  return undefined;
}
