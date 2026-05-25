'use client';

import { motion } from 'framer-motion';
import { Calendar, Folder, Plus, Users } from 'lucide-react';
import { PremiumCard, StatusPill } from '@/components/time-tracker/TimeTrackerUI';

const projects = [
  { name: 'HOURSTACK Premium UI', client: 'Internal Platform', progress: 86, due: '28 May', team: 8, status: 'In Progress' },
  { name: 'Attendance Intelligence', client: 'Enterprise Ops', progress: 64, due: '03 Jun', team: 5, status: 'Review' },
  { name: 'Client Billing Automation', client: 'Finance Team', progress: 42, due: '12 Jun', team: 6, status: 'Planning' },
  { name: 'Monitoring Console', client: 'Security Desk', progress: 91, due: '26 May', team: 4, status: 'In Progress' },
];

export default function ProjectsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-600">Projects</p>
          <h1 className="mt-3 text-4xl font-black text-slate-950">Project Command Center</h1>
          <p className="mt-2 max-w-2xl text-slate-600">Track delivery, teams, deadlines, utilization, and client-ready project health.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-black text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5">
          <Plus className="h-5 w-5" />
          New Project
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['Active Projects', '18', '+4 this month'],
          ['Billable Utilization', '81%', '+7% vs last week'],
          ['At Risk', '3', 'Needs manager review'],
          ['On-time Delivery', '94%', 'Healthy forecast'],
        ].map(([label, value, detail], index) => (
          <PremiumCard key={label} className="p-5" delay={index * 0.04}>
            <p className="text-sm font-bold text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-black text-slate-950">{value}</p>
            <p className="mt-2 text-xs font-bold text-slate-500">{detail}</p>
          </PremiumCard>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <PremiumCard key={project.name} className="p-6" delay={index * 0.05}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                  <Folder className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-950">{project.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{project.client}</p>
                </div>
              </div>
              <StatusPill tone={project.status === 'In Progress' ? 'blue' : project.status === 'Review' ? 'amber' : 'slate'}>
                {project.status}
              </StatusPill>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm font-black text-slate-600">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${project.progress}%` }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-400"
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-3">
                <Calendar className="mb-2 h-4 w-4 text-blue-600" />
                <p className="text-xs font-bold text-slate-500">Due</p>
                <p className="font-black text-slate-950">{project.due}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <Users className="mb-2 h-4 w-4 text-emerald-600" />
                <p className="text-xs font-bold text-slate-500">Team</p>
                <p className="font-black text-slate-950">{project.team} members</p>
              </div>
            </div>
          </PremiumCard>
        ))}
      </div>
    </motion.div>
  );
}
