'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard, StatCard } from '@/components/dashboard/GlassCard';
import { Calendar, Users, TrendingUp } from 'lucide-react';

const attendanceData = [
  { employeeId: '1', name: 'John Doe', date: '2024-05-24', status: 'present', checkIn: '09:00', checkOut: '17:30' },
  { employeeId: '2', name: 'Sarah Smith', date: '2024-05-24', status: 'present', checkIn: '09:15', checkOut: '17:45' },
  { employeeId: '3', name: 'Mike Johnson', date: '2024-05-24', status: 'absent', checkIn: '-', checkOut: '-' },
];

export default function AttendanceTrackingPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Attendance Tracking</h1>
        <p className="text-gray-600 mt-2">Monitor employee attendance and work hours</p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <StatCard
          icon={<Users className="w-6 h-6" />}
          label="Present Today"
          value="26/28"
          change="Expected 28"
          isPositive={true}
        />
        <StatCard
          icon={<Calendar className="w-6 h-6" />}
          label="Avg Attendance"
          value="96%"
          change="This month"
          isPositive={true}
        />
        <StatCard
          icon={<TrendingUp className="w-6 h-6" />}
          label="On Leave"
          value="2"
          change="Approved"
          isPositive={false}
        />
      </motion.div>

      {/* Attendance Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard className="p-6 overflow-x-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Today's Attendance</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Employee</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Status</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Check In</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Check Out</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">Hours</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 font-medium text-gray-900">{record.name}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      record.status === 'present' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {record.status === 'present' ? 'Present' : 'Absent'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center text-gray-900">{record.checkIn}</td>
                  <td className="py-3 px-4 text-center text-gray-900">{record.checkOut}</td>
                  <td className="py-3 px-4 text-right font-semibold text-gray-900">
                    {record.status === 'present' ? '8.5h' : '-'}
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
