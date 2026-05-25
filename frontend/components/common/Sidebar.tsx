 'use client';

import React, { useEffect, useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  BarChart3,
  Briefcase,
  ChevronDown,
  Clock,
  FileText,
  Home,
  LogOut,
  Menu,
  Monitor,
  Settings,
  Shield,
  Users,
  X,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDashboardStore } from '@/store/useDashboardStore';
import { shallow } from 'zustand/shallow';

type NavItem = {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  submenu?: NavItem[];
};

const menuItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: Home,
    submenu: [
      { label: 'Overview', href: '/dashboard' },
      { label: 'Productivity', href: '/dashboard/productivity' },
      { label: 'Activity', href: '/dashboard/activity' },
      { label: 'Monitoring', href: '/dashboard/monitoring/screenshots' },
      { label: 'Analytics', href: '/dashboard/analytics' },
      { label: 'Work Summary', href: '/dashboard/work-time-summary' },
    ],
  },
  {
    label: 'Time Tracker',
    href: '/dashboard/time-tracker/overview',
    icon: Clock,
    submenu: [
      { label: 'Overview', href: '/dashboard/time-tracker/overview' },
      { label: 'Attendance', href: '/dashboard/time-tracker/attendance' },
      { label: 'Time Claim', href: '/dashboard/time-tracker/time-claim' },
      { label: 'Heatmap', href: '/dashboard/time-tracker/heatmap' },
      { label: 'Work Schedule', href: '/dashboard/time-tracker/work-schedule' },
    ],
  },
  { label: 'Projects', href: '/dashboard/projects', icon: Briefcase },
  { label: 'Clients', href: '/dashboard/clients', icon: Users },
  {
    label: 'Reports',
    href: '/dashboard/reports',
    icon: FileText,
    submenu: [
      { label: 'Overview', href: '/dashboard/reports' },
      { label: 'Employee Activity', href: '/dashboard/reports/employee-activity' },
      { label: 'Productivity Report', href: '/dashboard/reports/productivity-report' },
      { label: 'Attendance Report', href: '/dashboard/reports/attendance-report' },
      { label: 'Downloadable', href: '/dashboard/reports/downloadable' },
    ],
  },
  {
    label: 'Work Management',
    href: '/dashboard/work-management',
    icon: Zap,
    submenu: [
      { label: 'Overview', href: '/dashboard/work-management' },
      { label: 'Workforce Analytics', href: '/dashboard/work-management/workforce-analytics' },
      { label: 'Employees Monitoring', href: '/dashboard/work-management/employees-monitoring' },
      { label: 'Data Loss Prevention', href: '/dashboard/work-management/data-loss-prevention' },
      { label: 'Field Staff Tracking', href: '/dashboard/work-management/field-staff-tracking' },
      { label: 'Mobile Tracking', href: '/dashboard/work-management/mobile-tracking' },
    ],
  },
  {
    label: 'Administration',
    href: '/dashboard/administration',
    icon: Settings,
    submenu: [
      { label: 'Overview', href: '/dashboard/administration' },
      { label: 'Employee Management', href: '/dashboard/administration/employee-management' },
      { label: 'Attendance Tracking', href: '/dashboard/administration/attendance-tracking' },
      { label: 'Project Management', href: '/dashboard/administration/project-task-management' },
      { label: 'Live Monitoring', href: '/dashboard/administration/live-monitoring' },
    ],
  },
];

