import React, { useState, useEffect } from 'react';
import { portfolioData as initialData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CustomizerModal from './components/CustomizerModal';
import { Sliders } from 'lucide-react';

export default function App() {
  // Theme state with localStorage & system preference
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Portfolio data state (with live update capability)
  const [data, setData] = useState(initialData);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleUpdatePersonal = (updatedFields) => {
    setData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        ...updatedFields,
      },
    }));
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-500 selection:text-white transition-colors duration-300">
      {/* Sticky Top Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        personalData={data.personal}
        onOpenResumeModal={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          personalData={data.personal}
          socials={data.socials}
          onOpenResumeModal={() => setIsResumeOpen(true)}
        />

        <About
          aboutData={data.about}
          personalData={data.personal}
        />

        <Skills
          skillsData={data.skills}
        />

        <Projects
          projectsData={data.projects}
        />

        <Hackathons
          hackathonsData={data.hackathons}
        />

        <Certifications
          certificationsData={data.certifications}
        />

        <Contact
          personalData={data.personal}
          socials={data.socials}
        />
      </main>

      {/* Footer */}
      <Footer
        personalData={data.personal}
        socials={data.socials}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        data={data}
      />

      <CustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        data={data}
        onUpdatePersonal={handleUpdatePersonal}
      />

      {/* Floating Quick Customize Info Button */}
      <button
        onClick={() => setIsCustomizerOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/90 dark:bg-white/90 text-white dark:text-slate-900 text-xs font-bold shadow-xl hover:scale-105 active:scale-95 transition-all backdrop-blur-md border border-slate-700 dark:border-slate-200"
        title="Customize Info Live"
      >
        <Sliders className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Customize Info</span>
      </button>
    </div>
  );
}
