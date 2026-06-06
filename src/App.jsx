import { Route, Routes } from "react-router-dom";
import About from "./components/About.jsx";
import Certifications from "./components/Certifications.jsx";
import ChatbotPreview from "./components/ChatbotPreview.jsx";
import Contact from "./components/Contact.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Skills from "./components/Skills.jsx";
import { useTheme } from "./hooks/useTheme.js";

function PortfolioPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen overflow-x-hidden bg-ice text-slate-950 transition-colors duration-500 dark:bg-ink dark:text-white">
      <Loader />
      <CursorGlow />
      <ScrollProgress />
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <ChatbotPreview />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
    </Routes>
  );
}
