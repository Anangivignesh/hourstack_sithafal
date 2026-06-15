'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  BarChart3,
  BellRing,
  CalendarClock,
  Check,
  ChevronRight,
  Clock3,
  Command,
  Eye,
  FileText,
  Fingerprint,
  Layers3,
  LineChart,
  LockKeyhole,
  MousePointer2,
  PlayCircle,
  Radio,
  ShieldCheck,
  Sparkles,
  Users2,
  Workflow,
} from 'lucide-react';
import dynamic from 'next/dynamic';

const BookDemoModal = dynamic(() => import('@/components/modals/BookDemoModal').then((mod) => mod.BookDemoModal), { ssr: false });
const navItems = [
  { label: 'Platform', href: '#platform' },
  { label: 'Intelligence', href: '#intelligence' },
  { label: 'Security', href: '#security' },
  { label: 'Pricing', href: '#pricing' },
];

const heroMetrics = [
  { label: 'Active teams', value: '248', tone: 'text-emerald-600' },
  { label: 'Focus score', value: '91%', tone: 'text-blue-600' },
  { label: 'Time captured', value: '12.8k h', tone: 'text-amber-600' },
];

const platformCards = [
  {
    icon: Radio,
    title: 'Live Work Pulse',
    copy: 'See online status, app activity, productivity signals, idle time, and task focus without waiting for manual updates.',
  },
  {
    icon: CalendarClock,
    title: 'Attendance Intelligence',
    copy: 'Automated clock-ins, shift health, late arrivals, breaks, payroll-ready summaries, and exception alerts.',
  },
  {
    icon: Workflow,
    title: 'Project Time Control',
    copy: 'Connect time to clients, projects, tasks, budgets, approvals, and workload plans in one polished workspace.',
  },
  {
    icon: Eye,
    title: 'Screenshot Review',
    copy: 'Privacy-aware screenshots, configurable capture rules, activity context, and reviewer workflows for distributed teams.',
  },
  {
    icon: BarChart3,
    title: 'Executive Analytics',
    copy: 'Premium dashboards with trends, team comparisons, productivity bands, and actionable workforce intelligence.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Center',
    copy: 'Role-based access, audit trails, policy controls, retention windows, and security visibility built for scale.',
  },
];

const intelligenceRows = [
  ['Silent productivity drift', 'Detected 4 days earlier', 'Recovered 186 hours'],
  ['Client budget overrun', 'Forecasted at 72%', 'Protected $18.4k'],
  ['Attendance anomaly', 'Flagged in real time', 'Resolved before payroll'],
  ['Low-focus workflow', 'Mapped to app switching', 'Improved team score 14%'],
];

const steps = [
  'Connect teams, schedules, projects, and clients',
  'Define ethical monitoring policies by role or department',
  'Launch employee app and browser-safe activity capture',
  'Review live dashboards, approvals, reports, and AI insights',
];

const pricing = [
  { name: 'Launch', price: '$8', copy: 'For lean teams getting serious about time visibility.' },
  { name: 'Scale', price: '$14', copy: 'For growing companies managing clients, projects, and approvals.', featured: true },
  { name: 'Enterprise', price: 'Custom', copy: 'For advanced security, custom retention, SSO, and governance.' },
];

const commandStats = [
  { label: 'Active now', value: '1,284', icon: Users2, tone: 'text-blue-600' },
  { label: 'Focus minutes', value: '42,910', icon: Clock3, tone: 'text-emerald-600' },
  { label: 'Policy events', value: '37', icon: LockKeyhole, tone: 'text-rose-600' },
  { label: 'Auto reports', value: '126', icon: FileText, tone: 'text-amber-600' },
];

