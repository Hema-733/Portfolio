import React from 'react';
import { Trophy, Calendar, Award, ExternalLink, Users, Sparkles, Building2 } from 'lucide-react';

export default function Hackathons({ hackathonsData, eventsData }) {
  const getBadgeStyles = (color) => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800';
      case 'indigo':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800';
      case 'purple':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-300 dark:border-purple-800';
      default:
        return 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300 dark:border-amber-800';
    }
  };

  return (
    <section id="hackathons" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-cyan-400 border border-brand-200 dark:border-brand-900/60 uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Competitive Sprints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hackathons & Competitions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Rapid prototyping, machine learning sprints, and competitive problem-solving.
          </p>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {hackathonsData.map((item, idx) => (
            <div
              key={item.id || idx}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl hover:border-brand-400/60 dark:hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-cyan-500 to-indigo-500 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                {/* Header with Date and Achievement Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${getBadgeStyles(
                      item.badgeColor
                    )}`}
                  >
                    <Trophy className="w-3 h-3" />
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* Title & Organizer */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    {item.organizer}
                  </p>
                </div>

                {/* Role and Achievement summary */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-1 text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
                    <Users className="w-3.5 h-3.5 text-brand-500" />
                    <span>Role: {item.role}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.achievement}</span>
                  </div>
                </div>

                {/* Narrative Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom: Tech Stack & Project Link */}
              <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-slate-800 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {item.projectLink && (
                  <a
                    href={item.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-cyan-400 hover:underline pt-1"
                  >
                    <span>View Project Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Events & Activities Subsection */}
        {eventsData && eventsData.length > 0 && (
          <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-brand-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Events & Leadership Activities
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {eventsData.map((ev) => (
                <div
                  key={ev.id}
                  className="glass-card p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-800/60 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                        {ev.title}
                      </h4>
                      <p className="text-xs font-semibold text-brand-600 dark:text-cyan-400 mt-0.5">
                        {ev.role}
                      </p>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {ev.year}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {ev.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
