'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard, StatCard } from '@/components/dashboard/GlassCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Clock, TrendingUp } from 'lucide-react';

const productivityData = [
  { day: 'Mon', focus: 85, neutral: 12, idle: 3, websites: 15, apps: 85 },
  { day: 'Tue', focus: 88, neutral: 10, idle: 2, websites: 12, apps: 88 },
  { day: 'Wed', focus: 82, neutral: 14, idle: 4, websites: 18, apps: 82 },
  { day: 'Thu', focus: 90, neutral: 8, idle: 2, websites: 10, apps: 90 },
  { day: 'Fri', focus: 87, neutral: 11, idle: 2, websites: 14, apps: 87 },
];

const topApps = [
  { name: 'Visual Studio Code', duration: 240, percentage: 35 },
  { name: 'Chrome Browser', duration: 170, percentage: 25 },
  { name: 'Slack', duration: 140, percentage: 20 },
  { name: 'Figma', duration: 100, percentage: 15 },
  { name: 'Others', duration: 35, percentage: 5 },
];

const topWebsites = [
  { name: 'GitHub.com', duration: 120, percentage: 40 },
  { name: 'StackOverflow.com', duration: 90, percentage: 30 },
  { name: 'Documentation', duration: 60, percentage: 20 },
  { name: 'Others', duration: 30, percentage: 10 },
];

export default function ProductivityReportPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Productivity Report</h1>
        <p className="text-gray-600 mt-2">Weekly productivity analysis and metrics</p>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <StatCard
          icon={<TrendingUp className="w-6 h-6" />}
          label="Avg Productivity"
          value="86.4%"
          change="Up 3% this week"
          isPositive={true}
        />
        <StatCard
          icon={<Clock className="w-6 h-6" />}
          label="Focus Time"
          value="34.5h"
          change="This week"
          isPositive={true}
        />
        <StatCard
          icon={<TrendingUp className="w-6 h-6" />}
          label="Improvement"
          value="+5.2%"
          change="vs last week"
          isPositive={true}
        />
      </motion.div>

      {/* Productivity Trend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Weekly Productivity Trend</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={productivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="day" stroke="rgba(0,0,0,0.5)" />
              <YAxis stroke="rgba(0,0,0,0.5)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="focus" stroke="#3b82f6" strokeWidth={2} name="Focus %" />
              <Line type="monotone" dataKey="neutral" stroke="#f59e0b" strokeWidth={2} name="Neutral %" />
              <Line type="monotone" dataKey="idle" stroke="#ef4444" strokeWidth={2} name="Idle %" />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>
      </motion.div>

      {/* Apps and Websites */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid lg:grid-cols-2 gap-6"
      >
        {/* Top Apps */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Top Applications</h2>
          <div className="space-y-4">
            {topApps.map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{app.name}</span>
                  <span className="text-sm font-bold text-gray-900">{app.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${app.percentage}%` }}
                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        {/* Top Websites */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Top Websites</h2>
          <div className="space-y-4">
            {topWebsites.map((website, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{website.name}</span>
                  <span className="text-sm font-bold text-gray-900">{website.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${website.percentage}%` }}
                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recommendations</h2>
          <div className="space-y-4">
            {[
              { title: 'Increase Focus Time', desc: 'Try blocking time for deep work sessions', icon: '📌' },
              { title: 'Reduce Interruptions', desc: 'Notifications reduced productivity by 8%', icon: '🔕' },
              { title: 'Optimize Break Schedule', desc: 'Consider 5-minute breaks every hour', icon: '⏰' },
            ].map((rec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100"
              >
                <span className="text-2xl">{rec.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{rec.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
