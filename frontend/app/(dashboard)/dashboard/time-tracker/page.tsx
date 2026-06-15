'use client'

import { useState } from 'react'
import { Timer } from '@/components/dashboard/Timer'
import { ProjectSelector } from '@/components/dashboard/ProjectSelector'
import { GlassCard } from '@/components/dashboard/GlassCard'
import { Coffee, Utensils, Users, Award, ShieldAlert, Sparkles } from 'lucide-react'
import { useTimerStore } from '@/store/useTimerStore'

export default function TimeTrackerPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const { setProject, setTask } = useTimerStore()

  // Quick Action triggers
  const handleQuickAction = (type: 'break' | 'lunch' | 'meeting') => {
    if (type === 'break') {
      setProject('4') // Internal Documentation / break time
      setTask('Break Session')
    } else if (type === 'lunch') {
      setProject('4')
      setTask('Lunch Period')
    } else if (type === 'meeting') {
      setProject('1') // HourStack Development / meetings
      setTask('Team Focus Sync')
    }
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
            Time Tracker
          </h1>
          <p className="text-gray-500 font-semibold mt-1">
            Track your work hours, task distribution, and productivity logs.
          </p>
        </div>
        
        {/* Luminous Tag */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-xs font-bold w-fit border border-blue-500/10 self-start md:self-auto">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
          Luminous Insight
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left / Center: Timer Section */}
        <div className="lg:col-span-2 space-y-6">
          <Timer />

          {/* Project & Task Selection */}
          <GlassCard className="p-6" hover={false}>
            <h3 className="font-bold text-gray-900 text-base mb-4">Project & Task Context</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Project
                </label>
                <ProjectSelector 
                  placeholder="Select project..." 
                  onChange={(val) => setProject(val)}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Task (Optional)
                </label>
                <ProjectSelector 
                  placeholder="Select task detail..." 
                  onChange={(val) => setTask(val)}
                />
              </div>
            </div>
          </GlassCard>

          {/* Quick Actions */}
          <GlassCard className="p-6" hover={false}>
            <h3 className="font-bold text-gray-900 text-base mb-4">Quick Actions</h3>
            <div className="grid grid-cols-3 gap-3">
              <button 
                onClick={() => handleQuickAction('break')}
                className="flex flex-col items-center justify-center p-4 bg-white hover:bg-amber-50/50 border border-gray-150 hover:border-amber-200 text-gray-700 hover:text-amber-600 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
              >
                <Coffee className="w-6 h-6 mb-2 text-amber-500" />
                <span className="text-xs font-bold">Coffee Break</span>
              </button>
              
              <button 
                onClick={() => handleQuickAction('lunch')}
                className="flex flex-col items-center justify-center p-4 bg-white hover:bg-orange-50/50 border border-gray-150 hover:border-orange-200 text-gray-700 hover:text-orange-600 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
              >
                <Utensils className="w-6 h-6 mb-2 text-orange-500" />
                <span className="text-xs font-bold">Lunch Time</span>
              </button>
              
              <button 
                onClick={() => handleQuickAction('meeting')}
                className="flex flex-col items-center justify-center p-4 bg-white hover:bg-blue-50/50 border border-gray-150 hover:border-blue-200 text-gray-700 hover:text-blue-600 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
              >
                <Users className="w-6 h-6 mb-2 text-blue-500" />
                <span className="text-xs font-bold">Team Meeting</span>
              </button>
            </div>
          </GlassCard>
        </div>

        {/* Right Section: Tabs & Summary */}
        <div className="lg:col-span-1 space-y-6">
          <div className="w-full">
            {/* Custom Premium Tabs Selector */}
            <div className="flex border border-gray-200/50 mb-4 bg-gray-100/50 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all duration-200 ${
                  activeTab === 'overview'
                    ? 'bg-white text-blue-600 shadow-sm border border-gray-200/10'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('attendance')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all duration-200 ${
                  activeTab === 'attendance'
                    ? 'bg-white text-blue-600 shadow-sm border border-gray-200/10'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Attendance
              </button>
            </div>

            {/* Tab Contents */}
            {activeTab === 'overview' ? (
              <GlassCard className="p-6" hover={false}>
                <h3 className="font-bold text-gray-900 text-base mb-4">Today&apos;s Focus</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm font-semibold text-gray-600">
                    <span>Work Hours Logged</span>
                    <span className="font-extrabold text-gray-900">7h 30m</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-semibold text-gray-600">
                    <span>Productive Window</span>
                    <span className="font-extrabold text-green-600">6h 15m</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-semibold text-gray-600">
                    <span>Break Total</span>
                    <span className="font-extrabold text-gray-900">45m</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-semibold text-gray-600">
                    <span>Idle Flagged Time</span>
                    <span className="font-extrabold text-orange-600">30m</span>
                  </div>
                </div>

                {/* Score */}
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-4 bg-gradient-to-br from-blue-50/50 to-purple-50/50 p-4 rounded-2xl border border-blue-100/30">
                  <div className="p-3 bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-500/15">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Quality Score</h4>
                    <p className="text-xl font-extrabold text-blue-600">92% High Focus</p>
                  </div>
                </div>
              </GlassCard>
            ) : (
              <GlassCard className="p-6" hover={false}>
                <h3 className="font-bold text-gray-900 text-base mb-2">Shift Attendance</h3>
                <p className="text-sm font-medium text-gray-500 leading-relaxed mb-4">
                  Clock-in events are automatically tracked through our background sync agents.
                </p>

                <div className="p-4 bg-yellow-50 border border-yellow-100 text-yellow-800 rounded-2xl flex gap-3 text-xs font-medium">
                  <ShieldAlert className="w-4 h-4 shrink-0 text-yellow-600 mt-0.5" />
                  <div>
                    <span className="font-bold">Opt-in Active:</span> Shift scheduling features will activate fully once connection is synced.
                  </div>
                </div>
              </GlassCard>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