export const Sidebar = React.memo(function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { sidebarOpen, toggleSidebar } = useDashboardStore((s) => ({ sidebarOpen: s.sidebarOpen, toggleSidebar: s.toggleSidebar }), shallow);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);

  const activeParents = useMemo(
    () =>
      menuItems
        .filter((item) => item.submenu?.some((subitem) => pathname === subitem.href || pathname.startsWith(subitem.href + '/')))
        .map((item) => item.label),
    [pathname]
  );

  useEffect(() => {
    setExpandedMenus((current) => Array.from(new Set([...current, ...activeParents])));
  }, [activeParents]);

  useEffect(() => {
    const ac = new AbortController();
    fetch('/api/auth/me', { signal: ac.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!ac.signal.aborted && data?.user) setUser(data.user);
      })
      .catch(() => {
        /* ignore */
      });
    return () => ac.abort();
  }, []);

  const logout = useCallback(async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (e) {}
    try {
      window.localStorage.removeItem('hourstack_user');
    } catch (e) {}
    router.replace('/login');
    router.refresh();
  }, [router]);

  const closeMobileSidebar = useCallback(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024 && sidebarOpen) {
      toggleSidebar();
    }
  }, [sidebarOpen, toggleSidebar]);

  const toggleSubmenu = useCallback((label: string) => {
    setExpandedMenus((current) =>
      current.includes(label) ? current.filter((item) => item !== label) : [...current, label]
    );
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed left-4 top-4 z-50 grid h-10 w-10 place-items-center rounded-2xl border border-white/70 bg-white/85 shadow-xl shadow-slate-900/10 backdrop-blur-xl lg:hidden"
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <motion.aside
        initial={false}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 z-40 flex h-screen w-72 flex-col border-r border-white/70 bg-white/82 shadow-2xl shadow-slate-900/8 backdrop-blur-2xl lg:static lg:translate-x-0 will-change-transform"
      >
        <div className="px-5 pb-4 pt-6">
          <Link href="/dashboard" onClick={closeMobileSidebar} className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-xl shadow-slate-950/20">
              HS
            </div>
            <div>
              <h1 className="text-lg font-black tracking-normal text-slate-950">HOURSTACK</h1>
              <p className="text-xs font-bold text-slate-500">Workforce Intelligence</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 pb-4">
          {menuItems.map((item) => {
            const Icon = item.icon ?? Activity;
            const hasSubmenu = Boolean(item.submenu?.length);
            const expanded = expandedMenus.includes(item.label);
            const active = isActive(item.href) || Boolean(item.submenu?.some((subitem) => isActive(subitem.href)));
            return (
              <div key={item.href} className="py-1">
                <div
                  className={cn(
                    'group flex items-center gap-2 rounded-2xl px-2 py-1 transition-all duration-150',
                    active ? 'bg-slate-950 text-white shadow-xl shadow-slate-950/15' : 'text-slate-650 hover:bg-blue-50'
                  )}
                >
                  <Link
                    href={item.href}
                    onClick={closeMobileSidebar}
                    className="flex min-w-0 flex-1 items-center gap-3 rounded-xl px-2 py-2.5"
                  >
                    <Icon className={cn('h-5 w-5 shrink-0', active ? 'text-white' : 'text-slate-500 group-hover:text-blue-600')} />
                    <span className="truncate text-sm font-black">{item.label}</span>
                  </Link>

                  {hasSubmenu && (
                    <button
                      type="button"
                      onClick={() => toggleSubmenu(item.label)}
                      className={cn(
                        'grid h-8 w-8 shrink-0 place-items-center rounded-xl transition-colors',
                        active ? 'hover:bg-white/10' : 'hover:bg-white'
                      )}
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <span style={{ display: 'inline-block', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 160ms ease' }}>
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                  )}
                </div>

                {hasSubmenu && expanded && (
                  <div className="ml-5 mt-1 space-y-1 border-l border-slate-200 py-1 pl-3">
                    {item.submenu?.map((subitem) => {
                      const subActive = pathname === subitem.href;

                      return (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          onClick={closeMobileSidebar}
                          className={cn(
                            'flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-bold transition-colors',
                            subActive
                              ? 'bg-blue-50 text-blue-700 shadow-sm'
                              : 'text-slate-500 hover:bg-slate-50 hover:text-slate-950'
                          )}
                        >
                          <span className={cn('h-2 w-2 rounded-full', subActive ? 'bg-blue-600' : 'bg-slate-300')} />
                          {subitem.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="border-t border-white/70 bg-white/60 p-4">
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-emerald-50 p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Logged in as</p>
            <p className="mt-1 truncate text-sm font-black text-slate-950">{user?.name ?? 'Admin User'}</p>
            <p className="truncate text-xs font-semibold text-slate-500">{user?.email ?? 'admin@hourstack.com'}</p>
          </div>
          <button
            onClick={logout}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-red-100 bg-white px-4 py-2.5 text-sm font-black text-red-600 transition hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </motion.aside>

      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 bg-slate-950/20 backdrop-blur-sm lg:hidden"
        />
      )}
    </>
  );
});
