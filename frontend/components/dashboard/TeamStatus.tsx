'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/dashboard/GlassCard';
import { CheckCircle, Clock, AlertCircle, LogOut } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Developer',
    status: 'active',
    avatar: 'JD',
    time: 'Just now',
  },
  {
    id: 2,
    name: 'Sarah Smith',
    role: 'Designer',
    status: 'idle',
    avatar: 'SS',
    time: '5 mins idle',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Manager',
    status: 'active',
    avatar: 'MJ',
    time: 'Just now',
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Marketing',
    status: 'offline',
    avatar: 'ED',
    time: 'Offline',
  },
];

const statusConfig = {
  active: {
    icon: CheckCircle,
    color: 'bg-green-500',
    textColor: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  idle: {
    icon: Clock,
    color: 'bg-yellow-500',
    textColor: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  offline: {
    icon: LogOut,
    color: 'bg-gray-500',
    textColor: 'text-gray-600',
    bgColor: 'bg-gray-100',
  },
};

export function TeamStatus() {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Team Status</h2>
          <p className="text-sm text-gray-600">Live employee status</p>
        </div>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          24 Active
        </span>
      </div>

      <div className="space-y-4">
        {teamMembers.map((member, idx) => {
          const config = statusConfig[member.status as keyof typeof statusConfig];
          const Icon = config.icon;

          return (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                    {member.avatar}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${config.color} rounded-full border-2 border-white`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{member.name}</p>
                  <p className="text-xs text-gray-600">{member.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${config.textColor}`} />
                <span className="text-xs text-gray-600">{member.time}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </GlassCard>
  );
}
