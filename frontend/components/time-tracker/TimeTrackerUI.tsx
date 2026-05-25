 'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const trackerTabs = [
  { label: 'Overview', href: '/dashboard/time-tracker/overview' },
  { label: 'Attendance', href: '/dashboard/time-tracker/attendance' },
  { label: 'Time Claim', href: '/dashboard/time-tracker/time-claim' },
  { label: 'Heatmap', href: '/dashboard/time-tracker/heatmap' },
  { label: 'Work Schedule', href: '/dashboard/time-tracker/work-schedule' },
];

export const TimeTrackerPage = React.memo(function TimeTrackerPage({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-7">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-600">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-black tracking-normal text-slate-950 lg:text-4xl">{title}</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 lg:text-base">{description}</p>
        </div>

        <div className="flex max-w-full gap-2 overflow-x-auto rounded-2xl border border-white/70 bg-white/75 p-1.5 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
          {trackerTabs.map((tab) => {
            const active = pathname === tab.href;

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  'whitespace-nowrap rounded-xl px-4 py-2 text-sm font-black transition',
                  active ? 'bg-slate-950 text-white shadow-lg shadow-slate-950/15' : 'text-slate-600 hover:bg-white hover:text-slate-950'
                )}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>

      {children}
    </motion.div>
  );
});

export const PremiumCard = React.memo(function PremiumCard({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35 }}
      whileHover={{ y: -4 }}
      className={cn(
        'rounded-3xl border border-white/70 bg-white/75 shadow-xl shadow-slate-900/5 backdrop-blur-xl',
        'transition-all duration-300 hover:border-white hover:shadow-2xl hover:shadow-slate-900/10',
        className
      )}
    >
      {children}
    </motion.div>
  );
});

export const MetricCard = React.memo(function MetricCard({
  icon: Icon,
  label,
  value,
  detail,
  tone = 'blue',
  delay = 0,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  detail: string;
  tone?: 'blue' | 'emerald' | 'amber' | 'rose' | 'violet';
  delay?: number;
}) {
  const tones = {
    blue: 'bg-blue-50 text-blue-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    amber: 'bg-amber-50 text-amber-600',
    rose: 'bg-rose-50 text-rose-600',
    violet: 'bg-violet-50 text-violet-600',
  };

  return (
    <PremiumCard className="p-5" delay={delay}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-black text-slate-950">{value}</p>
          <p className="mt-2 text-xs font-bold text-slate-500">{detail}</p>
        </div>
        <div className={cn('grid h-12 w-12 shrink-0 place-items-center rounded-2xl', tones[tone])}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </PremiumCard>
  );
});

export const StatusPill = React.memo(function StatusPill({
  children,
  tone = 'blue',
}: {
  children: ReactNode;
  tone?: 'blue' | 'emerald' | 'amber' | 'rose' | 'slate';
}) {
  const tones = {
    blue: 'bg-blue-50 text-blue-700 ring-blue-100',
    emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    amber: 'bg-amber-50 text-amber-700 ring-amber-100',
    rose: 'bg-rose-50 text-rose-700 ring-rose-100',
    slate: 'bg-slate-100 text-slate-700 ring-slate-200',
  };

  return (
    <span className={cn('inline-flex rounded-full px-3 py-1 text-xs font-black ring-1', tones[tone])}>
      {children}
    </span>
  );
});
