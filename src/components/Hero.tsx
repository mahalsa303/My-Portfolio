import React from 'react';
import { ArrowDown, Download, Mail, ExternalLink, Github, Linkedin, Award, Cpu, Code2, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200/60"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-500/10 light:bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/8 dark:bg-indigo-500/8 light:bg-indigo-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic & CTA Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability status line (Zero-Pill discipline) */}
            <div className="flex items-center gap-2.5 text-xs font-medium text-emerald-400 dark:text-emerald-400 light:text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Seeking AI / Software Engineering Opportunities</span>
              <span className="text-neutral-500 dark:text-neutral-500 light:text-neutral-400" aria-hidden="true">·</span>
              <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-600">B.Tech AI (2023–2027)</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-100 dark:text-neutral-100 light:text-neutral-900 font-display leading-[1.1] text-balance">
              Architecting intelligent AI systems & scalable software solutions.
            </h1>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-neutral-400 dark:text-neutral-400 light:text-neutral-600 max-w-2xl leading-relaxed">
              Hi, I’m <span className="font-semibold text-neutral-200 dark:text-neutral-200 light:text-neutral-800">Kota Sri Sai Mahalsa</span>. 
              I engineer autonomous knowledge systems, multimodal computer vision tools, and production machine learning models grounded in robust computer science fundamentals.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-500/20 active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-neutral-900 dark:bg-neutral-900 light:bg-white text-neutral-200 dark:text-neutral-200 light:text-neutral-800 border border-neutral-700 dark:border-neutral-700 light:border-neutral-300 hover:bg-neutral-800 dark:hover:bg-neutral-800 light:hover:bg-neutral-100 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-400 dark:text-blue-400 light:text-blue-600" />
                <span>Resume / CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-neutral-400 dark:text-neutral-400 light:text-neutral-600 hover:text-neutral-200 dark:hover:text-neutral-200 light:hover:text-neutral-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Quick Proof Metrics adjacent to hero claims (Frontend design discipline) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200/80">
              {PERSONAL_INFO.stats.map((stat) => (
                <div key={stat.label} className="space-y-0.5">
                  <div className="text-2xl font-bold font-mono text-neutral-100 dark:text-neutral-100 light:text-neutral-900 tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Portrait & Quick Affordances */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              {/* Main Card Frame */}
              <div className="relative rounded-2xl bg-neutral-900/90 dark:bg-neutral-900/90 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 p-4 shadow-xl overflow-hidden">
                
                {/* Visual Image with Fallback Container */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-neutral-950 dark:bg-neutral-950 light:bg-neutral-100 group/avatar">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt="Kota Sri Sai Mahalsa portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 group-hover/avatar:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-transparent to-transparent pointer-events-none" />

                  {/* Overlay Name Tag */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-xs uppercase tracking-wider text-blue-400 font-mono font-medium">
                      Undergraduate AI Specialist
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Sri Vasavi Engineering College
                    </p>
                  </div>
                </div>

                {/* Social links row */}
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
                  <span className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 font-medium">
                    Connect & Code:
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                      className="p-2 rounded-lg bg-neutral-800 dark:bg-neutral-800 light:bg-neutral-100 text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-blue-400 hover:bg-neutral-700 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub profile"
                      className="p-2 rounded-lg bg-neutral-800 dark:bg-neutral-800 light:bg-neutral-100 text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-white hover:bg-neutral-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      aria-label="Send direct email"
                      className="p-2 rounded-lg bg-neutral-800 dark:bg-neutral-800 light:bg-neutral-100 text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-blue-400 hover:bg-neutral-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
