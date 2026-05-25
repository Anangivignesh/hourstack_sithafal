'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/dashboard/GlassCard';
import { AlertCircle, MessageSquare, CheckCircle, Zap } from 'lucide-react';

const activities = [
  {
    id: 1,
    user: 'John Doe',
    action: 'Logged in',
    time: '2 mins ago',
    icon: CheckCircle,
    color: 'green',
  },
  {
    id: 2,
    user: 'Sarah Smith',
    action: 'Idle for 15 mins',
    time: '10 mins ago',
    icon: AlertCircle,
    color: 'yellow',
  },
  {
    id: 3,
    user: 'Mike Johnson',
    action: 'Switched project',
    time: '25 mins ago',
    icon: Zap,
    color: 'blue',
  },
  {
    id: 4,
    user: 'Emily Davis',
    action: 'Took a break',
    time: '1 hour ago',
    icon: MessageSquare,
    color: 'purple',
  },
];

export function ActivityFeed() {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Activity Feed</h2>
          <p className="text-sm text-gray-600">Real-time team activities</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          View All
        </motion.button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, idx) => {
          const Icon = activity.icon;
          const colorClasses = {
            green: 'bg-green-100 text-green-600',
            yellow: 'bg-yellow-100 text-yellow-600',
            blue: 'bg-blue-100 text-blue-600',
            purple: 'bg-purple-100 text-purple-600',
          };

          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className={`p-2 rounded-lg ${colorClasses[activity.color as keyof typeof colorClasses]}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                <p className="text-xs text-gray-600">{activity.action}</p>
              </div>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </motion.div>
          );
        })}
      </div>
    </GlassCard>
  );
}
