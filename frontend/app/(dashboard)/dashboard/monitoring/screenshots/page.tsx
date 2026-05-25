'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image, Play, Download, Share2, Lock } from 'lucide-react';
import { GlassCard } from '@/components/dashboard/GlassCard';

const screenshots = [
  {
    id: 1,
    timestamp: '2024-05-24 14:35:00',
    app: 'Visual Studio Code',
    window: 'hourstack/frontend/app',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop',
    isBlurred: false,
  },
  {
    id: 2,
    timestamp: '2024-05-24 14:28:00',
    app: 'Chrome Browser',
    window: 'GitHub - hourstack/hourstack',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=300&h=200&fit=crop',
    isBlurred: false,
  },
  {
    id: 3,
    timestamp: '2024-05-24 14:15:00',
    app: 'Slack',
    window: 'Design Team Discussion',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
    isBlurred: true,
  },
  {
    id: 4,
    timestamp: '2024-05-24 14:05:00',
    app: 'Figma',
    window: 'UI Design - Dashboard',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop',
    isBlurred: false,
  },
];

export default function ScreenshotsPage() {
  const [selectedScreenshot, setSelectedScreenshot] = useState<typeof screenshots[0] | null>(
    screenshots[0]
  );
  const [blurMode, setBlurMode] = useState(false);

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
        <h1 className="text-3xl font-bold text-gray-900">Monitoring - Screenshots</h1>
        <p className="text-gray-600 mt-2">Automatic screenshot monitoring and activity tracking</p>
      </motion.div>

      {/* Main View */}
      {selectedScreenshot && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard className="p-8">
            {/* Screenshot Header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedScreenshot.app}</h2>
                <p className="text-gray-600 mt-1">{selectedScreenshot.window}</p>
                <p className="text-sm text-gray-500 mt-2">Captured: {selectedScreenshot.timestamp}</p>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setBlurMode(!blurMode)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    blurMode
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Lock className="w-4 h-4" />
                  {blurMode ? 'Blurred' : 'Blur PII'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download
                </motion.button>
              </div>
            </div>

            {/* Screenshot Display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-lg bg-black h-96"
            >
              <img
                src={selectedScreenshot.thumbnail}
                alt={selectedScreenshot.app}
                className={`w-full h-full object-cover ${blurMode ? 'blur-md' : ''}`}
              />
              {blurMode && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              )}
            </motion.div>

            {/* Screenshot Details */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Duration', value: '5m 23s' },
                { label: 'Activity Type', value: 'Active' },
                { label: 'Focus Status', value: 'Focused' },
                { label: 'URL/App', value: selectedScreenshot.app },
              ].map((detail, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                >
                  <p className="text-xs font-medium text-gray-600 mb-1">{detail.label}</p>
                  <p className="text-lg font-bold text-gray-900">{detail.value}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      )}

      {/* Screenshots Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Today's Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {screenshots.map((screenshot, idx) => (
              <motion.div
                key={screenshot.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                onClick={() => setSelectedScreenshot(screenshot)}
                className={`relative rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 ${
                  selectedScreenshot?.id === screenshot.id
                    ? 'ring-2 ring-blue-500'
                    : 'hover:ring-2 hover:ring-blue-300'
                }`}
              >
                {/* Thumbnail */}
                <div className="relative h-40 bg-black overflow-hidden">
                  <img
                    src={screenshot.thumbnail}
                    alt={screenshot.app}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${
                      screenshot.isBlurred ? 'blur-sm' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="font-semibold text-gray-900 text-sm truncate">{screenshot.app}</p>
                  <p className="text-xs text-gray-600 truncate mt-1">{screenshot.window}</p>
                  <p className="text-xs text-gray-500 mt-2">{screenshot.timestamp}</p>
                </div>

                {/* Hover Actions */}
                <motion.div
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30"
                  >
                    <Play className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30"
                  >
                    <Share2 className="w-5 h-5" />
                  </motion.button>
                </motion.div>

                {/* Blur Badge */}
                {screenshot.isBlurred && (
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    Blurred
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Activity Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Activity Summary</h2>
          <div className="space-y-4">
            {[
              { app: 'Visual Studio Code', percentage: 35, screenshots: 42 },
              { app: 'Chrome Browser', percentage: 25, screenshots: 30 },
              { app: 'Slack', percentage: 20, screenshots: 24 },
              { app: 'Figma', percentage: 15, screenshots: 18 },
              { app: 'Others', percentage: 5, screenshots: 6 },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{item.app}</span>
                  <span className="text-sm text-gray-600">{item.screenshots} screenshots</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