const securityCards = [
  { title: 'SSO-ready access', icon: Fingerprint },
  { title: 'Encrypted data flows', icon: LockKeyhole },
  { title: 'Granular permissions', icon: Layers3 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function MarketingPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbff] text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_82%_8%,rgba(16,185,129,0.14),transparent_28%),radial-gradient(circle_at_50%_92%,rgba(244,114,182,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <motion.header
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55 }}
        className="sticky top-0 z-40 border-b border-white/70 bg-white/75 shadow-[0_16px_60px_rgba(15,23,42,0.06)] backdrop-blur-2xl"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-xl shadow-slate-900/15">
              HS
            </span>
            <span>
              <span className="block text-sm font-black tracking-[0.28em] text-slate-950">HOURSTACK</span>
              <span className="block text-xs font-medium text-slate-500">Workforce Intelligence</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 transition hover:text-slate-950">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden rounded-full px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100 sm:inline-flex"
            >
              Login
            </Link>
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </motion.header>

      <section className="relative mx-auto grid min-h-[calc(100vh-78px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }} className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-bold text-slate-700 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-amber-500" />
            Ultra-premium monitoring for modern teams
          </div>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.98] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
            Workforce clarity that feels effortless.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            HOURSTACK brings time tracking, productivity intelligence, attendance, screenshots, client budgets, and executive reporting into one beautiful operating system.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-7 py-4 text-base font-black text-white shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1"
            >
              Book a Demo
              <ChevronRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-black text-slate-900 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-slate-300"
            >
              Login
              <Fingerprint className="h-5 w-5 text-blue-600" />
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {heroMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + index * 0.08 }}
                className="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-xl shadow-slate-900/5 backdrop-blur-xl"
              >
                <div className={`text-xl font-black sm:text-2xl ${metric.tone}`}>{metric.value}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative z-10"
        >
          <div className="absolute -left-8 top-10 hidden rounded-3xl border border-white/80 bg-white p-4 shadow-2xl shadow-blue-900/10 backdrop-blur-xl lg:block">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Activity className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-500">Live productivity</p>
                <p className="text-lg font-black text-slate-950">+18.6%</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 bottom-12 hidden rounded-3xl border border-white/80 bg-white p-4 shadow-2xl shadow-rose-900/10 backdrop-blur-xl lg:block">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-rose-100 text-rose-700">
                <BellRing className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-500">Policy alert</p>
                <p className="text-sm font-black text-slate-950">Resolved automatically</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/75 p-4 shadow-[0_30px_100px_rgba(15,23,42,0.14)] backdrop-blur-2xl">
            <div className="rounded-[1.5rem] border border-slate-200/70 bg-slate-950 p-4 text-white">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/70">Live command center</div>
              </div>
              <div className="grid gap-4 lg:grid-cols-[0.68fr_1fr]">
                <div className="space-y-3">
                  {['Design', 'Engineering', 'Support', 'Sales'].map((team, index) => (
                    <div key={team} className="rounded-2xl bg-white/10 p-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-bold">{team}</span>
                        <span className="text-white/60">{88 - index * 5}%</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-gradient-to-r from-blue-400 via-emerald-300 to-amber-300" style={{ width: `${88 - index * 5}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-3xl bg-white p-5 text-slate-950">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Today</p>
                      <h3 className="text-2xl font-black">Workforce Pulse</h3>
                    </div>
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                      <LineChart className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex h-48 items-end gap-2 rounded-2xl bg-slate-50 p-4">
                    {[42, 66, 58, 82, 74, 93, 76, 88, 64, 79, 91, 85].map((height, index) => (
                      <motion.span
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 0.3 + index * 0.035, duration: 0.55 }}
                        className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-600 via-emerald-400 to-amber-300"
                      />
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                    {['Tracked', 'Billable', 'Focused'].map((item) => (
                      <div key={item} className="rounded-2xl bg-slate-50 p-3">
                        <p className="text-xs font-bold text-slate-500">{item}</p>
                        <p className="mt-1 text-lg font-black">{item === 'Tracked' ? '9.2h' : item === 'Billable' ? '7.8h' : '84%'}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-slate-200/70 bg-white/55 py-6 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 text-sm font-black uppercase tracking-[0.2em] text-slate-400 sm:px-6 lg:px-8">
          {['NOVA BANK', 'ATLAS LABS', 'OMNI CLOUD', 'VERTEX OPS', 'PULSE HR'].map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="Platform" title="Everything your operations team needs in one workspace." copy="HOURSTACK connects people, work, time, and evidence so leaders can make decisions with confidence." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {platformCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                className="group rounded-3xl border border-white/80 bg-white/75 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white transition group-hover:rotate-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-black text-slate-950">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{card.copy}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="intelligence" className="bg-white/50 py-24 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
          <SectionIntro eyebrow="AI Intelligence" title="Surface the story behind every workday." copy="Turn activity streams into signals leaders can act on before budget, delivery, or burnout risks become expensive." align="left" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-[2rem] border border-white/80 bg-white p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
                    <Command className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">Assistant</p>
                    <h3 className="font-black">AI Operations Brief</h3>
                  </div>
                </div>
                <Sparkles className="h-5 w-5 text-amber-300" />
              </div>
              <div className="mt-6 space-y-3">
                {intelligenceRows.map(([risk, status, impact]) => (
                  <div key={risk} className="grid gap-3 rounded-2xl bg-white/10 p-4 text-sm sm:grid-cols-[1fr_0.8fr_0.8fr]">
                    <span className="font-bold text-white">{risk}</span>
                    <span className="text-blue-200">{status}</span>
                    <span className="font-bold text-emerald-200">{impact}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="Command Center" title="Live monitoring without operational noise." copy="Watch distributed work unfold through clean signals: status, work mode, app context, screenshots, idle thresholds, and policy events." />
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {commandStats.map((stat) => {
            const Icon = stat.icon;

            return (
            <motion.div key={stat.label} whileHover={{ y: -5 }} className="rounded-3xl border border-white/80 bg-white/75 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
              <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-slate-50 ${stat.tone}`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-3xl font-black">{stat.value}</p>
              <p className="mt-1 text-sm font-bold text-slate-500">{stat.label}</p>
            </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Privacy by Design" title="Powerful monitoring with clear governance." copy="Set transparent rules for screenshots, app tracking, retention, access, and employee visibility." inverted />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {['Role-based visibility', 'Configurable capture windows', 'Audit-ready change history'].map((item, index) => (
              <motion.div
                key={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/10 p-6"
              >
                <ShieldCheck className="mb-8 h-8 w-8 text-emerald-300" />
                <h3 className="text-xl font-black">{item}</h3>
                <p className="mt-3 leading-7 text-white/60">Enterprise controls that keep leadership informed and employee expectations explicit.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="Implementation" title="From kickoff to signal-rich dashboards in days." copy="A guided rollout flow helps your team launch policies, invite employees, and validate tracking with less friction." />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div key={step} whileHover={{ y: -5 }} className="rounded-3xl border border-white/80 bg-white/75 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white">{index + 1}</div>
              <p className="font-black leading-7 text-slate-950">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white/55 py-24 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <SectionIntro eyebrow="Reports" title="Board-ready insight from daily work data." copy="Export polished reports for payroll, utilization, attendance, productivity, clients, and compliance." align="left" />
          <div className="grid gap-4 sm:grid-cols-2">
            {['Payroll summary', 'Client billing', 'Employee activity', 'Project budget'].map((report) => (
              <div key={report} className="rounded-3xl border border-white/80 bg-white p-5 shadow-xl shadow-slate-900/5">
                <FileText className="mb-6 h-6 w-6 text-blue-600" />
                <h3 className="font-black">{report}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">Scheduled delivery, filters, approvals, and export-ready formatting.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="Security" title="Built for serious organizations." copy="Modern workforce visibility backed by authentication, permissions, auditability, encryption posture, and policy control." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {securityCards.map((card) => {
            const Icon = card.icon;

            return (
            <div key={card.title} className="rounded-3xl border border-white/80 bg-white/75 p-7 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
              <Icon className="mb-8 h-8 w-8 text-slate-950" />
              <h3 className="text-xl font-black">{card.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">Give each stakeholder the right lens while preserving governance across every workspace.</p>
            </div>
            );
          })}
        </div>
      </section>

      <section id="pricing" className="bg-white/55 py-24 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Pricing" title="Plans that scale with operational maturity." copy="Start with time and attendance, then unlock deeper intelligence as your workforce grows." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pricing.map((plan) => (
              <motion.div
                key={plan.name}
                whileHover={{ y: -6 }}
                className={`rounded-3xl border p-7 shadow-xl backdrop-blur-xl ${
                  plan.featured
                    ? 'border-slate-950 bg-slate-950 text-white shadow-slate-950/20'
                    : 'border-white/80 bg-white text-slate-950 shadow-slate-900/5'
                }`}
              >
                <h3 className="text-2xl font-black">{plan.name}</h3>
                <p className={`mt-3 leading-7 ${plan.featured ? 'text-white/60' : 'text-slate-600'}`}>{plan.copy}</p>
                <p className="mt-8 text-4xl font-black">
                  {plan.price}
                  {plan.price !== 'Custom' && <span className={`text-base font-bold ${plan.featured ? 'text-white/50' : 'text-slate-400'}`}> / user</span>}
                </p>
                <button
                  type="button"
                  onClick={() => setDemoOpen(true)}
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 font-black transition ${
                    plan.featured ? 'bg-white text-slate-950 hover:bg-blue-50' : 'bg-slate-950 text-white hover:-translate-y-0.5'
                  }`}
                >
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-xl lg:grid-cols-[1fr_0.7fr] lg:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">Customer story</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-slate-950">"We replaced five disconnected tools and finally trusted our utilization data."</h2>
            <p className="mt-6 max-w-2xl leading-8 text-slate-600">A 700-person services company used HOURSTACK to unify attendance, billable time, screenshots, project budgets, and leadership reporting in under three weeks.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ['22%', 'higher utilization'],
              ['$1.2M', 'protected revenue'],
              ['31h', 'saved weekly admin'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl bg-slate-50 p-5">
                <p className="text-3xl font-black text-slate-950">{value}</p>
                <p className="mt-1 text-sm font-bold text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 p-8 text-center text-white shadow-[0_30px_100px_rgba(15,23,42,0.28)] sm:p-12">
          <MousePointer2 className="mx-auto mb-6 h-9 w-9 text-amber-300" />
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">Ready to see your workforce clearly?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/60">Book a guided walkthrough and see how HOURSTACK can modernize monitoring, reporting, and workforce planning.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button type="button" onClick={() => setDemoOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-black text-slate-950 transition hover:bg-blue-50">
              Book a Demo
              <ArrowRight className="h-5 w-5" />
            </button>
            <Link href="/login" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-7 py-4 font-black text-white transition hover:bg-white/10">
              Login
              <PlayCircle className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/70 py-10 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="font-bold">HOURSTACK. Premium workforce intelligence.</p>
          <div className="flex flex-wrap gap-5 font-semibold">
            <Link href="#platform" className="hover:text-slate-950">Platform</Link>
            <Link href="#security" className="hover:text-slate-950">Security</Link>
            <Link href="#pricing" className="hover:text-slate-950">Pricing</Link>
            <Link href="/login" className="hover:text-slate-950">Login</Link>
          </div>
        </div>
      </footer>

      <BookDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  align = 'center',
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  align?: 'center' | 'left';
  inverted?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <p className={`text-sm font-black uppercase tracking-[0.22em] ${inverted ? 'text-blue-200' : 'text-blue-600'}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-4xl font-black leading-tight sm:text-5xl ${inverted ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      <p className={`mt-5 text-lg leading-8 ${inverted ? 'text-white/60' : 'text-slate-600'}`}>{copy}</p>
    </motion.div>
  );
}
