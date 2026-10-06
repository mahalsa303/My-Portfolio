import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200/80 bg-neutral-950/80 dark:bg-neutral-950/80 light:bg-neutral-50 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200/60">
          
          {/* Brand & Title */}
          <div className="md:col-span-6 space-y-1.5 text-center md:text-left">
            <a
              href="#hero"
              className="text-lg font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900"
            >
              Kota Sri Sai Mahalsa
            </a>
            <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 max-w-sm">
              Computer Science & AI Undergraduate · AI Systems, LLM Orchestration & Full-Stack Applications.
            </p>
          </div>

          {/* Social Links for Professional Networking */}
          <div className="md:col-span-6 flex flex-col md:flex-row items-center justify-center md:justify-end gap-4">
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500">
              Professional Networking:
            </span>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-lg bg-neutral-900 dark:bg-neutral-900 light:bg-white text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-blue-400 hover:bg-neutral-800 dark:hover:bg-neutral-800 light:hover:bg-neutral-100 border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-lg bg-neutral-900 dark:bg-neutral-900 light:bg-white text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-white dark:hover:text-white light:hover:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-800 light:hover:bg-neutral-100 border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email address"
                className="p-2.5 rounded-lg bg-neutral-900 dark:bg-neutral-900 light:bg-white text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-blue-400 hover:bg-neutral-800 dark:hover:bg-neutral-800 light:hover:bg-neutral-100 border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                aria-label="Phone number"
                className="p-2.5 rounded-lg bg-neutral-900 dark:bg-neutral-900 light:bg-white text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-emerald-400 hover:bg-neutral-800 dark:hover:bg-neutral-800 light:hover:bg-neutral-100 border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
          <div>
            © {new Date().getFullYear()} Kota Sri Sai Mahalsa. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenResume}
              className="hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors cursor-pointer"
            >
              Resume
            </button>
            <a
              href="#about"
              className="hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors"
            >
              Contact
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-neutral-900 dark:bg-neutral-900 light:bg-neutral-200 text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-white dark:hover:text-white hover:bg-neutral-800 dark:hover:bg-neutral-800 transition-all cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
