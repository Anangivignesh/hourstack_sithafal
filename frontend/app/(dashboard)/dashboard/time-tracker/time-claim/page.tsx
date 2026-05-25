'use client';

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { CheckCircle, Clock, FileText, Plus, Send, ShieldCheck, TimerReset, XCircle } from 'lucide-react';
import { MetricCard, PremiumCard, StatusPill, TimeTrackerPage } from '@/components/time-tracker/TimeTrackerUI';

const claimTrend = [
  { week: 'W1', claimed: 18, approved: 16 },
  { week: 'W2', claimed: 23, approved: 21 },
  { week: 'W3', claimed: 15, approved: 13 },
  { week: 'W4', claimed: 29, approved: 26 },
  { week: 'W5', claimed: 21, approved: 19 },
];

const claims = [
  { id: 'TC-2041', employee: 'Maya Shah', reason: 'Client workshop ran beyond scheduled shift', hours: '2h 15m', date: '24 May', status: 'Pending' },
  { id: 'TC-2038', employee: 'Aarav Mehta', reason: 'Manual correction for offline design review', hours: '1h 10m', date: '23 May', status: 'Approved' },
  { id: 'TC-2031', employee: 'Rohan Iyer', reason: 'Missed checkout after regression testing', hours: '45m', date: '22 May', status: 'Rejected' },
  { id: 'TC-2028', employee: 'Nisha Rao', reason: 'Emergency support escalation', hours: '3h 00m', date: '21 May', status: 'Approved' },
];

export default function TimeClaimPage() {
  return (
    <TimeTrackerPage
      eyebrow="Time Tracker"
      title="Time Claim"
      description="Review manual corrections, overtime claims, missed punches, approval status, and payroll-safe adjustments."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon={FileText} label="Open Claims" value="14" detail="6 need manager review" tone="blue" />
        <MetricCard icon={Clock} label="Claimed Hours" value="21h" detail="This payroll cycle" tone="amber" delay={0.04} />
        <MetricCard icon={CheckCircle} label="Approval Rate" value="87%" detail="+4% vs last cycle" tone="emerald" delay={0.08} />
        <MetricCard icon={TimerReset} label="Avg Resolution" value="6h" detail="Policy target: 12h" tone="violet" delay={0.12} />
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.78fr_1.22fr]">
        <PremiumCard className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">New Claim</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Submit adjustment</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">Fast entry for missed punches, offline work, overtime, and client-approved extensions.</p>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600">
              <Plus className="h-5 w-5" />
            </div>
          </div>

          <form className="mt-6 space-y-4">
            <input className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100" placeholder="Select employee" />
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100" type="date" />
              <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100" placeholder="Hours e.g. 1.5" />
            </div>
            <textarea className="min-h-32 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100" placeholder="Claim reason and supporting context" />
            <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-black text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5">
              Submit Claim
              <Send className="h-4 w-4" />
            </button>
          </form>
        </PremiumCard>

        <PremiumCard className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">Claims</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Claimed vs approved hours</h2>
            </div>
            <ShieldCheck className="h-6 w-6 text-emerald-600" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={claimTrend}>
                <defs>
                  <linearGradient id="claimFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="approvedFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="week" stroke="#64748b" tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ borderRadius: 16, border: '1px solid #e2e8f0' }} />
                <Area type="monotone" dataKey="claimed" stroke="#f59e0b" fill="url(#claimFill)" strokeWidth={3} />
                <Area type="monotone" dataKey="approved" stroke="#10b981" fill="url(#approvedFill)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </PremiumCard>
      </div>

      <PremiumCard className="overflow-hidden">
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-2xl font-black text-slate-950">Claim approval queue</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {claims.map((claim) => (
            <div key={claim.id} className="grid gap-4 bg-white/60 p-5 transition hover:bg-blue-50/50 lg:grid-cols-[100px_1fr_90px_90px_120px] lg:items-center">
              <div className="font-black text-slate-950">{claim.id}</div>
              <div>
                <p className="font-black text-slate-900">{claim.employee}</p>
                <p className="text-sm font-semibold text-slate-500">{claim.reason}</p>
              </div>
              <div className="font-black text-slate-950">{claim.hours}</div>
              <div className="font-bold text-slate-500">{claim.date}</div>
              <StatusPill tone={claim.status === 'Approved' ? 'emerald' : claim.status === 'Rejected' ? 'rose' : 'amber'}>
                {claim.status === 'Rejected' && <XCircle className="mr-1 h-3 w-3" />}
                {claim.status}
              </StatusPill>
            </div>
          ))}
        </div>
      </PremiumCard>
    </TimeTrackerPage>
  );
}
