import Link from "next/link";
import { getCopyrightYearRange, getBuildDate } from "@/lib/site";
import { getCareerStartLabel } from "@/lib/experience";

export default function Footer() {
  const buildDate = getBuildDate();

  return (
    <footer className="border-t border-black/10 py-12 text-textDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
          <li>
            <Link
              href="/testimonials"
              className="text-textLight hover:text-textDark hover:underline underline-offset-4"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              href="/achievements"
              className="text-textLight hover:text-textDark hover:underline underline-offset-4"
            >
              Achievements
            </Link>
          </li>
        </ul>
        <div className="text-center text-sm">
          <p>© {getCopyrightYearRange()} Rajon Dey. All rights reserved.</p>
          <p className="mt-1">Building since {getCareerStartLabel()}.</p>
          {buildDate && (
            <p className="mt-1 text-textLight text-xs">
              Site updated: {buildDate}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
