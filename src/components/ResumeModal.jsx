import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, Globe, CheckCircle2 } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  const { personal, about, skills, projects, hackathons, certifications } = data;

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
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-medium">
              Ready to Export
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
        <div className="p-8 sm:p-12 overflow-y-auto print:overflow-visible print:p-6 bg-white text-slate-900 font-sans space-y-6">
          
          {/* Resume Header */}
          <div className="border-b-2 border-slate-800 pb-5">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
              {personal.name}
            </h1>
            <p className="text-sm font-semibold text-indigo-700 mt-0.5">
              {personal.title}
            </p>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-3 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {personal.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {personal.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {personal.location}
              </span>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">
              Education
            </h2>
            <div className="flex justify-between items-start text-xs">
              <div>
                <p className="font-bold text-slate-900">{about.quickFacts.education}</p>
                <p className="text-slate-600">{about.quickFacts.institution}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-indigo-700">CGPA: {about.quickFacts.cgpa}</p>
                <p className="text-slate-500">2021 – 2025</p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-700">
              {skills.categories.map((cat) => (
                <div key={cat.id} className="flex">
                  <span className="font-bold w-44 shrink-0 text-slate-900">{cat.name}:</span>
                  <span className="text-slate-600">
                    {cat.items.map((i) => i.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">
              Key Engineering Projects
            </h2>
            {projects.slice(0, 3).map((p) => (
              <div key={p.id} className="space-y-1 text-xs">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-900">{p.title}</span>
                  <span className="italic text-slate-500 font-mono text-[11px]">{p.techStack.join(' | ')}</span>
                </div>
                <p className="text-slate-600 leading-snug">{p.description}</p>
                {p.highlights && (
                  <ul className="list-disc list-inside text-[11px] text-slate-500 pl-1">
                    {p.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>

          {/* Hackathons & Awards */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">
              Hackathons & Achievements
            </h2>
            <div className="space-y-2 text-xs">
              {hackathons.map((h) => (
                <div key={h.id} className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-slate-900">{h.title}</span> –{' '}
                    <span className="text-indigo-700 font-semibold">{h.achievement}</span>
                    <p className="text-slate-600 text-[11px] mt-0.5">{h.description}</p>
                  </div>
                  <span className="text-slate-500 text-[11px] shrink-0">{h.date}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">
              Certifications
            </h2>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {certifications.map((c) => (
                <div key={c.id}>
                  <p className="font-bold text-slate-900">{c.title}</p>
                  <p className="text-slate-500 text-[11px]">{c.issuer} ({c.date})</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
