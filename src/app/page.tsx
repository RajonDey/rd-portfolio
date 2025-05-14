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
import VideoShowcaseModal from "../components/Projects/VideoShowcase";

// import { FaExternalLinkAlt } from "react-icons/fa";

// const VideoShowcase = () => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-6xl mx-auto px-0 md:px-0">
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           {/* Video on left */}
//           <div className="rounded-xl overflow-hidden shadow-xl relative">
//             <video
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full h-full object-cover"
//               src="/videos/rd-portfolios-video.mp4"
//             />
//             <div className="absolute inset-0 bg-black/20 pointer-events-none" />
//           </div>

//           {/* Text on right */}
//           <div>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Fiverr Portfolio Highlights
//             </h2>
//             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//               Ive worked with clients globally to build full-stack web apps,
//               responsive frontends, and performance-optimized solutions. Heres
//               a glimpse of my Fiverr portfolio in action.
//             </p>

//             <a
//               href="https://www.fiverr.com/users/rajjohin/portfolio"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
//             >
//               View Portfolio There{" "}
//               <FaExternalLinkAlt className="w-3 h-3" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


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
          <VideoShowcaseModal />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
