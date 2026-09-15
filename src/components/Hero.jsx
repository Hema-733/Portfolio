import React from 'react';
import { ArrowRight, FileDown, Terminal, Sparkles, CheckCircle2, MapPin, Briefcase } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

export default function Hero({ personalData, socials, onOpenResumeModal }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-brand-500/15 via-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalData.status}</span>
            </div>

            {/* Headline with Name & Title */}
            <div className="space-y-3">
              <p className="text-sm font-semibold tracking-wider text-brand-600 dark:text-cyan-400 uppercase">
                Hello, world! I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {personalData.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold gradient-text">
                {personalData.title}
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalData.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-800 hover:border-brand-500 dark:hover:border-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-brand-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-cyan-400 transition-colors"
              >
                <span>Let's talk</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Social Links & Meta Info */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>{personalData.location}</span>
              </div>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-110 transition-all"
                    title={social.platform}
                    aria-label={social.platform}
                  >
                    <DynamicIcon name={social.icon} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual / Interactive Code Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-2xl p-6 glass-card shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden">
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-slate-400 dark:text-slate-500">developer.profile.ts</span>
                </div>

                {/* Code Snippet */}
                <div className="space-y-2 font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <p>
                    <span className="text-brand-600 dark:text-cyan-400 font-semibold">const</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    name: <span className="text-amber-600 dark:text-amber-300">"{personalData.name}"</span>,
                  </p>
                  <p className="pl-4">
                    role: <span className="text-amber-600 dark:text-amber-300">"{personalData.title}"</span>,
                  </p>
                  <p className="pl-4">
                    coreTech: [<span className="text-amber-600 dark:text-amber-300">"React"</span>,{' '}
                    <span className="text-amber-600 dark:text-amber-300">"TypeScript"</span>,{' '}
                    <span className="text-amber-600 dark:text-amber-300">"Tailwind"</span>],
                  </p>
                  <p className="pl-4">
                    openToRoles: <span className="text-indigo-600 dark:text-indigo-400">true</span>,
                  </p>
                  <p className="pl-4">
                    hardWorker: <span className="text-indigo-600 dark:text-indigo-400">true</span>,
                  </p>
                  <p className="pl-4">
                    motto: <span className="text-amber-600 dark:text-amber-300">"Build with passion & precision."</span>
                  </p>
                  <p>&#125;;</p>
                </div>

                {/* Interactive Feature Pills */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 bg-slate-100/70 dark:bg-slate-900/70 px-3 py-2 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-brand-500" />
                    <span>Clean Code Architecture</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 bg-slate-100/70 dark:bg-slate-900/70 px-3 py-2 rounded-lg">
                    <Briefcase className="w-4 h-4 text-cyan-500" />
                    <span>Placement Ready</span>
                  </div>
                </div>
              </div>

              {/* Floating tech badge */}
              <div className="absolute -bottom-4 -right-3 sm:-right-6 glass-card px-4 py-2.5 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 animate-float">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  React 19 & Tailwind CSS
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
