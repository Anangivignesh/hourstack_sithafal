'use client'

import { useEffect } from 'react'
import { Play, Pause, Square, RotateCcw } from 'lucide-react'
import { GlassCard } from './GlassCard'
import { useTimerStore } from '@/store/useTimerStore'
import { formatTimeSeconds } from '@/lib/utils'

export function Timer() {
  const { seconds, isRunning, isPaused, startTimer, pauseTimer, stopTimer, resetTimer, tick } =
    useTimerStore()

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        tick()
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning, isPaused, tick])

  return (
    <GlassCard className="text-center p-8" hover={false}>
      <div className="space-y-6">
        {/* Timer Display */}
        <div className="relative">
          <div className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tabular-nums drop-shadow-sm select-none">
            {formatTimeSeconds(seconds)}
          </div>
          <p className="text-sm text-gray-500 font-semibold mt-2">
            {isRunning ? (isPaused ? 'Paused' : 'Running') : 'Not Started'}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          {!isRunning ? (
            <button
              onClick={startTimer}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 shadow-md"
            >
              <Play className="w-5 h-5" />
              Start
            </button>
          ) : isPaused ? (
            <button
              onClick={startTimer}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 shadow-md"
            >
              <Play className="w-5 h-5" />
              Resume
            </button>
          ) : (
            <button
              onClick={pauseTimer}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 shadow-md"
            >
              <Pause className="w-5 h-5" />
              Pause
            </button>
          )}

          {isRunning && (
            <button
              onClick={stopTimer}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 shadow-md"
            >
              <Square className="w-5 h-5" />
              Stop
            </button>
          )}

          <button
            onClick={resetTimer}
            disabled={seconds === 0}
            className="px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 disabled:opacity-50 disabled:pointer-events-none rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 shadow-sm"
          >
            <RotateCcw className="w-5 h-5" />
            Reset
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Today&apos;s Total</p>
            <p className="text-xl font-bold text-gray-900 mt-1">8h 24m</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Break Time</p>
            <p className="text-xl font-bold text-gray-900 mt-1">45m</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Productive</p>
            <p className="text-xl font-bold text-green-600 mt-1">85%</p>
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
