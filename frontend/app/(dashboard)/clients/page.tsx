'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Mail, Phone, Globe } from 'lucide-react';
import { GlassCard, StatCard } from '@/components/dashboard/GlassCard';

const clients = [
  {
    id: 1,
    name: 'TechCorp Solutions',
    email: 'contact@techcorp.com',
    phone: '+1 (555) 123-4567',
    website: 'techcorp.com',
    activeProjects: 3,
    employees: 12,
    avatar: 'TC',
  },
  {
    id: 2,
    name: 'Creative Agency Co',
    email: 'hello@creative.com',
    phone: '+1 (555) 234-5678',
    website: 'creative.co',
    activeProjects: 2,
    employees: 8,
    avatar: 'CA',
  },
  {
    id: 3,
    name: 'Global Marketing Inc',
    email: 'info@globalmarketing.com',
    phone: '+1 (555) 345-6789',
    website: 'globalmarketing.com',
    activeProjects: 5,
    employees: 20,
    avatar: 'GM',
  },
];

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
          <p className="text-gray-600 mt-2">Manage all your clients and their projects</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Plus className="w-5 h-5" />
          Add Client
        </motion.button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <StatCard
          icon={<Globe className="w-6 h-6" />}
          label="Total Clients"
          value={clients.length}
          change="All active"
          isPositive={true}
        />
        <StatCard
          icon={<Search className="w-6 h-6" />}
          label="Active Projects"
          value={clients.reduce((sum, c) => sum + c.activeProjects, 0)}
          change="Ongoing"
          isPositive={true}
        />
        <StatCard
          icon={<Mail className="w-6 h-6" />}
          label="Total Employees"
          value={clients.reduce((sum, c) => sum + c.employees, 0)}
          change="Working"
          isPositive={true}
        />
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/60 backdrop-blur-xl border border-white/40 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
        </div>
      </motion.div>

      {/* Clients Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredClients.map((client, idx) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
          >
            <GlassCard className="p-6 cursor-pointer" hover>
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                  {client.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{client.name}</h3>
                  <p className="text-xs text-gray-600">{client.employees} employees</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a
                  href={`mailto:${client.email}`}
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {client.email}
                </a>
                <a
                  href={`tel:${client.phone}`}
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {client.phone}
                </a>
                <a
                  href={`https://${client.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  {client.website}
                </a>
              </div>

              {/* Projects */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-xs font-medium text-gray-600 mb-3">Active Projects</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {Array.from({ length: Math.min(client.activeProjects, 3) }).map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200"
                      />
                    ))}
                    {client.activeProjects > 3 && (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-700">
                        +{client.activeProjects - 3}
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-bold text-blue-600">{client.activeProjects} projects</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
