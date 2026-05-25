'use client';

import { useState, type ChangeEvent, type ElementType, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Building2,
  CalendarClock,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Sparkles,
  User,
  X,
} from 'lucide-react';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialForm = {
  name: '',
  company: '',
  location: '',
  email: '',
  preferredDateTime: '',
  message: '',
};

const demoHighlights = [
  { label: '30-minute product tour', icon: Clock },
  { label: 'Workflow and policy recommendations', icon: CalendarClock },
  { label: 'Implementation roadmap', icon: CheckCircle2 },
];

export function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    window.setTimeout(() => {
      setSubmitted(false);
      setFormData(initialForm);
      onClose();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-slate-950/35 p-4 backdrop-blur-xl"
          onMouseDown={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 220, damping: 24 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 shadow-[0_30px_120px_rgba(15,23,42,0.25)] backdrop-blur-2xl"
            onMouseDown={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-demo-title"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_10%,rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_88%_0%,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(244,114,182,0.12),transparent_28%)]" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close demo form"
              className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/75 text-slate-600 shadow-lg shadow-slate-900/5 transition hover:bg-white hover:text-slate-950"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid lg:grid-cols-[0.78fr_1fr]">
              <aside className="bg-slate-950 p-8 text-white sm:p-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/80">
                  <Sparkles className="h-4 w-4 text-amber-300" />
                  Personalized walkthrough
                </div>
                <h2 id="book-demo-title" className="mt-8 text-4xl font-black leading-tight">
                  See HOURSTACK mapped to your team.
                </h2>
                <p className="mt-5 leading-8 text-white/60">
                  We will tailor the session around attendance, time tracking, screenshots, project budgets, reporting, and employee roles.
                </p>

                <div className="mt-10 space-y-4">
                  {demoHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                    <div key={item.label} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-blue-200">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-bold text-white/80">{item.label}</span>
                    </div>
                    );
                  })}
                </div>
              </aside>

              <div className="p-6 sm:p-8 lg:p-10">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="grid min-h-[540px] place-items-center text-center">
                    <div>
                      <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                        <CheckCircle2 className="h-10 w-10" />
                      </div>
                      <h3 className="mt-6 text-3xl font-black text-slate-950">Demo request received</h3>
                      <p className="mx-auto mt-3 max-w-md leading-7 text-slate-600">
                        Our team will contact you shortly with a tailored HOURSTACK walkthrough.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">Book a Demo</p>
                      <h3 className="mt-2 text-3xl font-black text-slate-950">Tell us where to begin.</h3>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <PremiumField icon={User} label="Name" name="name" value={formData.name} onChange={handleChange} placeholder="Aarav Mehta" required />
                      <PremiumField icon={Building2} label="Company Name" name="company" value={formData.company} onChange={handleChange} placeholder="Vertex Operations" required />
                      <PremiumField icon={MapPin} label="Location" name="location" value={formData.location} onChange={handleChange} placeholder="Mumbai, India" required />
                      <PremiumField icon={Mail} label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required />
                    </div>

                    <PremiumField
                      icon={CalendarClock}
                      label="Preferred Date & Time"
                      name="preferredDateTime"
                      type="datetime-local"
                      value={formData.preferredDateTime}
                      onChange={handleChange}
                      required
                    />

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-black text-slate-800">
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-slate-400" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Share team size, current tools, or the workflow you want to improve."
                          className="w-full resize-none rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                      <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white/75 px-6 py-4 font-black text-slate-700 transition hover:bg-white hover:text-slate-950"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 font-black text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5"
                      >
                        Book Demo
                        <CalendarClock className="h-5 w-5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PremiumField({
  icon: Icon,
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
}: {
  icon: ElementType;
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-black text-slate-800">
        {label}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="h-[52px] w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
        />
      </div>
    </div>
  );
}
