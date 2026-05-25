'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/dashboard/GlassCard';
import { Activity, Zap } from 'lucide-react';

const monitoringData = [
  {
    id: '1',
    employee: 'John Doe',
    status: 'active',
    currentApp: 'Visual Studio Code',
    currentWindow: 'hourstack/frontend',
    idle: 0,
    keystrokes: 245,
    mouseClicks: 89,
  },
  {
    id: '2',
    employee: 'Sarah Smith',
    status: 'active',
    currentApp: 'Figma',
    currentWindow: 'UI Design - Dashboard',
    idle: 2,
    keystrokes: 156,
    mouseClicks: 234,
  },
  {
    id: '3',
    employee: 'Mike Johnson',
    status: 'idle',
    currentApp: 'Chrome Browser',
    currentWindow: 'GitHub - hourstack',
    idle: 8,
    keystrokes: 0,
    mouseClicks: 0,
  },
];

export default function LiveMonitoringPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Live Monitoring</h1>
        <p className="text-gray-600 mt-2">Real-time monitoring of employee activities</p>
      </motion.div>

      {/* Live Stream */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {monitoringData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + idx * 0.1 }}
          >
            <GlassCard className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">{item.employee}</h3>
                <div className={`w-3 h-3 rounded-full ${
                  item.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                } animate-pulse`} />
              </div>

              {/* Status */}
              <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 mb-4">
                <p className="text-xs font-medium text-gray-600 mb-1">Current Activity</p>
                <p className="font-semibold text-gray-900">{item.currentApp}</p>
                <p className="text-sm text-gray-600">{item.currentWindow}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-gray-50">
                  <p className="text-xs text-gray-600 mb-1">Idle</p>
                  <p className="font-bold text-gray-900">{item.idle} mins</p>
                </div>
                <div className="p-3 rounded-lg bg-gray-50">
                  <p className="text-xs text-gray-600 mb-1">Keystrokes</p>
                  <p className="font-bold text-gray-900">{item.keystrokes}</p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  item.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {item.status === 'active' ? '🟢 Active' : '🟡 Idle'}
                </span>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Activity Feed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Real-Time Activity Feed</h2>
          <div className="space-y-4">
            {[
              { time: '14:35', employee: 'John Doe', event: 'Switched to Visual Studio Code', icon: '💻' },
              { time: '14:32', employee: 'Sarah Smith', event: 'Took a break', icon: '☕' },
              { time: '14:28', employee: 'Mike Johnson', event: 'Went idle', icon: '⏸️' },
              { time: '14:25', employee: 'Emily Davis', event: 'Logged in', icon: '👤' },
            ].map((activity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-2xl">{activity.icon}</span>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.employee}</p>
                  <p className="text-sm text-gray-600">{activity.event}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
