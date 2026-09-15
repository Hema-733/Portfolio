import React from 'react';
import { User, GraduationCap, Target, Mail, Activity, Award, Sparkles, CheckCircle } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

export default function About({ aboutData, personalData }) {
  const { bio, secondaryBio, quickFacts, stats } = aboutData;

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-cyan-400 border border-brand-200 dark:border-brand-900/60 uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Background, Education & Focus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A quick glimpse into who I am, what drives my passion, and my academic background.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Bio & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-card p-8 rounded-2xl shadow-sm space-y-5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-brand-500" />
                <span>Engineering with Purpose</span>
              </h3>
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                {bio}
              </p>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {secondaryBio}
              </p>

              <div className="pt-2 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  Clean Architecture
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  Responsive & Accessible UI
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  Strong Problem-Solving Mindset
                </span>
              </div>
            </div>

            {/* Stat Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-xl text-center space-y-1.5 border border-slate-200/80 dark:border-slate-800 hover:border-brand-400 dark:hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 shadow-sm"
                >
                  <div className="w-8 h-8 mx-auto rounded-lg bg-brand-50 dark:bg-slate-800 flex items-center justify-center text-brand-600 dark:text-cyan-400">
                    <DynamicIcon name={stat.icon} className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: "Quick Facts" Box */}
          <div className="lg:col-span-5">
            <div className="glass-card p-7 sm:p-8 rounded-2xl shadow-md border-2 border-brand-500/20 dark:border-brand-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-500/10 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-cyan-400">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Quick Facts
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  Profile Snapshot
                </span>
              </div>

              <dl className="space-y-4 text-sm">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1">
                    <Target className="w-3.5 h-3.5 text-brand-500" />
                    Focus Area
                  </dt>
                  <dd className="font-semibold text-slate-800 dark:text-slate-200">
                    {quickFacts.focusArea}
                  </dd>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-500" />
                    Education Details
                  </dt>
                  <dd className="font-semibold text-slate-800 dark:text-slate-200">
                    {quickFacts.education}
                  </dd>
                  <dd className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {quickFacts.institution} • CGPA: {quickFacts.cgpa}
                  </dd>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1">
                    <Activity className="w-3.5 h-3.5 text-emerald-500" />
                    Current Role / Status
                  </dt>
                  <dd className="font-semibold text-slate-800 dark:text-slate-200">
                    {quickFacts.currentRole}
                  </dd>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1">
                    <Mail className="w-3.5 h-3.5 text-amber-500" />
                    Email
                  </dt>
                  <dd className="font-semibold text-slate-800 dark:text-slate-200 break-all">
                    <a
                      href={`mailto:${quickFacts.email}`}
                      className="text-brand-600 dark:text-cyan-400 hover:underline"
                    >
                      {quickFacts.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
