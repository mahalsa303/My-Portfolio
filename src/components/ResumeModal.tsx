import React, { useEffect, useRef } from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Check, Award, GraduationCap, Briefcase, Code } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, TECHNICAL_SKILLS, PROJECTS, CERTIFICATIONS, EXPERIENCE } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadTextResume = () => {
    const resumeText = `=====================================================
${PERSONAL_INFO.name.toUpperCase()}
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}
=====================================================

SUMMARY:
${PERSONAL_INFO.summary}

EDUCATION:
${EDUCATION.map(
  (e) => `• ${e.institution} (${e.period})
  ${e.degree} | ${e.score}
  Location: ${e.location}`
).join('\n\n')}

TECHNICAL SKILLS:
${TECHNICAL_SKILLS.map((s) => `• ${s.category}: ${s.items.join(', ')}`).join('\n')}

PROJECTS:
${PROJECTS.map(
  (p) => `• ${p.title} (${p.year}) – ${p.tagline}
  Tech Stack: ${p.techStack.join(', ')}
  Features:
  ${p.features.map((f) => `  - ${f}`).join('\n')}`
).join('\n\n')}

CERTIFICATIONS:
${CERTIFICATIONS.map(
  (c) => `• ${c.title} (${c.issuer} - ${c.year})
  Code: ${c.credentialCode || 'N/A'} - ${c.description}`
).join('\n')}

INTERNSHIPS & EXPERIENCE:
${EXPERIENCE.map(
  (exp) => `• ${exp.role} at ${exp.company} (${exp.period})
  Skills: ${exp.skills.join(', ')}
  Highlights:
  ${exp.bullets.map((b) => `  - ${b}`).join('\n')}`
).join('\n\n')}

ADDITIONAL INFORMATION:
• Languages: ${PERSONAL_INFO.languages.join(', ')}
• Leadership: ${PERSONAL_INFO.leadership}
=====================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Kota_Sri_Sai_Mahalsa_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-neutral-900 dark:bg-neutral-900 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 rounded-2xl shadow-2xl overflow-hidden z-10 my-6 flex flex-col max-h-[92vh]">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200 bg-neutral-950/80 dark:bg-neutral-950/80 light:bg-neutral-50 shrink-0">
          <div>
            <h3 className="text-base font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900">
              Curriculum Vitae / Resume
            </h3>
            <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-500">
              Kota Sri Sai Mahalsa · B.Tech Computer Science & AI
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              aria-label="Print resume"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-800 dark:bg-neutral-800 light:bg-neutral-200 text-neutral-200 dark:text-neutral-200 light:text-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownloadTextResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white dark:hover:text-white light:hover:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-800 light:hover:bg-neutral-100 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-neutral-950/50 dark:bg-neutral-950/50 light:bg-neutral-50">
          
          <div ref={resumeRef} className="max-w-3xl mx-auto bg-neutral-900 dark:bg-neutral-900 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 rounded-xl p-6 sm:p-10 shadow-sm space-y-6 text-neutral-200 dark:text-neutral-200 light:text-neutral-800">
            
            {/* Header */}
            <div className="text-center pb-6 border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-400" />
                  {PERSONAL_INFO.phone}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-blue-400" />
                  {PERSONAL_INFO.email}
                </span>
                <span>·</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
                <span>·</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600 font-bold">
                Professional Summary
              </h2>
              <p className="text-sm text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3 pt-4 border-t border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
              <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600 font-bold">
                Education
              </h2>
              <div className="space-y-3">
                {EDUCATION.map((edu) => (
                  <div key={edu.institution} className="text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-neutral-100 dark:text-neutral-100 light:text-neutral-900">
                      <span>{edu.institution}</span>
                      <span className="text-xs font-mono text-neutral-400 font-normal">{edu.period}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 mt-0.5">
                      <span>{edu.degree} · <strong className="text-neutral-300 dark:text-neutral-300 light:text-neutral-700">{edu.score}</strong></span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3 pt-4 border-t border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
              <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600 font-bold">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {TECHNICAL_SKILLS.map((sk) => (
                  <div key={sk.category} className="space-y-0.5">
                    <span className="font-semibold text-neutral-200 dark:text-neutral-200 light:text-neutral-800">
                      {sk.category}:
                    </span>{' '}
                    <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
                      {sk.items.join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-4 pt-4 border-t border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
              <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600 font-bold">
                Key Engineering Projects
              </h2>
              <div className="space-y-4">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between font-bold text-neutral-100 dark:text-neutral-100 light:text-neutral-900 text-sm">
                      <span>{proj.title} – {proj.tagline}</span>
                      <span className="font-mono text-xs font-normal text-neutral-400">{proj.year}</span>
                    </div>
                    <div className="text-blue-400/90 font-mono text-[11px]">
                      {proj.techStack.join(' · ')}
                    </div>
                    <ul className="space-y-1 text-neutral-300 dark:text-neutral-300 light:text-neutral-700 pl-4 list-disc marker:text-blue-400">
                      {proj.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3 pt-4 border-t border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
              <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600 font-bold">
                Certifications
              </h2>
              <div className="space-y-2 text-xs">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className="flex items-start gap-2">
                    <Award className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-neutral-200 dark:text-neutral-200 light:text-neutral-800">{cert.title}</strong>
                      {cert.credentialCode && ` (${cert.credentialCode})`}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Internships & Leadership */}
            <div className="space-y-3 pt-4 border-t border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
              <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600 font-bold">
                Internships & Leadership
              </h2>
              <div className="space-y-3 text-xs">
                {EXPERIENCE.map((exp) => (
                  <div key={exp.role} className="space-y-1">
                    <div className="flex items-center justify-between font-bold text-neutral-200 dark:text-neutral-200 light:text-neutral-800">
                      <span>{exp.role} · {exp.company}</span>
                      <span className="font-mono text-neutral-400 font-normal">{exp.period}</span>
                    </div>
                    <ul className="space-y-1 text-neutral-300 dark:text-neutral-300 light:text-neutral-700 pl-4 list-disc marker:text-blue-400">
                      {exp.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="pt-4 border-t border-neutral-800 dark:border-neutral-800 light:border-neutral-200 text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 space-y-1">
              <div><strong>Languages:</strong> {PERSONAL_INFO.languages.join(', ')}</div>
              <div><strong>Community:</strong> {PERSONAL_INFO.leadership}</div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
