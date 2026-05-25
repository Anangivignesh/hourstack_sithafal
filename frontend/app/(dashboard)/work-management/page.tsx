'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Activity, Shield } from 'lucide-react';
import { GlassCard, StatCard } from '@/components/dashboard/GlassCard';

const sections = [
  {
    id: 1,
    title: 'Workforce Analytics',
    description: 'Real-time insights into team productivity and performance',
    icon: TrendingUp,
    color: 'from-blue-500 to-blue-600',
    stats: [
      { label: 'Avg Productivity', value: '87%' },
      { label: 'Focus Score', value: '8.4/10' },
    ],
  },
  {
    id: 2,
    title: 'Employees Monitoring',
    description: 'Live monitoring of employee activities and status',
    icon: Activity,
    color: 'from-purple-500 to-purple-600',
    stats: [
      { label: 'Active Now', value: '24/28' },
      { label: 'Idle', value: '3' },
    ],
  },
  {
    id: 3,
    title: 'Data Loss Prevention',
    description: 'Prevent sensitive data leaks and unauthorized access',
    icon: Shield,
    color: 'from-red-500 to-red-600',
    stats: [
      { label: 'Threats Blocked', value: '12' },
      { label: 'Safe Status', value: '100%' },
    ],
  },
  {
    id: 4,
    title: 'Field Staff Tracking',
    description: 'Track field employees with GPS and real-time location',
    icon: Activity,
    color: 'from-green-500 to-green-600',
    stats: [
      { label: 'Tracked', value: '18' },
      { label: 'Coverage', value: '95%' },
    ],
  },
];

export default function WorkManagementPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Work Management</h1>
        <p className="text-gray-600 mt-2">Advanced workforce management and analytics tools</p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <StatCard
          icon={<Users className="w-6 h-6" />}
          label="Total Workforce"
          value="268"
          change="28 active today"
          isPositive={true}
        />
        <StatCard
          icon={<TrendingUp className="w-6 h-6" />}
          label="Efficiency Score"
          value="92%"
          change="Up 5% this week"
          isPositive={true}
        />
        <StatCard
          icon={<Shield className="w-6 h-6" />}
          label="Security Level"
          value="High"
          change="All threats mitigated"
          isPositive={true}
        />
      </motion.div>

      {/* Management Sections Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <GlassCard className="p-6 cursor-pointer group h-full" hover>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">{section.description}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${section.color} text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
                  {section.stats.map((stat, statIdx) => (
                    <motion.div
                      key={statIdx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1 + statIdx * 0.05 }}
                    >
                      <p className="text-xs font-medium text-gray-600">{stat.label}</p>
                      <p className="text-xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-2"
                >
                  View Details
                  <span>→</span>
                </motion.button>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Additional Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Management Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Project Assignment', description: 'Assign tasks and projects to team members' },
              { title: 'Performance Metrics', description: 'Track KPIs and performance indicators' },
              { title: 'Resource Allocation', description: 'Optimize resource distribution' },
              { title: 'Team Collaboration', description: 'Real-time collaboration tools' },
              { title: 'Budget Tracking', description: 'Monitor project budgets' },
              { title: 'Compliance Reports', description: 'Generate compliance documentation' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.05 }}
                className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 hover:border-blue-300 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
