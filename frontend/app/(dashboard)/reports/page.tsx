'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GlassCard, StatCard } from '@/components/dashboard/GlassCard';
import { Download, Filter } from 'lucide-react';

const attendanceData = [
  { date: 'Mon', present: 24, absent: 2, leave: 2 },
  { date: 'Tue', present: 26, absent: 1, leave: 1 },
  { date: 'Wed', present: 25, absent: 2, leave: 1 },
  { date: 'Thu', present: 27, absent: 0, leave: 1 },
  { date: 'Fri', present: 24, absent: 2, leave: 2 },
];

const reportData = [
  {
    id: 1,
    employee: 'John Doe',
    department: 'Development',
    workingHours: 40,
    productivity: '87%',
    attendance: '100%',
  },
  {
    id: 2,
    employee: 'Sarah Smith',
    department: 'Design',
    workingHours: 38,
    productivity: '92%',
    attendance: '95%',
  },
  {
    id: 3,
    employee: 'Mike Johnson',
    department: 'Management',
    workingHours: 40,
    productivity: '85%',
    attendance: '100%',
  },
];

export default function ReportsPage() {
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
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600 mt-2">Comprehensive workforce analytics and reports</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
        >
          <Download className="w-5 h-5" />
          Export PDF
        </motion.button>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <StatCard
          icon={<Filter className="w-6 h-6" />}
          label="Total Employees"
          value="28"
          change="All active"
          isPositive={true}
        />
        <StatCard
          icon={<Filter className="w-6 h-6" />}
          label="Avg. Attendance"
          value="95%"
          change="2% vs last week"
          isPositive={true}
        />
        <StatCard
          icon={<Filter className="w-6 h-6" />}
          label="Avg. Productivity"
          value="88%"
          change="3% vs last week"
          isPositive={true}
        />
      </motion.div>

      {/* Attendance Chart */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Weekly Attendance</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="date" stroke="rgba(0,0,0,0.5)" />
              <YAxis stroke="rgba(0,0,0,0.5)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="present" fill="#22c55e" name="Present" radius={[8, 8, 0, 0]} />
              <Bar dataKey="absent" fill="#ef4444" name="Absent" radius={[8, 8, 0, 0]} />
              <Bar dataKey="leave" fill="#f59e0b" name="On Leave" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
      </motion.div>

      {/* Employee Report Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard className="p-6 overflow-x-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Employee Weekly Report</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Employee</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Department</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Work Hours</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Productivity</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Attendance</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((row, idx) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{row.employee}</p>
                      <p className="text-xs text-gray-600">{row.department}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{row.department}</td>
                  <td className="py-3 px-4 text-center font-semibold text-gray-900">
                    {row.workingHours}h
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                      {row.productivity}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                      {row.attendance}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
