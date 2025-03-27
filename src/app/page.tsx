import Header from "../components/Header";
import Introduction from "../components/Introduction";
import TechStack from "../components/TechStack/TechStack";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Introduction />
      <TechStack />
      <Experience />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
}
