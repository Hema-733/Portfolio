import React from 'react';
import { Award, CheckCircle, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

export default function Certifications({ certificationsData }) {
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-cyan-400 border border-brand-200 dark:border-brand-900/60 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Badges
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Verified industry qualifications from leading global engineering organizations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between hover:shadow-lg hover:border-brand-400/50 dark:hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header row: Icon & Status badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 rounded-xl bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                    <DynamicIcon name={cert.icon || 'Award'} className="w-6 h-6" />
                  </div>
                  
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    <span>Verified Credential</span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <span>{cert.issuer}</span>
                    {cert.date && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-xs">
                          <Calendar className="w-3 h-3" />
                          {cert.date}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="font-mono text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/60 px-3 py-1.5 rounded-lg inline-block">
                    ID: <span className="text-slate-700 dark:text-slate-300">{cert.credentialId}</span>
                  </div>
                )}

                {/* Skills tags */}
                {cert.skillsCovered && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Validated Skills:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Verification Link */}
              <div className="pt-4 mt-5 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-cyan-400 hover:underline"
                >
                  <span>Show Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <CheckCircle className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
