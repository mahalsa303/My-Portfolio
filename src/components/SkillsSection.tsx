import React, { useState } from 'react';
import { Terminal, Cpu, Layout, Database, BookOpen, Wrench, Check } from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Terminal className="w-4 h-4 text-blue-400" />;
      case 'AI / ML & LLMs':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'Web & Frameworks':
        return <Layout className="w-4 h-4 text-emerald-400" />;
      case 'Databases & Storage':
        return <Database className="w-4 h-4 text-amber-400" />;
      case 'Core Computer Science':
        return <BookOpen className="w-4 h-4 text-cyan-400" />;
      default:
        return <Wrench className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600 font-semibold">
            Technical Stack & Tooling
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900 tracking-tight">
            Specialized Skills Matrix
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
            A comprehensive overview of programming languages, machine learning frameworks, data architectures, and core software engineering foundations.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SKILLS.map((skillGroup) => {
            const isSelected = selectedCategory === skillGroup.category;
            return (
              <div
                key={skillGroup.category}
                onClick={() => setSelectedCategory(isSelected ? null : skillGroup.category)}
                className={`p-6 rounded-2xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-blue-500 ring-1 ring-blue-500/20 shadow-md'
                    : 'border-neutral-800 dark:border-neutral-800 light:border-neutral-200 hover:border-neutral-700 dark:hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 rounded-lg bg-neutral-800 dark:bg-neutral-800 light:bg-neutral-100">
                    {getCategoryIcon(skillGroup.category)}
                  </div>
                  <h3 className="text-base font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-800/80 dark:bg-neutral-800/80 light:bg-neutral-100 text-neutral-300 dark:text-neutral-300 light:text-neutral-700 border border-neutral-700/50 dark:border-neutral-700/50 light:border-neutral-200/80 transition-colors hover:text-white dark:hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
