/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectGallery } from './components/ProjectGallery';
import { SkillsSection } from './components/SkillsSection';
import { CredentialsAndExperience } from './components/CredentialsAndExperience';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-neutral-950 dark:bg-neutral-950 light:bg-neutral-50 text-neutral-100 dark:text-neutral-100 light:text-neutral-900 transition-colors duration-200 flex flex-col font-sans">
        
        {/* Navigation Bar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <AboutSection onOpenResume={() => setIsResumeOpen(true)} />
          <ProjectGallery />
          <SkillsSection />
          <CredentialsAndExperience />
          <ContactSection />
        </main>

        {/* Networking Footer */}
        <Footer onOpenResume={() => setIsResumeOpen(true)} />

        {/* Full Interactive Resume Modal & Download */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

      </div>
    </ThemeProvider>
  );
}
