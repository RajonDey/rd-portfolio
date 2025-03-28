import { SEO } from "../components/SEO";
import Header from "../components/Header";
import SidebarNav from "../components/SidebarNav";
import Introduction from "../components/Introduction";
import TechStack from "../components/TechStack/TechStack";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <SEO
        title="Rajon Dey - Software Developer Portfolio | React, Next.js, Full-Stack Projects"
        description="Explore Rajon Dey's software development portfolio, showcasing expertise in React, Next.js, and full-stack development. Discover projects, skills, and experience."
        url="/"
      />
      <main className="flex bg-transparent">
        {/* Sidebar Navigation */}
        <SidebarNav />

        {/* Main Content */}
        <div className="flex-1 ml-16">
          <Header />
          <Introduction />
          <TechStack />
          <Experience />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
