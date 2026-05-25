'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Activity, Brain, Clock, Flame, MousePointer, TrendingUp } from 'lucide-react';
import { MetricCard, PremiumCard, StatusPill, TimeTrackerPage } from '@/components/time-tracker/TimeTrackerUI';
import { cn } from '@/lib/utils';

const hours = ['8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6'];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const heatmap = [
  [42, 68, 88, 92, 58, 35, 74, 91, 84, 62, 28],
  [36, 71, 82, 79, 55, 40, 78, 86, 80, 66, 31],
  [48, 75, 91, 95, 60, 38, 82, 94, 88, 70, 34],
  [44, 69, 84, 87, 52, 36, 73, 81, 77, 61, 29],
  [39, 64, 79, 82, 50, 32, 68, 76, 71, 55, 24],
];

const appUsage = [
  { app: 'VS Code', minutes: 186 },
  { app: 'Chrome', minutes: 142 },
  { app: 'Figma', minutes: 96 },
  { app: 'Slack', minutes: 44 },
  { app: 'Notion', minutes: 31 },
];

function heatTone(value: number) {
  if (value >= 90) return 'bg-emerald-500 shadow-emerald-200';
  if (value >= 75) return 'bg-blue-500 shadow-blue-200';
  if (value >= 55) return 'bg-amber-400 shadow-amber-200';
  if (value >= 35) return 'bg-orange-300 shadow-orange-100';
  return 'bg-slate-200 shadow-slate-100';
}

export default function HeatmapPage() {
  return (
    <TimeTrackerPage
      eyebrow="Time Tracker"
      title="Heatmap"
      description="Visualize focus intensity, app engagement, active windows, and work rhythm patterns across days and hours."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon={Flame} label="Peak Intensity" value="95%" detail="Wednesday 11 AM" tone="emerald" />
        <MetricCard icon={Brain} label="Deep Work Blocks" value="18" detail="+3 vs last week" tone="blue" delay={0.04} />
        <MetricCard icon={MousePointer} label="Activity Density" value="74%" detail="Healthy signal" tone="violet" delay={0.08} />
        <MetricCard icon={Clock} label="Quiet Hours" value="2.4h" detail="Low interruption" tone="amber" delay={0.12} />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <PremiumCard className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">Focus Heatmap</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Activity intensity by hour</h2>
            </div>
            <StatusPill tone="blue">This week</StatusPill>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[720px]">
              <div className="grid grid-cols-[64px_repeat(11,minmax(0,1fr))] gap-2">
                <div />
                {hours.map((hour) => (
                  <div key={hour} className="text-center text-xs font-black text-slate-400">{hour}</div>
                ))}
                {days.map((day, dayIndex) => (
                  <>
                    <div key={`${day}-label`} className="flex items-center text-sm font-black text-slate-600">{day}</div>
                    {heatmap[dayIndex].map((value, hourIndex) => (
                      <div
                        key={`${day}-${hourIndex}`}
                        className={cn('h-12 rounded-2xl shadow-lg transition hover:scale-105', heatTone(value))}
                        title={`${day} ${hours[hourIndex]}:00 - ${value}%`}
                      />
                    ))}
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-xs font-black text-slate-500">
            <span className="rounded-full bg-slate-100 px-3 py-1">Low</span>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-700">Moderate</span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">High</span>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">Peak</span>
          </div>
        </PremiumCard>

        <PremiumCard className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">Apps</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Usage concentration</h2>
            </div>
            <Activity className="h-6 w-6 text-blue-600" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={appUsage} layout="vertical" margin={{ left: 18 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
                <XAxis type="number" stroke="#64748b" tickLine={false} axisLine={false} />
                <YAxis type="category" dataKey="app" stroke="#64748b" tickLine={false} axisLine={false} width={72} />
                <Tooltip contentStyle={{ borderRadius: 16, border: '1px solid #e2e8f0' }} />
                <Bar dataKey="minutes" fill="#2563eb" radius={[0, 10, 10, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </PremiumCard>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {[
          { title: 'Peak collaboration', value: '10 AM - 12 PM', detail: 'Best window for team reviews' },
          { title: 'Deep work window', value: '2 PM - 4 PM', detail: 'Highest uninterrupted focus' },
          { title: 'Context switching risk', value: '5 PM - 6 PM', detail: 'Slack and browser activity spike' },
        ].map((item) => (
          <PremiumCard key={item.title} className="p-6">
            <TrendingUp className="mb-8 h-7 w-7 text-blue-600" />
            <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
            <p className="mt-3 text-2xl font-black text-slate-950">{item.value}</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">{item.detail}</p>
          </PremiumCard>
        ))}
      </div>
    </TimeTrackerPage>
  );
}
