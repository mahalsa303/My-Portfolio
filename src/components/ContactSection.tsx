import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, MessageSquare, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validateEmail = (email: string) => {
    // RFC 5322 compliant regex for standard email validation
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).trim().toLowerCase());
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    return newErrors;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const currentErrors = validate();
    setErrors(currentErrors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error dynamically as user types if field was touched
    if (touched[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitError('');
      return;
    }

    setErrors({});
    setSubmitError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({ message: 'Unable to send your message right now.' }));

      if (!response.ok) {
        throw new Error(data.message || 'Unable to send your message right now.');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send your message right now.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600 font-semibold">
            Let's Collaborate
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
            Interested in discussing AI engineering, LLM systems, internship opportunities, or collaborating on open-source software? Send a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Direct Info (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 space-y-4">
              <h3 className="text-base font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
                Available for engineering conversations, technical interviews, and academic research collaborations.
              </p>

              {/* Direct email card */}
              <div className="p-3.5 rounded-xl bg-neutral-950/80 dark:bg-neutral-950/80 light:bg-neutral-50 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500">
                      Primary Email
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs font-semibold text-neutral-200 dark:text-neutral-200 light:text-neutral-800 hover:text-blue-400"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white dark:hover:text-white light:hover:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-800 light:hover:bg-neutral-200 transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Direct phone card */}
              <div className="p-3.5 rounded-xl bg-neutral-950/80 dark:bg-neutral-950/80 light:bg-neutral-50 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500">
                      Mobile & WhatsApp
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs font-semibold text-neutral-200 dark:text-neutral-200 light:text-neutral-800 hover:text-emerald-400"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location card */}
              <div className="p-3.5 rounded-xl bg-neutral-950/80 dark:bg-neutral-950/80 light:bg-neutral-50 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500">
                    Location
                  </div>
                  <div className="text-xs font-semibold text-neutral-200 dark:text-neutral-200 light:text-neutral-800">
                    Tadepalligudem, Andhra Pradesh, India
                  </div>
                </div>
              </div>

            </div>

            {/* Networking card */}
            <div className="p-5 rounded-2xl bg-neutral-900/40 dark:bg-neutral-900/40 light:bg-neutral-50 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 space-y-2">
              <span className="text-xs font-mono font-medium text-blue-400 dark:text-blue-400 light:text-blue-600">
                Professional Networking
              </span>
              <p className="text-xs text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
                Connect on LinkedIn or check out active code repositories, pull requests, and implementations on GitHub.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 dark:bg-neutral-800 light:bg-white text-xs font-medium text-neutral-200 dark:text-neutral-200 light:text-neutral-800 hover:text-blue-400 border border-neutral-700 dark:border-neutral-700 light:border-neutral-300 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form with Real-Time Email Validation (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/70 dark:bg-neutral-900/70 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 shadow-sm">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-neutral-400 dark:text-neutral-400 light:text-neutral-600 max-w-md mx-auto">
                    Thank you for reaching out. Kota Sri Sai Mahalsa will review your note and respond promptly to your email.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-800 dark:bg-neutral-800 light:bg-neutral-100 text-neutral-200 dark:text-neutral-200 light:text-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center gap-2 pb-2 border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    <h3 className="text-base font-bold font-display text-neutral-100 dark:text-neutral-100 light:text-neutral-900">
                      Send a Message
                    </h3>
                  </div>

                  {submitError && (
                    <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-300">
                      {submitError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label htmlFor="name" className="block text-xs font-medium text-neutral-300 dark:text-neutral-300 light:text-neutral-700">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => handleBlur('name')}
                        placeholder="e.g. John Doe"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950/80 dark:bg-neutral-950/80 light:bg-neutral-50 text-neutral-100 dark:text-neutral-100 light:text-neutral-900 text-sm border transition-colors focus:outline-none ${
                          touched.name && errors.name
                            ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/20'
                            : 'border-neutral-800 dark:border-neutral-800 light:border-neutral-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20'
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email with validation */}
                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-xs font-medium text-neutral-300 dark:text-neutral-300 light:text-neutral-700">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur('email')}
                        placeholder="e.g. name@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950/80 dark:bg-neutral-950/80 light:bg-neutral-50 text-neutral-100 dark:text-neutral-100 light:text-neutral-900 text-sm border transition-colors focus:outline-none ${
                          touched.email && errors.email
                            ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/20'
                            : 'border-neutral-800 dark:border-neutral-800 light:border-neutral-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20'
                        }`}
                      />
                      {touched.email && errors.email && (
                        <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label htmlFor="subject" className="block text-xs font-medium text-neutral-300 dark:text-neutral-300 light:text-neutral-700">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={() => handleBlur('subject')}
                      placeholder="e.g. AI Engineering Internship Opportunity"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950/80 dark:bg-neutral-950/80 light:bg-neutral-50 text-neutral-100 dark:text-neutral-100 light:text-neutral-900 text-sm border transition-colors focus:outline-none ${
                        touched.subject && errors.subject
                          ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/20'
                          : 'border-neutral-800 dark:border-neutral-800 light:border-neutral-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20'
                      }`}
                    />
                    {touched.subject && errors.subject && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-xs font-medium text-neutral-300 dark:text-neutral-300 light:text-neutral-700">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                      placeholder="Tell me about your project, team, or opportunity..."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950/80 dark:bg-neutral-950/80 light:bg-neutral-50 text-neutral-100 dark:text-neutral-100 light:text-neutral-900 text-sm border transition-colors focus:outline-none resize-none ${
                        touched.message && errors.message
                          ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/20'
                          : 'border-neutral-800 dark:border-neutral-800 light:border-neutral-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20'
                      }`}
                    />
                    {touched.message && errors.message && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-sm font-semibold shadow-sm transition-all active:scale-[0.99] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Validating & Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
