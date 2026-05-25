'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className,
  hover = true,
  delay = 0,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={hover ? { y: -5, boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.1)' } : {}}
      onClick={onClick}
      className={cn(
        'relative rounded-xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl',
        'border border-white/40 shadow-glass overflow-hidden',
        'transition-all duration-300',
        hover && 'cursor-pointer hover:border-white/60',
        className
      )}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  className?: string;
}

export function StatCard({
  icon,
  label,
  value,
  change,
  isPositive = true,
  className,
}: StatCardProps) {
  return (
    <GlassCard className={cn('p-6', className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{label}</p>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {value}
          </h3>
          {change && (
            <p className={cn(
              'text-xs font-medium mt-2',
              isPositive ? 'text-green-600' : 'text-red-600'
            )}>
              {isPositive ? '↑' : '↓'} {change}
            </p>
          )}
        </div>
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600">
          {icon}
        </div>
      </div>
    </GlassCard>
  );
}
