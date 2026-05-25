'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { GlassCard, StatCard } from '@/components/dashboard/GlassCard';
import { TrendingUp, Target, Zap } from 'lucide-react';

const weeklyData = [
  { day: 'Mon', hours: 8.5, productive: 7.2, neutral: 1.0, idle: 0.3 },
  { day: 'Tue', hours: 8.0, productive: 7.0, neutral: 0.8, idle: 0.2 },
  { day: 'Wed', hours: 8.2, productive: 7.3, neutral: 0.7, idle: 0.2 },
  { day: 'Thu', hours: 8.5, productive: 7.5, neutral: 0.8, idle: 0.2 },
  { day: 'Fri', hours: 8.0, productive: 6.8, neutral: 1.0, idle: 0.2 },
];

const appUsage = [
  { name: 'Visual Studio Code', value: 35, color: '#3b82f6' },
  { name: 'Chrome Browser', value: 25, color: '#f59e0b' },
  { name: 'Slack', value: 20, color: '#8b5cf6' },
  { name: 'Figma', value: 15, color: '#ec4899' },
  { name: 'Others', value: 5, color: '#6b7280' },
];

export default function AnalyticsPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-2">Detailed insights into productivity and work patterns</p>
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
          label="Avg. Daily Hours"
          value="8.2h"
          change="Above target"
          isPositive={true}
        />
        <StatCard
          icon={<Target className="w-6 h-6" />}
          label="Focus Score"
          value="8.4/10"
          change="Excellent"
          isPositive={true}
        />
        <StatCard
          icon={<Zap className="w-6 h-6" />}
          label="Peak Hours"
          value="10-12 AM"
          change="Most productive"
          isPositive={true}
        />
      </motion.div>

      {/* Weekly Breakdown */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Weekly Work Hours</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={weeklyData}>
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
              <Bar dataKey="productive" stackId="a" fill="#3b82f6" name="Productive" />
              <Bar dataKey="neutral" stackId="a" fill="#f59e0b" name="Neutral" />
              <Bar dataKey="idle" stackId="a" fill="#ef4444" name="Idle" />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
      </motion.div>

      {/* App Usage */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <GlassCard className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Top Applications</h2>
          <div className="space-y-4">
            {appUsage.map((app, idx) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: app.color }}
                    />
                    <span className="text-sm font-medium text-gray-700">{app.name}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{app.value}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full"
                    style={{ backgroundColor: app.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${app.value}%` }}
                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Time Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={appUsage}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {appUsage.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
