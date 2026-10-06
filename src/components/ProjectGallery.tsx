import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Sparkles, Terminal, Database, Code, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-llm' | 'ml' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai-llm') return proj.category === 'ai-llm';
    if (activeFilter === 'ml') return proj.category === 'ml';
    if (activeFilter === 'fullstack') return proj.techStack.includes('Streamlit') || proj.techStack.includes('React');
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600 font-semibold">
              Curated Technical Portfolio
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900 tracking-tight">
              Selected AI Systems & Engineering Projects
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-600 max-w-xl">
              Architected and implemented end-to-end: from Model Context Protocol orchestration to geospatial civic analytics and machine learning prediction engines.
            </p>
          </div>

          {/* Interactive Filter Tabs (Permitted Segmented Control with Button Elements) */}
          <div className="inline-flex p-1 rounded-xl bg-neutral-900 dark:bg-neutral-900 light:bg-neutral-100 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-neutral-800 dark:bg-neutral-800 light:bg-white text-white dark:text-white light:text-neutral-900 shadow-sm'
                  : 'text-neutral-400 dark:text-neutral-400 light:text-neutral-600 hover:text-neutral-200 dark:hover:text-neutral-200 light:hover:text-neutral-900'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('ai-llm')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'ai-llm'
                  ? 'bg-neutral-800 dark:bg-neutral-800 light:bg-white text-white dark:text-white light:text-neutral-900 shadow-sm'
                  : 'text-neutral-400 dark:text-neutral-400 light:text-neutral-600 hover:text-neutral-200 dark:hover:text-neutral-200 light:hover:text-neutral-900'
              }`}
            >
              AI & LLMs
            </button>
            <button
              onClick={() => setActiveFilter('ml')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'ml'
                  ? 'bg-neutral-800 dark:bg-neutral-800 light:bg-white text-white dark:text-white light:text-neutral-900 shadow-sm'
                  : 'text-neutral-400 dark:text-neutral-400 light:text-neutral-600 hover:text-neutral-200 dark:hover:text-neutral-200 light:hover:text-neutral-900'
              }`}
            >
              Machine Learning
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'fullstack'
                  ? 'bg-neutral-800 dark:bg-neutral-800 light:bg-white text-white dark:text-white light:text-neutral-900 shadow-sm'
                  : 'text-neutral-400 dark:text-neutral-400 light:text-neutral-600 hover:text-neutral-200 dark:hover:text-neutral-200 light:hover:text-neutral-900'
              }`}
            >
              Full-Stack & Dashboards
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Media Container with Hover Zoom */}
              <div className="relative aspect-[16/9] w-full bg-neutral-950 dark:bg-neutral-950 light:bg-neutral-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent pointer-events-none" />

                {/* Top overlay unboxed metadata (Zero-Pill discipline) */}
                <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded text-neutral-300 border border-neutral-700/50">
                    <span className="font-semibold text-blue-400">{project.categoryLabel}</span>
                    <span className="text-neutral-500">/</span>
                    <span>{project.year}</span>
                  </div>
                  
                  <span className="text-xs bg-neutral-900/80 backdrop-blur-md px-2 py-1 rounded text-neutral-400 border border-neutral-700/50">
                    {project.techStack[0]}
                  </span>
                </div>

                {/* Hover Quick Action Layer */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-[2px]">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg transition-transform active:scale-95 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 text-xs font-medium border border-neutral-700 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900 group-hover:text-blue-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  
                  <p className="text-xs font-medium text-neutral-400 dark:text-neutral-400 light:text-neutral-600 mt-1">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-neutral-300 dark:text-neutral-300 light:text-neutral-700 mt-3 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                {/* Tech list as clean unboxed inline separators */}
                <div className="pt-4 border-t border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200/80">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-500 font-mono">
                    {project.techStack.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="text-neutral-300 dark:text-neutral-300 light:text-neutral-700">
                          {tech}
                        </span>
                        {idx < project.techStack.length - 1 && (
                          <span className="text-neutral-600 dark:text-neutral-600 light:text-neutral-400" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read Deep-Dive Breakdown</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-mono text-neutral-500">
                      {project.metrics[0]}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
