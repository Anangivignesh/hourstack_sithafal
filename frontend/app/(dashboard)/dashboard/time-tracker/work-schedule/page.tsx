'use client';

import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Calendar, CheckCircle, Clock, Coffee, Moon, Repeat, Settings, Sun, Users } from 'lucide-react';
import { MetricCard, PremiumCard, StatusPill, TimeTrackerPage } from '@/components/time-tracker/TimeTrackerUI';

const coverage = [
  { day: 'Mon', planned: 192, actual: 184 },
  { day: 'Tue', planned: 188, actual: 181 },
  { day: 'Wed', planned: 196, actual: 191 },
  { day: 'Thu', planned: 190, actual: 183 },
  { day: 'Fri', planned: 182, actual: 174 },
  { day: 'Sat', planned: 72, actual: 68 },
];

const schedules = [
  { team: 'Product Design', shift: '09:00 - 18:00', members: 18, coverage: '96%', policy: 'Flexible' },
  { team: 'Engineering', shift: '10:00 - 19:00', members: 42, coverage: '94%', policy: 'Core Hours' },
  { team: 'Support APAC', shift: '07:00 - 16:00', members: 26, coverage: '98%', policy: 'Fixed' },
  { team: 'Support US', shift: '18:00 - 03:00', members: 22, coverage: '91%', policy: 'Night Shift' },
];

const shiftBlocks = [
  { label: 'Morning', time: '07:00 - 11:00', icon: Sun, tone: 'bg-amber-50 text-amber-600', width: 'w-[34%]' },
  { label: 'Core', time: '11:00 - 16:00', icon: Users, tone: 'bg-blue-50 text-blue-600', width: 'w-[48%]' },
  { label: 'Break Window', time: '13:00 - 14:00', icon: Coffee, tone: 'bg-emerald-50 text-emerald-600', width: 'w-[18%]' },
  { label: 'Night Support', time: '18:00 - 03:00', icon: Moon, tone: 'bg-violet-50 text-violet-600', width: 'w-[56%]' },
];

export default function WorkSchedulePage() {
  return (
    <TimeTrackerPage
      eyebrow="Time Tracker"
      title="Work Schedule"
      description="Plan shifts, coverage windows, flexible policies, team capacity, and schedule compliance from one premium workspace."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon={Calendar} label="Active Schedules" value="12" detail="Across 5 departments" tone="blue" />
        <MetricCard icon={Users} label="Scheduled Today" value="200" detail="184 checked in" tone="emerald" delay={0.04} />
        <MetricCard icon={Repeat} label="Recurring Rules" value="34" detail="8 custom policies" tone="violet" delay={0.08} />
        <MetricCard icon={Clock} label="Coverage Gap" value="3.2%" detail="Lowest this month" tone="amber" delay={0.12} />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <PremiumCard className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">Capacity</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Planned vs actual coverage</h2>
            </div>
            <StatusPill tone="emerald">Optimized</StatusPill>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={coverage}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ borderRadius: 16, border: '1px solid #e2e8f0' }} />
                <Line type="monotone" dataKey="planned" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </PremiumCard>

        <PremiumCard className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">Shift Map</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Today&apos;s coverage windows</h2>
            </div>
            <Settings className="h-6 w-6 text-blue-600" />
          </div>

          <div className="space-y-4">
            {shiftBlocks.map((block) => {
              const Icon = block.icon;

              return (
                <div key={block.label} className="rounded-2xl border border-slate-100 bg-white/70 p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className={`grid h-10 w-10 place-items-center rounded-2xl ${block.tone}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-black text-slate-950">{block.label}</p>
                        <p className="text-sm font-semibold text-slate-500">{block.time}</p>
                      </div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="h-3 rounded-full bg-slate-100">
                    <div className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 ${block.width}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </PremiumCard>
      </div>

      <PremiumCard className="overflow-hidden">
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-2xl font-black text-slate-950">Team schedules</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left">
            <thead className="bg-slate-50 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              <tr>
                <th className="px-6 py-4">Team</th>
                <th className="px-6 py-4">Shift</th>
                <th className="px-6 py-4">Members</th>
                <th className="px-6 py-4">Coverage</th>
                <th className="px-6 py-4">Policy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {schedules.map((schedule) => (
                <tr key={schedule.team} className="bg-white/60 transition hover:bg-blue-50/50">
                  <td className="px-6 py-4 font-black text-slate-950">{schedule.team}</td>
                  <td className="px-6 py-4 font-bold text-slate-700">{schedule.shift}</td>
                  <td className="px-6 py-4 font-black text-slate-950">{schedule.members}</td>
                  <td className="px-6 py-4 font-black text-emerald-600">{schedule.coverage}</td>
                  <td className="px-6 py-4"><StatusPill tone="blue">{schedule.policy}</StatusPill></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PremiumCard>
    </TimeTrackerPage>
  );
}
