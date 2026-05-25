'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', productive: 85, neutral: 12, idle: 3, focus: 88 },
  { day: 'Tue', productive: 88, neutral: 10, idle: 2, focus: 91 },
  { day: 'Wed', productive: 82, neutral: 14, idle: 4, focus: 85 },
  { day: 'Thu', productive: 90, neutral: 8, idle: 2, focus: 93 },
  { day: 'Fri', productive: 87, neutral: 11, idle: 2, focus: 89 },
  { day: 'Sat', productive: 78, neutral: 15, idle: 7, focus: 80 },
  { day: 'Sun', productive: 80, neutral: 13, idle: 7, focus: 82 },
];

export function ProductivityChart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="w-full h-80"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="colorProductive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorNeutral" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorIdle" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
          <XAxis dataKey="day" stroke="rgba(0,0,0,0.5)" />
          <YAxis stroke="rgba(0,0,0,0.5)" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              border: '1px solid rgba(0,0,0,0.1)',
              borderRadius: '8px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="productive"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorProductive)"
            name="Productive"
          />
          <Area
            type="monotone"
            dataKey="neutral"
            stroke="#f59e0b"
            fillOpacity={1}
            fill="url(#colorNeutral)"
            name="Neutral"
          />
          <Area
            type="monotone"
            dataKey="idle"
            stroke="#ef4444"
            fillOpacity={1}
            fill="url(#colorIdle)"
            name="Idle"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
