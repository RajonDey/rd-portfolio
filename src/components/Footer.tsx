import { getCopyrightYearRange, getBuildDate } from "@/lib/site";
import { getCareerStartLabel } from "@/lib/experience";

export default function Footer() {
  const buildDate = getBuildDate();

  return (
    <footer className="textDark py-12 pt-0 relative">
      <div className="decorative-divider"></div>
      <div className="container mx-auto px-4">
        <div className="pt-6 text-center text-sm textDark">
          <p>© {getCopyrightYearRange()} Rajon Dey. All rights reserved.</p>
          <p className="mt-1">
            Building since {getCareerStartLabel()}. Made with ❤️ by{" "}
            <span className="text-accent">Rajon Dey</span>
          </p>
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
