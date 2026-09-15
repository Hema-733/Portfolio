import React, { useState, useMemo } from 'react';
import { Cpu, Search, Sparkles } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

export default function Skills({ skillsData }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = skillsData.categories;

  // Filter skills based on category and search query
  const filteredCategories = useMemo(() => {
    return categories
      .map((cat) => {
        if (activeCategory !== 'all' && cat.id !== activeCategory) {
          return null;
        }

        const matchingItems = cat.items.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (matchingItems.length === 0) return null;

        return {
          ...cat,
          items: matchingItems,
        };
      })
      .filter(Boolean);
  }, [categories, activeCategory, searchQuery]);

  const getLevelBadgeColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'expert':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800/50';
      case 'advanced':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800/50';
      case 'proficient':
        return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-cyan-400 border border-brand-200 dark:border-brand-900/60 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Technologies, frameworks, and engineering disciplines I use to engineer robust solutions.
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25 font-semibold'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25 font-semibold'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-800'
                }`}
              >
                <DynamicIcon name={cat.icon} className="w-3.5 h-3.5" />
                <span>{cat.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Categorized Skills Layout */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 glass-card rounded-2xl">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                No skills found matching "{searchQuery}".
              </p>
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-cyan-400">
                      <DynamicIcon name={cat.icon} className="w-4 h-4" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                    {cat.items.length} skills
                  </span>
                </div>

                {/* Skill Chips / Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {cat.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative p-3 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 hover:border-brand-400 dark:hover:border-cyan-500/50 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <DynamicIcon
                          name={skill.icon}
                          className="w-4 h-4 text-brand-500 dark:text-cyan-400 group-hover:scale-110 transition-transform"
                        />
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                          {skill.name}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getLevelBadgeColor(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
