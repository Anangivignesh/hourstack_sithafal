'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { PremiumCard } from '@/components/time-tracker/TimeTrackerUI';

type Metric = {
  label: string;
  value: string;
  detail: string;
};

export function SectionPlaceholder({
  eyebrow,
  title,
  description,
  icon: Icon,
  metrics,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  metrics: Metric[];
}) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-600">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-black tracking-normal text-slate-950 lg:text-4xl">{title}</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 lg:text-base">{description}</p>
        </div>
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-white shadow-xl shadow-slate-950/15">
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {metrics.map((metric, index) => (
          <PremiumCard key={metric.label} className="p-6" delay={index * 0.05}>
            <p className="text-sm font-bold text-slate-500">{metric.label}</p>
            <p className="mt-3 text-3xl font-black text-slate-950">{metric.value}</p>
            <p className="mt-2 text-sm font-semibold text-slate-500">{metric.detail}</p>
          </PremiumCard>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <PremiumCard className="p-6">
          <h2 className="text-2xl font-black text-slate-950">Operational Snapshot</h2>
          <div className="mt-6 space-y-4">
            {['Live data sync', 'Workflow automation', 'Manager review queue', 'Compliance-ready export'].map((item, index) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/75 p-4">
                <div>
                  <p className="font-black text-slate-900">{item}</p>
                  <p className="text-sm font-semibold text-slate-500">Premium module foundation ready for expansion.</p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
                  {index % 2 === 0 ? 'Active' : 'Ready'}
                </span>
              </div>
            ))}
          </div>
        </PremiumCard>

        <PremiumCard className="p-6">
          <h2 className="text-2xl font-black text-slate-950">Bento Actions</h2>
          <div className="mt-6 grid gap-3">
            {['Create workflow', 'View analytics', 'Export report', 'Configure policy'].map((action) => (
              <button
                key={action}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-black text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {action}
              </button>
            ))}
          </div>
        </PremiumCard>
      </div>
    </motion.div>
  );
}
