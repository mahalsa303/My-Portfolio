import React from 'react';
import { User, Code2, Sparkles, BookOpen, Compass, Globe2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 md:py-24 border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Core Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600 font-semibold">
              Background & Focus
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900 tracking-tight">
              Bridging academic machine learning rigor with production software craftsmanship.
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
              I am a Computer Science and Engineering undergraduate specializing in Artificial Intelligence at Sri Vasavi Engineering College (class of 2027). My technical focus is centered on architecting AI systems that solve grounded, tangible challenges — from civic complaint resolution and deduplication to autonomous knowledge operating systems using Model Context Protocol (MCP).
            </p>

            <p className="text-sm sm:text-base text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
              Equipped with certifications from ServiceNow, Oracle Cloud (Generative AI), and SAP, I combine modern LLM tooling with disciplined core CS fundamentals in algorithms, data structures, and database systems.
            </p>

            {/* Language & Community Pills */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 sm:items-center text-xs">
              <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
                <Globe2 className="w-4 h-4 text-blue-400" />
                <span className="font-medium text-neutral-200 dark:text-neutral-200 light:text-neutral-800">
                  Languages:
                </span>
                <span>{PERSONAL_INFO.languages.join(' · ')}</span>
              </div>

              <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
                <Compass className="w-4 h-4 text-indigo-400" />
                <span className="font-medium text-neutral-200 dark:text-neutral-200 light:text-neutral-800">
                  Community:
                </span>
                <span>Google Developer Groups Lead</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Distinct Pillars */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="p-5 rounded-2xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900">
                  AI & Protocol Engineering
                </h3>
              </div>
              <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
                Building modular LLM tools using the open Model Context Protocol (MCP), prompt engineering pipelines, and multi-model integrations across Gemini and OpenAI APIs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900">
                  Machine Learning & Feature Engineering
                </h3>
              </div>
              <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
                Designing regression models, geospatial clustering (100m radius deduplication), exploratory data analysis with Pandas, and interactive Gradio/Streamlit analytics frontends.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900">
                  Enterprise Cloud Readiness
                </h3>
              </div>
              <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
                Certified in ServiceNow Data Foundations (CMDB/CSDM), Oracle Cloud Infrastructure Generative AI, and SAP ABAP Cloud developer principles.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
