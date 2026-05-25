'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Sidebar } from '@/components/common/Sidebar';
import { Header } from '@/components/common/Header';
import { useDashboardStore } from '@/store/useDashboardStore';

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { sidebarOpen } = useDashboardStore();

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`flex-1 overflow-auto transition-all duration-300 ${sidebarOpen ? 'md:ml-72' : 'md:ml-0'}`}
        >
          {/* Background Decoration */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Gradient Orbs */}
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="px-4 lg:px-8 py-6 relative z-10">
            {children}
          </div>
        </motion.main>
      </div>
    </div>
  );
}
