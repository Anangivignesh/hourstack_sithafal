'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Eye,
  EyeOff,
  Fingerprint,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  User,
} from 'lucide-react';

type LoginMode = 'admin' | 'employee';

const loginModes: Array<{
  value: LoginMode;
  label: string;
  icon: typeof ShieldCheck;
  description: string;
  email: string;
  password: string;
}> = [
  {
    value: 'admin',
    label: 'Admin',
    icon: ShieldCheck,
    description: 'Command center, reports, teams, and policies',
    email: 'admin@hourstack.com',
    password: 'admin123',
  },
  {
    value: 'employee',
    label: 'Employee',
    icon: User,
    description: 'My time, activity, projects, and attendance',
    email: 'employee@hourstack.com',
    password: 'emp123',
  },
];

const assuranceItems = [
  'Secure role-based access',
  'Live productivity analytics',
  'Attendance and project workflows',
];

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<LoginMode>('admin');
  const [email, setEmail] = useState(loginModes[0].email);
  const [password, setPassword] = useState(loginModes[0].password);
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const activeMode = loginModes.find((item) => item.value === mode) ?? loginModes[0];

  const switchMode = (nextMode: LoginMode) => {
    const next = loginModes.find((item) => item.value === nextMode) ?? loginModes[0];
    setMode(next.value);
    setEmail(next.email);
    setPassword(next.password);
    setError('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role: mode }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Invalid login details');
      }

      window.localStorage.setItem('hourstack_user', JSON.stringify(data.user));
      const nextUrl = new URLSearchParams(window.location.search).get('next');
      router.replace(nextUrl || '/dashboard');
      router.refresh();
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8fbff] text-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(16,185,129,0.14),transparent_28%),radial-gradient(circle_at_55%_94%,rgba(244,114,182,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:46px_46px]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
        <motion.section
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block"
        >
          <Link href="/" className="mb-12 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-bold text-slate-600 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition hover:text-slate-950">
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>

          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-bold text-slate-700 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-amber-500" />
              HOURSTACK Secure Access
            </div>
            <h1 className="text-6xl font-black leading-[0.98] tracking-normal text-slate-950">
              Sign in to the modern work command center.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Enter as an administrator to manage teams and policies, or as an employee to review personal time, projects, and attendance.
            </p>
          </div>

          <div className="mt-10 grid max-w-xl gap-4">
            {assuranceItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-3xl border border-white/80 bg-white/75 p-4 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span className="font-bold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65 }}
          className="mx-auto w-full max-w-[540px]"
        >
          <div className="mb-8 flex items-center justify-between lg:hidden">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
            <span className="text-sm font-black tracking-[0.22em] text-slate-950">HOURSTACK</span>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white p-4 shadow-[0_30px_110px_rgba(15,23,42,0.16)] backdrop-blur-2xl">
            <div className="rounded-[1.5rem] border border-slate-200/70 bg-white p-6 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-white shadow-xl shadow-slate-950/15">
                    <Fingerprint className="h-7 w-7" />
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">Welcome back</p>
                  <h2 className="mt-2 text-3xl font-black text-slate-950">Login to HOURSTACK</h2>
                </div>
                <div className="hidden rounded-2xl bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700 sm:block">
                  Secured
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-slate-100 p-1.5">
                <div className="grid grid-cols-2 gap-1.5">
                  {loginModes.map((item) => {
                    const Icon = item.icon;
                    const isActive = mode === item.value;

                    return (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => switchMode(item.value)}
                        className={`relative flex min-h-[74px] items-center gap-3 rounded-xl px-3 text-left transition ${
                          isActive ? 'bg-white text-slate-950 shadow-lg shadow-slate-900/10' : 'text-slate-500 hover:bg-white/60 hover:text-slate-800'
                        }`}
                      >
                        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${isActive ? 'bg-slate-950 text-white' : 'bg-white text-slate-500'}`}>
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-black">Login as {item.label}</span>
                          <span className="mt-0.5 hidden text-xs font-semibold leading-4 text-slate-500 sm:block">{item.description}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-black text-slate-800">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      className="h-[52px] w-full rounded-2xl border border-slate-200 bg-white/90 py-3 pl-12 pr-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                      placeholder={activeMode.email}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="mb-2 block text-sm font-black text-slate-800">
                    Password
                  </label>
                  <div className="relative">
                    <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                      className="h-[52px] w-full rounded-2xl border border-slate-200 bg-white/90 py-3 pl-12 pr-12 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                      placeholder={activeMode.password}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((current) => !current)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <label className="flex items-center gap-3 text-sm font-bold text-slate-600">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(event) => setRemember(event.target.checked)}
                      className="h-4 w-4 rounded border-slate-300 text-slate-950 focus:ring-blue-400"
                    />
                    Remember me
                  </label>
                  <Link href="#" className="text-sm font-black text-blue-600 hover:text-blue-700">
                    Forgot password?
                  </Link>
                </div>

                {error && (
                  <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex h-[54px] w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 font-black text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  ) : (
                    <>
                      Enter as {activeMode.label}
                      <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-7 grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-bold text-slate-500">Demo email</span>
                  <span className="font-black text-slate-800">{activeMode.email}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-bold text-slate-500">Demo password</span>
                  <span className="font-black text-slate-800">{activeMode.password}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { label: 'SOC2-ready', icon: BadgeCheck },
              { label: 'Client budgets', icon: Briefcase },
              { label: 'Live analytics', icon: BarChart3 },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex items-center justify-center gap-2 rounded-2xl border border-white/80 bg-white/70 px-4 py-3 text-sm font-black text-slate-600 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
                  <Icon className="h-4 w-4 text-blue-600" />
                  {item.label}
                </div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
