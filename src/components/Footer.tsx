import SocialIcons from "./SocialIcons";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-textDark text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p className="text-sm text-gray-300">
              I’m Rajon Dey, a passionate web developer with expertise in modern
              technologies like React, Next.js, and Web 3.0. I build scalable,
              performant, and user-friendly applications for clients worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#tech-stack"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
            <div className="mb-4">
              <SocialIcons />
            </div>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-semibold rounded-md hover:bg-accent transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Me
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-300">
          <p>© {currentYear} Rajon Dey. All rights reserved.</p>
          <p className="mt-1">
            Made with ❤️ by <span className="text-accent">Rajon Dey</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
