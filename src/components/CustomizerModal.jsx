import React, { useState } from 'react';
import { Settings, X, Check, FileCode, RotateCcw } from 'lucide-react';

export default function CustomizerModal({ isOpen, onClose, data, onUpdatePersonal }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: data.personal.name,
    title: data.personal.title,
    email: data.personal.email,
    phone: data.personal.phone,
    tagline: data.personal.tagline,
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    onUpdatePersonal(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="glass-card bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-800 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2.5 mb-5">
          <div className="p-2 rounded-xl bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-cyan-400">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Portfolio Customization
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Live preview or edit your details
            </p>
          </div>
        </div>

        {/* Tip on permanent file edit */}
        <div className="mb-5 p-3.5 rounded-xl bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/60 text-xs text-brand-800 dark:text-brand-300 flex items-start gap-2.5">
          <FileCode className="w-4 h-4 shrink-0 mt-0.5 text-brand-500" />
          <div>
            <span className="font-bold">Permanent Customization:</span> All your data (projects, skills, hackathons, certifications) can be edited in <code className="font-mono bg-brand-100 dark:bg-brand-900/60 px-1 py-0.5 rounded">src/data/portfolioData.js</code>.
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-3.5 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Full Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Job Title / Focus:
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Phone:
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Tagline:
            </label>
            <textarea
              name="tagline"
              rows={2}
              value={formData.tagline}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-brand-500 outline-none resize-none"
            />
          </div>

          <div className="pt-3 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-sm transition-all"
            >
              {saved ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Applied Live!</span>
                </>
              ) : (
                <span>Update Preview</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
