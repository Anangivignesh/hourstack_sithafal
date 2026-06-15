'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  TrendingUp,
  Users,
  Zap,
  Target,
  Activity,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { GlassCard, StatCard } from '@/components/dashboard/GlassCard';
import dynamic from 'next/dynamic';

const ActivityFeed = dynamic(() => import('@/components/dashboard/ActivityFeed').then((mod) => mod.ActivityFeed), { ssr: false });
const TeamStatus = dynamic(() => import('@/components/dashboard/TeamStatus').then((mod) => mod.TeamStatus), { ssr: false });
const ProductivityChart = dynamic(() => import('@/components/dashboard/ProductivityChart').then((mod) => mod.ProductivityChart), {
  ssr: false,
  loading: () => <div className="w-full h-80 animate-pulse bg-slate-100 rounded-xl" />,
});

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function DashboardPage() {
  const [user, setUser] = useState<{ name: string; email: string; role: 'admin' | 'employee' } | null>(null);

  useEffect(() => {
    fetch('/api/auth/me')
      .then((response) => response.ok ? response.json() : null)
      .then((data) => {
        if (data?.user) {
          setUser(data.user);
        }
      });
  }, []);

  const isEmployee = user?.role === 'employee';
  const displayName = user?.name ?? 'Admin';
  const dashboardCopy = isEmployee
    ? 'Here is your personal workday, attendance, focus, and time tracking summary.'
    : "Here's what's happening with your team today.";
  const stats = isEmployee
    ? [
        { icon: <Clock className="w-6 h-6" />, label: 'My Work Time', value: '7h 45m', change: '42m above average', isPositive: true },
        { icon: <TrendingUp className="w-6 h-6" />, label: 'My Productivity', value: '91%', change: 'High focus day', isPositive: true },
        { icon: <Target className="w-6 h-6" />, label: 'Tasks Completed', value: '8/10', change: '2 remaining', isPositive: true },
        { icon: <Zap className="w-6 h-6" />, label: 'Focus Score', value: '8.8/10', change: 'Deep work active', isPositive: true },
      ]
    : [
        { icon: <Clock className="w-6 h-6" />, label: 'Total Work Time', value: '234h', change: '12.5% vs last week', isPositive: true },
        { icon: <TrendingUp className="w-6 h-6" />, label: 'Productivity Rate', value: '87%', change: '5% vs last week', isPositive: true },
        { icon: <Users className="w-6 h-6" />, label: 'Active Employees', value: '24/28', change: '2 on leave', isPositive: false },
        { icon: <Zap className="w-6 h-6" />, label: 'Focus Score', value: '8.4/10', change: '1.2 pts improvement', isPositive: true },
      ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Welcome back, <span className="gradient-text">{displayName}</span>
        </h1>
        <p className="text-gray-600 mt-2">{dashboardCopy}</p>
      </motion.div>

      {/* Key Metrics Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            change={stat.change}
            isPositive={stat.isPositive}
          />
        ))}
      </motion.div>

      {/* Charts Section */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Productivity Chart */}
        <div className="lg:col-span-2">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {isEmployee ? 'My Productivity Trend' : 'Productivity Trend'}
                </h2>
                <p className="text-sm text-gray-600">Last 7 days performance</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold gradient-text">↑ 12.5%</p>
                <p className="text-xs text-green-600">vs previous week</p>
              </div>
            </div>
            <ProductivityChart />
          </GlassCard>
        </div>

        {/* Focus Time Distribution */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Time Distribution</h2>
          <div className="space-y-4">
            {[
              { label: 'Focus', value: 65, color: 'bg-blue-500' },
              { label: 'Neutral', value: 20, color: 'bg-yellow-500' },
              { label: 'Break', value: 10, color: 'bg-green-500' },
              { label: 'Idle', value: 5, color: 'bg-red-500' },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{item.value}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${item.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Bottom Section */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Feed */}
        <ActivityFeed />

        {/* Team Status */}
        <TeamStatus />
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
        <GlassCard className="px-6 py-4 hover:bg-blue-50 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Generate Report</p>
              <p className="text-xs text-gray-600">Get weekly insights</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="px-6 py-4 hover:bg-purple-50 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Manage Team</p>
              <p className="text-xs text-gray-600">Add/Remove employees</p>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
