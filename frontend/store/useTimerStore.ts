import { create } from 'zustand'

interface TimerState {
  seconds: number
  isRunning: boolean
  isPaused: boolean
  projectId: string | null
  taskId: string | null
  startTimer: () => void
  pauseTimer: () => void
  stopTimer: () => void
  resetTimer: () => void
  tick: () => void
  setProject: (projectId: string | null) => void
  setTask: (taskId: string | null) => void
}

export const useTimerStore = create<TimerState>((set) => ({
  seconds: 0,
  isRunning: false,
  isPaused: false,
  projectId: null,
  taskId: null,
  startTimer: () => set({ isRunning: true, isPaused: false }),
  pauseTimer: () => set({ isPaused: true }),
  stopTimer: () => set({ isRunning: false, isPaused: false }),
  resetTimer: () => set({ seconds: 0, isRunning: false, isPaused: false }),
  tick: () => set((state) => ({ seconds: state.seconds + 1 })),
  setProject: (projectId) => set({ projectId }),
  setTask: (taskId) => set({ taskId }),
}))
