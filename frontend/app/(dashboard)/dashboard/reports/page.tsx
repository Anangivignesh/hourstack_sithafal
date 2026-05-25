'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Download, FileText, Filter, ShieldCheck } from 'lucide-react';
import { MetricCard, PremiumCard, StatusPill } from '@/components/time-tracker/TimeTrackerUI';

const data = [
  { day: 'Mon', productivity: 84, attendance: 94 },
  { day: 'Tue', productivity: 88, attendance: 96 },
  { day: 'Wed', productivity: 91, attendance: 95 },
  { day: 'Thu', productivity: 86, attendance: 93 },
  { day: 'Fri', productivity: 89, attendance: 92 },
];

const reports = ['Employee Activity', 'Productivity Report', 'Attendance Report', 'Downloadable Reports'];

export default function ReportsPage() {
  return (
    <div className="space-y-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-600">Reports</p>
          <h1 className="mt-3 text-4xl font-black text-slate-950">Executive Reporting Suite</h1>
          <p className="mt-2 max-w-2xl text-slate-600">Board-ready productivity, attendance, payroll, and compliance reports.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-black text-white shadow-xl shadow-slate-950/15">
          <Download className="h-5 w-5" />
          Export Pack
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <MetricCard icon={FileText} label="Generated Reports" value="126" detail="+18 this week" tone="blue" />
        <MetricCard icon={ShieldCheck} label="Compliance Score" value="98%" detail="Audit ready" tone="emerald" delay={0.04} />
        <MetricCard icon={Filter} label="Saved Views" value="24" detail="Across departments" tone="violet" delay={0.08} />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_0.72fr]">
        <PremiumCard className="p-6">
          <h2 className="text-2xl font-black text-slate-950">Productivity and attendance trend</h2>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="day" stroke="#64748b" tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ borderRadius: 16, border: '1px solid #e2e8f0' }} />
                <Bar dataKey="productivity" fill="#2563eb" radius={[10, 10, 0, 0]} />
                <Bar dataKey="attendance" fill="#10b981" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </PremiumCard>

        <PremiumCard className="p-6">
          <h2 className="text-2xl font-black text-slate-950">Report Library</h2>
          <div className="mt-6 space-y-3">
            {reports.map((report) => (
              <div key={report} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <div>
                  <p className="font-black text-slate-950">{report}</p>
                  <p className="text-sm font-semibold text-slate-500">Scheduled, filtered, and export-ready</p>
                </div>
                <StatusPill tone="blue">Ready</StatusPill>
              </div>
            ))}
          </div>
        </PremiumCard>
      </div>
    </div>
  );
}
