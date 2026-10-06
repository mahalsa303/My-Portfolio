import React from 'react';
import { Award, Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS, EXPERIENCE, EDUCATION } from '../data/portfolioData';

export const CredentialsAndExperience: React.FC = () => {
  return (
    <section id="credentials" className="py-20 border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600 font-semibold">
            Industry Credentials & Background
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900 tracking-tight">
            Certifications, Experience & Education
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
            Validated by global enterprise cloud ecosystems and practical industry engineering internships.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900">
                Industry Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="p-5 rounded-2xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 hover:border-neutral-700 transition-all shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-mono font-medium text-amber-400 dark:text-amber-400 light:text-amber-600">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-neutral-100 dark:text-neutral-100 light:text-neutral-900 mt-2 leading-snug">
                    {cert.title}
                  </h4>

                  {cert.credentialCode && (
                    <div className="text-xs font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mt-1">
                      Code: {cert.credentialCode}
                    </div>
                  )}

                  <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 mt-2.5 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Internships & Leadership */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
              <Briefcase className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900">
                Internships & Leadership
              </h3>
            </div>

            <div className="space-y-4">
              {EXPERIENCE.map((exp) => (
                <div
                  key={exp.role}
                  className="p-5 rounded-2xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 hover:border-neutral-700 transition-all shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-mono font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600">
                      {exp.company}
                    </span>
                    <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-neutral-100 dark:text-neutral-100 light:text-neutral-900 mt-1.5">
                    {exp.role}
                  </h4>

                  <div className="flex flex-wrap gap-1 my-2.5">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] px-2 py-0.5 rounded bg-neutral-800/80 dark:bg-neutral-800/80 light:bg-neutral-100 text-neutral-300 dark:text-neutral-300 light:text-neutral-700 font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1.5 mt-2">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300 dark:text-neutral-300 light:text-neutral-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.institution}
                  className="p-5 rounded-2xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 hover:border-neutral-700 transition-all shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-mono font-medium text-emerald-400 dark:text-emerald-400 light:text-emerald-700">
                      {edu.score}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-neutral-100 dark:text-neutral-100 light:text-neutral-900 mt-2">
                    {edu.degree}
                  </h4>

                  <div className="text-xs font-medium text-neutral-300 dark:text-neutral-300 light:text-neutral-700 mt-1">
                    {edu.institution}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mt-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>

                  {edu.highlight && (
                    <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 mt-2.5 pt-2 border-t border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200/80">
                      {edu.highlight}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
