import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-neutral-900 dark:bg-neutral-900 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500">
            <span className="font-semibold text-blue-400">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white dark:hover:text-white light:hover:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-800 light:hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Banner */}
        <div className="relative aspect-video w-full bg-neutral-950 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-6 right-6">
            <h3 className="text-2xl font-bold text-white font-display">
              {project.title}
            </h3>
            <p className="text-sm text-neutral-300">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Tech Stack Chips */}
          <div>
            <div className="text-xs uppercase font-mono tracking-wider text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mb-2">
              Technologies & Frameworks
            </div>
            <div className="flex flex-wrap gap-1.5 text-xs text-neutral-300 dark:text-neutral-300 light:text-neutral-700">
              {project.techStack.map((tech, i) => (
                <span key={tech} className="bg-neutral-800/80 dark:bg-neutral-800/80 light:bg-neutral-100 px-2.5 py-1 rounded-md border border-neutral-700/50 dark:border-neutral-700/50 light:border-neutral-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-neutral-950/60 dark:bg-neutral-950/60 light:bg-neutral-50 border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mb-1.5 font-semibold">
                Challenge & Objective
              </h4>
              <p className="text-sm text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
                {project.details.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950/60 dark:bg-neutral-950/60 light:bg-neutral-50 border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200">
              <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600 mb-1.5 font-semibold">
                Engineering Solution
              </h4>
              <p className="text-sm text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
                {project.details.solution}
              </p>
            </div>
          </div>

          {/* Key Architectural Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mb-2.5 font-semibold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Architectural Blueprint & Implementation</span>
            </h4>
            <div className="space-y-2">
              {project.details.architecture.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-300 dark:text-neutral-300 light:text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Bullets */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mb-2.5 font-semibold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>Key Features & Functional Highlights</span>
            </h4>
            <ul className="space-y-2">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-300 dark:text-neutral-300 light:text-neutral-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-neutral-950/70 dark:bg-neutral-950/70 light:bg-neutral-50 border-t border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
          <span className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-500">
            Source repository on GitHub
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium rounded-lg text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:bg-neutral-800 dark:hover:bg-neutral-800 light:hover:bg-neutral-200 transition-colors"
            >
              Close
            </button>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
