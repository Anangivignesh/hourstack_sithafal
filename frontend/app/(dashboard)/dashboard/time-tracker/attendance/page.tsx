'use client';

import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { AlertCircle, Calendar, CheckCircle, Clock, LogIn, LogOut, Users } from 'lucide-react';
import { MetricCard, PremiumCard, StatusPill, TimeTrackerPage } from '@/components/time-tracker/TimeTrackerUI';

const attendanceTrend = [
  { day: 'Mon', present: 94, late: 4, absent: 2 },
  { day: 'Tue', present: 91, late: 6, absent: 3 },
  { day: 'Wed', present: 96, late: 3, absent: 1 },
  { day: 'Thu', present: 93, late: 5, absent: 2 },
  { day: 'Fri', present: 89, late: 8, absent: 3 },
];

const distribution = [
  { name: 'Present', value: 184, color: '#10b981' },
  { name: 'Late', value: 11, color: '#f59e0b' },
  { name: 'Absent', value: 5, color: '#ef4444' },
];

const teamRows = [
  { name: 'Aarav Mehta', role: 'Product Designer', checkIn: '09:02', checkOut: '18:08', hours: '8h 46m', status: 'Present' },
  { name: 'Maya Shah', role: 'Frontend Engineer', checkIn: '09:18', checkOut: '18:21', hours: '8h 33m', status: 'Late' },
  { name: 'Rohan Iyer', role: 'QA Analyst', checkIn: '08:54', checkOut: '17:42', hours: '8h 18m', status: 'Present' },
  { name: 'Nisha Rao', role: 'Support Lead', checkIn: '-', checkOut: '-', hours: '0h', status: 'Absent' },
];

export default function AttendancePage() {
  return (
    <TimeTrackerPage
      eyebrow="Time Tracker"
      title="Attendance"
      description="Monitor attendance health, late arrivals, absences, shift compliance, and check-in quality across the workforce."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon={Users} label="Present Today" value="184" detail="92% of workforce" tone="emerald" />
        <MetricCard icon={AlertCircle} label="Late Arrivals" value="11" detail="-6 vs yesterday" tone="amber" delay={0.04} />
        <MetricCard icon={Calendar} label="Absences" value="5" detail="3 approved leaves" tone="rose" delay={0.08} />
        <MetricCard icon={Clock} label="Avg Check-in" value="09:07" detail="Healthy shift start" tone="blue" delay={0.12} />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
        <PremiumCard className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">Trend</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Weekly attendance health</h2>
            </div>
            <StatusPill tone="emerald">Live synced</StatusPill>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="day" stroke="#64748b" tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ borderRadius: 16, border: '1px solid #e2e8f0' }} />
                <Bar dataKey="present" stackId="a" fill="#10b981" radius={[0, 0, 8, 8]} />
                <Bar dataKey="late" stackId="a" fill="#f59e0b" />
                <Bar dataKey="absent" stackId="a" fill="#ef4444" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </PremiumCard>

        <PremiumCard className="p-6">
          <h2 className="text-2xl font-black text-slate-950">Today&apos;s split</h2>
          <div className="mt-5 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={distribution} dataKey="value" innerRadius={72} outerRadius={102} paddingAngle={4}>
                  {distribution.map((item) => (
                    <Cell key={item.name} fill={item.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 16, border: '1px solid #e2e8f0' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {distribution.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-2xl bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="font-bold text-slate-600">{item.name}</span>
                </div>
                <span className="font-black text-slate-950">{item.value}</span>
              </div>
            ))}
          </div>
        </PremiumCard>
      </div>

      <PremiumCard className="overflow-hidden">
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-2xl font-black text-slate-950">Employee attendance ledger</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left">
            <thead className="bg-slate-50 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Check In</th>
                <th className="px-6 py-4">Check Out</th>
                <th className="px-6 py-4">Hours</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {teamRows.map((row) => (
                <tr key={row.name} className="bg-white/60 transition hover:bg-blue-50/50">
                  <td className="px-6 py-4">
                    <div className="font-black text-slate-950">{row.name}</div>
                    <div className="text-sm font-semibold text-slate-500">{row.role}</div>
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-700"><LogIn className="mr-2 inline h-4 w-4 text-emerald-600" />{row.checkIn}</td>
                  <td className="px-6 py-4 font-bold text-slate-700"><LogOut className="mr-2 inline h-4 w-4 text-blue-600" />{row.checkOut}</td>
                  <td className="px-6 py-4 font-black text-slate-950">{row.hours}</td>
                  <td className="px-6 py-4">
                    <StatusPill tone={row.status === 'Present' ? 'emerald' : row.status === 'Late' ? 'amber' : 'rose'}>
                      {row.status === 'Present' && <CheckCircle className="mr-1 h-3 w-3" />}
                      {row.status}
                    </StatusPill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PremiumCard>
    </TimeTrackerPage>
  );
}
