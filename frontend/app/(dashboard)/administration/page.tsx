'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GlassCard, StatCard } from '@/components/dashboard/GlassCard';
import { Users, Settings, Zap } from 'lucide-react';

const employeeData = [
  { name: 'John Doe', role: 'Developer', department: 'Tech', workingHours: 38, status: 'active' },
  { name: 'Sarah Smith', role: 'Designer', department: 'Design', workingHours: 37, status: 'active' },
  { name: 'Mike Johnson', role: 'Manager', department: 'Management', workingHours: 40, status: 'active' },
  { name: 'Emily Davis', role: 'Marketing', department: 'Marketing', workingHours: 35, status: 'idle' },
];

const departmentStats = [
  { department: 'Tech', employees: 12, workingHours: 456, productivity: 88 },
  { department: 'Design', employees: 8, workingHours: 296, productivity: 92 },
  { department: 'Marketing', employees: 6, workingHours: 210, productivity: 85 },
  { department: 'Sales', employees: 10, workingHours: 350, productivity: 90 },
  { department: 'HR', employees: 4, workingHours: 140, productivity: 88 },
];

export default function AdministrationPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Administration</h1>
        <p className="text-gray-600 mt-2">Manage employees, attendance, and system settings</p>
      </motion.div>

      {/* Key Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <StatCard
          icon={<Users className="w-6 h-6" />}
          label="Total Employees"
          value="40"
          change="2 new this month"
          isPositive={true}
        />
        <StatCard
          icon={<Zap className="w-6 h-6" />}
          label="Attendance Rate"
          value="94%"
          change="Above average"
          isPositive={true}
        />
        <StatCard
          icon={<Settings className="w-6 h-6" />}
          label="System Health"
          value="100%"
          change="All systems running"
          isPositive={true}
        />
      </motion.div>

      {/* Admin Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          { title: 'Add Employee', desc: 'Add new employee to system', icon: '👤' },
          { title: 'Manage Roles', desc: 'Assign roles and permissions', icon: '🔐' },
          { title: 'Assign Projects', desc: 'Assign projects to employees', icon: '📋' },
          { title: 'View Reports', desc: 'Generate admin reports', icon: '📊' },
        ].map((action, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
          >
            <GlassCard className="p-6 text-center cursor-pointer hover:bg-blue-50" hover>
              <div className="text-4xl mb-3">{action.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1">{action.title}</h3>
              <p className="text-xs text-gray-600">{action.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Employee List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard className="p-6 overflow-x-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Employee Management</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Employee</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Department</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Role</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Hours</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Status</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {employeeData.map((emp, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center text-xs font-bold">
                        {emp.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <p className="font-medium text-gray-900">{emp.name}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{emp.department}</td>
                  <td className="py-3 px-4 text-gray-600">{emp.role}</td>
                  <td className="py-3 px-4 text-center font-semibold text-gray-900">{emp.workingHours}h</td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        emp.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                      Edit
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </GlassCard>
      </motion.div>

      {/* Department Statistics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Department Statistics</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={departmentStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="department" stroke="rgba(0,0,0,0.5)" />
              <YAxis stroke="rgba(0,0,0,0.5)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="employees" fill="#3b82f6" name="Employees" radius={[8, 8, 0, 0]} />
              <Bar dataKey="productivity" fill="#22c55e" name="Productivity %" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
