'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Activity, Briefcase, Clock, Pause, Play, Square, TimerReset, TrendingUp } from 'lucide-react';
import { MetricCard, PremiumCard, StatusPill, TimeTrackerPage } from '@/components/time-tracker/TimeTrackerUI';

const weeklyFocus = [
  { day: 'Mon', focus: 7.2, tracked: 8.4 },
  { day: 'Tue', focus: 6.8, tracked: 8.1 },
  { day: 'Wed', focus: 7.9, tracked: 8.7 },
  { day: 'Thu', focus: 6.4, tracked: 7.6 },
  { day: 'Fri', focus: 7.4, tracked: 8.2 },
  { day: 'Sat', focus: 3.1, tracked: 3.8 },
];

const timeline = [
  { time: '09:00', task: 'Design system polish', project: 'HOURSTACK UI', duration: '2h 10m', status: 'Billable' },
  { time: '11:20', task: 'Sprint sync and planning', project: 'Platform Ops', duration: '45m', status: 'Meeting' },
  { time: '12:25', task: 'Dashboard API review', project: 'Analytics', duration: '1h 30m', status: 'Deep Work' },
  { time: '15:00', task: 'QA fixes and handoff', project: 'Release 2.4', duration: '2h 05m', status: 'Billable' },
];

export default function TimeTrackerOverviewPage() {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(27940);

  useEffect(() => {
    if (!running) return;

    const interval = window.setInterval(() => setElapsed((current) => current + 1), 1000);
    return () => window.clearInterval(interval);
  }, [running]);

  const formatted = new Date(elapsed * 1000).toISOString().slice(11, 19);

  return (
    <TimeTrackerPage
      eyebrow="Time Tracker"
      title="Overview"
      description="A polished live command center for tracked time, focus health, billable work, and daily activity."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon={Clock} label="Tracked Today" value="7h 45m" detail="+42m vs average" tone="blue" />
        <MetricCard icon={TrendingUp} label="Focus Score" value="88%" detail="High concentration" tone="emerald" delay={0.04} />
        <MetricCard icon={Briefcase} label="Billable Time" value="6h 20m" detail="81% utilization" tone="violet" delay={0.08} />
        <MetricCard icon={TimerReset} label="Idle Time" value="18m" detail="Within policy" tone="amber" delay={0.12} />
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <PremiumCard className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">Live Timer</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Current work session</h2>
            </div>
            <StatusPill tone={running ? 'emerald' : 'slate'}>{running ? 'Running' : 'Paused'}</StatusPill>
          </div>

          <div className="my-10 text-center">
            <motion.div
              key={formatted}
              initial={{ scale: 0.98, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-6xl font-black tracking-normal text-slate-950"
            >
              {formatted}
            </motion.div>
            <p className="mt-3 text-sm font-bold text-slate-500">HOURSTACK Web App / Dashboard Experience</p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setRunning((current) => !current)}
              className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5"
            >
              {running ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </button>
            <button
              type="button"
              onClick={() => {
                setRunning(false);
                setElapsed(0);
              }}
              className="grid h-14 w-14 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
            >
              <Square className="h-5 w-5" />
            </button>
          </div>
        </PremiumCard>

        <PremiumCard className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">Weekly Rhythm</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Tracked vs focused hours</h2>
            </div>
            <Activity className="h-6 w-6 text-blue-600" />
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyFocus}>
                <defs>
                  <linearGradient id="trackedGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.32} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="focusGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.32} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ borderRadius: 16, border: '1px solid #e2e8f0' }} />
                <Area type="monotone" dataKey="tracked" stroke="#2563eb" fill="url(#trackedGradient)" strokeWidth={3} />
                <Area type="monotone" dataKey="focus" stroke="#10b981" fill="url(#focusGradient)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </PremiumCard>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_0.72fr]">
        <PremiumCard className="p-6">
          <h2 className="text-2xl font-black text-slate-950">Today&apos;s timeline</h2>
          <div className="mt-6 space-y-3">
            {timeline.map((entry, index) => (
              <motion.div
                key={entry.time}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="grid gap-4 rounded-2xl border border-slate-100 bg-white/80 p-4 sm:grid-cols-[80px_1fr_auto]"
              >
                <div className="font-black text-slate-950">{entry.time}</div>
                <div>
                  <p className="font-black text-slate-900">{entry.task}</p>
                  <p className="text-sm font-semibold text-slate-500">{entry.project}</p>
                </div>
                <div className="flex items-center gap-3 sm:justify-end">
                  <StatusPill tone={entry.status === 'Billable' ? 'blue' : entry.status === 'Deep Work' ? 'emerald' : 'amber'}>{entry.status}</StatusPill>
                  <span className="font-black text-slate-950">{entry.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </PremiumCard>

        <PremiumCard className="p-6">
          <h2 className="text-2xl font-black text-slate-950">Project allocation</h2>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { name: 'UI', hours: 18 },
                { name: 'API', hours: 12 },
                { name: 'QA', hours: 8 },
                { name: 'Ops', hours: 6 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ borderRadius: 16, border: '1px solid #e2e8f0' }} />
                <Bar dataKey="hours" fill="#2563eb" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </PremiumCard>
      </div>
    </TimeTrackerPage>
  );
}
