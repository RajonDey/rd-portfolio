import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import WorkArticleView from "@/components/Work/WorkArticleView";
import {
  getAllCaseStudySlugs,
  getAllProjectDetailSlugs,
  getCaseStudyBySlug,
  getProjectDetailBySlug,
} from "@/lib/portfolio";
import { getPageShareMetadata } from "@/lib/site";
import { getWorkArticle } from "@/lib/work-article";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = Array.from(
    new Set([...getAllCaseStudySlugs(), ...getAllProjectDetailSlugs()])
  );
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pathname = `/work/${slug}`;
  const caseStudy = getCaseStudyBySlug(slug);
  if (caseStudy) {
    return getPageShareMetadata(
      pathname,
      `${caseStudy.title} · Rajon Dey`,
      caseStudy.description
    );
  }
  const detail = getProjectDetailBySlug(slug);
  if (detail) {
    return getPageShareMetadata(
      pathname,
      `${detail.title} · Rajon Dey`,
      detail.overview ?? detail.title
    );
  }
  return { title: "Rajon Dey" };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const article = getWorkArticle(slug);
  if (!article) {
    notFound();
  }

  return (
    <>
      <WorkArticleView article={article} />
      <Footer />
    </>
  );
}
