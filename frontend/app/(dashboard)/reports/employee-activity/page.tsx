'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard, StatCard } from '@/components/dashboard/GlassCard';
import { Users, TrendingUp, Activity } from 'lucide-react';

const employeeActivities = [
  {
    id: '1',
    employee: 'John Doe',
    workingHours: 38.5,
    focusPercentage: 87,
    activeTime: '7h 45m',
    breakTime: '45m',
    lastActive: '2 mins ago',
  },
  {
    id: '2',
    employee: 'Sarah Smith',
    workingHours: 37.0,
    focusPercentage: 92,
    activeTime: '7h 30m',
    breakTime: '30m',
    lastActive: '5 mins ago',
  },
  {
    id: '3',
    employee: 'Mike Johnson',
    workingHours: 40.0,
    focusPercentage: 85,
    activeTime: '8h',
    breakTime: '1h',
    lastActive: 'Now',
  },
];

export default function EmployeeActivityReportPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Employee Activity Report</h1>
        <p className="text-gray-600 mt-2">Detailed activity tracking and work hour analysis</p>
      </motion.div>

      {/* Overview Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <StatCard
          icon={<Users className="w-6 h-6" />}
          label="Active Employees"
          value="24/28"
          change="Expected 28"
          isPositive={true}
        />
        <StatCard
          icon={<TrendingUp className="w-6 h-6" />}
          label="Avg Work Hours"
          value="38.5h"
          change="This week"
          isPositive={true}
        />
        <StatCard
          icon={<Activity className="w-6 h-6" />}
          label="Avg Focus %"
          value="88%"
          change="Above target"
          isPositive={true}
        />
      </motion.div>

      {/* Employee Activity Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard className="p-6 overflow-x-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Employee Activities</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Employee</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Work Hours</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Focus %</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Active</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Break</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">Last Active</th>
              </tr>
            </thead>
            <tbody>
              {employeeActivities.map((emp, idx) => (
                <motion.tr
                  key={emp.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 font-medium text-gray-900">{emp.employee}</td>
                  <td className="py-3 px-4 text-center font-semibold text-gray-900">
                    {emp.workingHours}h
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-600"
                          initial={{ width: 0 }}
                          animate={{ width: `${emp.focusPercentage}%` }}
                          transition={{ delay: 0.4 + idx * 0.1, duration: 0.8 }}
                        />
                      </div>
                      <span className="text-sm font-bold text-gray-900 w-10 text-right">
                        {emp.focusPercentage}%
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center text-gray-900">{emp.activeTime}</td>
                  <td className="py-3 px-4 text-center text-gray-600">{emp.breakTime}</td>
                  <td className="py-3 px-4 text-right text-sm text-gray-600">
                    {emp.lastActive}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </GlassCard>
      </motion.div>

      {/* Activity Distribution */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Activity Distribution</h2>
          <div className="space-y-4">
            {[
              { label: 'Working', value: 65, color: 'bg-blue-500' },
              { label: 'Focused', value: 20, color: 'bg-green-500' },
              { label: 'Break', value: 10, color: 'bg-yellow-500' },
              { label: 'Away', value: 5, color: 'bg-red-500' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{item.label}</span>
                  <span className="font-bold text-gray-900">{item.value}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
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
    </motion.div>
  );
}
