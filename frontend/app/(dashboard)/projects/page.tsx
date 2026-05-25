'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Folder, GitBranch, Calendar, CheckCircle, Clock } from 'lucide-react';
import { GlassCard } from '@/components/dashboard/GlassCard';

const projects = [
  {
    id: 1,
    name: 'Website Redesign',
    status: 'in-progress',
    progress: 65,
    startDate: '2024-01-15',
    deadline: '2024-03-30',
    team: 5,
  },
  {
    id: 2,
    name: 'Mobile App v2.0',
    status: 'in-progress',
    progress: 45,
    startDate: '2024-02-01',
    deadline: '2024-04-15',
    team: 8,
  },
  {
    id: 3,
    name: 'API Integration',
    status: 'completed',
    progress: 100,
    startDate: '2024-01-01',
    deadline: '2024-02-28',
    team: 3,
  },
  {
    id: 4,
    name: 'Database Migration',
    status: 'in-progress',
    progress: 80,
    startDate: '2024-02-15',
    deadline: '2024-03-20',
    team: 4,
  },
];

export default function ProjectsPage() {
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'in-progress' | 'completed'>('all');

  const filteredProjects =
    selectedStatus === 'all'
      ? projects
      : projects.filter((p) => p.status === selectedStatus);

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
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-2">Manage all your projects and tasks</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Plus className="w-5 h-5" />
          New Project
        </motion.button>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex gap-4"
      >
        {(['all', 'in-progress', 'completed'] as const).map((status) => (
          <motion.button
            key={status}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedStatus(status)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedStatus === status
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/60 text-gray-700 hover:bg-white'
            }`}
          >
            {status === 'all' ? 'All' : status === 'in-progress' ? 'In Progress' : 'Completed'}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
          >
            <GlassCard className="p-6 cursor-pointer group" hover>
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100">
                    <Folder className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {project.team} team members
                    </p>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'completed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {project.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-600">Progress</span>
                  <span className="text-xs font-bold text-gray-900">{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ delay: 0.4 + idx * 0.1, duration: 1 }}
                  />
                </div>
              </div>

              {/* Dates */}
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Start: {new Date(project.startDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Due: {new Date(project.deadline).toLocaleDateString()}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
