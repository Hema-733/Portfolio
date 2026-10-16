import React from 'react';
import { X, Printer, Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  const { personal, about, skills, projects, hackathons, certifications, events } = data;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white">
      <div
        className="glass-card bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden print:border-none print:shadow-none print:max-h-none print:w-full print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar (hidden when printing) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-slate-800 dark:text-slate-200">
              Resume Preview
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold">
              Verified from Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-sm transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-8 sm:p-12 overflow-y-auto print:overflow-visible print:p-6 bg-white text-slate-900 font-sans space-y-5">
          
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-4 text-center sm:text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
              {personal.name}
            </h1>
            <p className="text-sm font-bold text-indigo-700 mt-0.5">
              {personal.title}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-1 gap-x-3 mt-2.5 text-xs text-slate-700 font-medium">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-500" />
                {personal.email}
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-slate-500" />
                {personal.phone}
              </span>
              <span>|</span>
              <a
                href="https://linkedin.com/in/hema-varshana-2450a5326"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-700 hover:underline"
              >
                linkedin.com/in/hema-varshana-2450a5326
              </a>
              <span>|</span>
              <a
                href="https://leetcode.com/u/3Y6IHQ4hTT/"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-700 hover:underline"
              >
                leetcode.com/u/3Y6IHQ4hTT
              </a>
              <span>|</span>
              <a
                href="https://github.com/Hema-733"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-700 hover:underline"
              >
                github.com/Hema-733
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <section className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-0.5">
              Career Objective
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {personal.tagline}
            </p>
          </section>

          {/* Technical Skills */}
          <section className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-0.5">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-1 text-xs text-slate-700">
              {skills.categories.map((cat) => (
                <div key={cat.id} className="flex">
                  <span className="font-bold w-48 shrink-0 text-slate-900">{cat.name}:</span>
                  <span className="text-slate-600">
                    {cat.items.map((i) => i.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-0.5">
              Education
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-slate-900">
                    Bachelor of Engineering – Computer Science & Engineering
                  </p>
                  <p className="text-slate-600">
                    Bannari Amman Institute of Technology, Sathyamangalam | 3rd Year
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-indigo-700">CGPA: 7.66</p>
                  <p className="text-slate-500">2024 – Present</p>
                </div>
              </div>

              <div className="flex justify-between items-start pt-1 border-t border-slate-100">
                <div>
                  <p className="font-bold text-slate-900">12th Standard (HSC)</p>
                  <p className="text-slate-600">Velammal Vidyalaya, Karur</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-indigo-700">80.2%</p>
                  <p className="text-slate-500">2024</p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-2.5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-0.5">
              Projects
            </h2>
            {projects.map((p) => (
              <div key={p.id} className="space-y-1 text-xs">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <div>
                    <span className="font-bold text-slate-900">{p.title}</span>
                    <span className="text-slate-500 ml-1">| {p.role}</span>
                  </div>
                  <span className="italic text-slate-500 font-mono text-[11px]">
                    {p.techStack.join(', ')}
                  </span>
                </div>
                <p className="text-slate-600 leading-snug">{p.description}</p>
                {p.highlights && (
                  <ul className="list-disc list-inside text-[11px] text-slate-500 pl-1 space-y-0.5">
                    {p.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>

          {/* Hackathons & Competitions */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-0.5">
              Hackathons & Competitions
            </h2>
            <div className="space-y-1.5 text-xs">
              {hackathons.map((h) => (
                <div key={h.id} className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-slate-900">{h.title}</span>
                    <p className="text-slate-600 text-[11px] mt-0.5">{h.description}</p>
                  </div>
                  <span className="text-slate-500 text-[11px] shrink-0 font-medium">{h.date}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Events & Activities */}
          {events && (
            <section className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-0.5">
                Events & Activities
              </h2>
              <div className="space-y-1 text-xs">
                {events.map((e) => (
                  <div key={e.id} className="flex justify-between items-start">
                    <div>
                      <span className="font-bold text-slate-900">{e.title}</span>
                      <span className="text-slate-600 ml-1">| {e.role} – {e.description}</span>
                    </div>
                    <span className="text-slate-500 text-[11px] shrink-0 font-medium">{e.year}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications & Achievements */}
          <section className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-0.5">
              Certifications & Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
              {certifications.map((c) => (
                <div key={c.id}>
                  <p className="font-bold text-slate-900">• {c.title}</p>
                  <p className="text-slate-500 text-[11px] pl-2">{c.issuer} | {c.date}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
