'use client'

import { useState, useRef, useEffect } from 'react'
import { Check, ChevronsUpDown, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const projects = [
  { value: '1', label: 'HOUR STACK Development' },
  { value: '2', label: 'Client Website Redesign' },
  { value: '3', label: 'Mobile App Testing' },
  { value: '4', label: 'Internal Documentation' },
]

interface ProjectSelectorProps {
  placeholder?: string;
  value?: string | null;
  onChange?: (value: string) => void;
}

export function ProjectSelector({ placeholder = 'Select project...', value = '', onChange }: ProjectSelectorProps) {
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || '')
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  // Sync internal state with prop value
  useEffect(() => {
    setSelectedValue(value || '')
  }, [value])

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredProjects = projects.filter((project) =>
    project.label.toLowerCase().includes(search.toLowerCase())
  )

  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === selectedValue ? '' : currentValue
    setSelectedValue(newValue)
    if (onChange) onChange(newValue)
    setOpen(false)
  }

  const selectedLabel = projects.find((p) => p.value === selectedValue)?.label

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Combobox Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white/70 backdrop-blur-md border border-gray-200/50 hover:border-blue-500/40 rounded-xl shadow-sm text-sm text-gray-700 font-semibold text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500"
      >
        <span className={cn('block truncate', !selectedLabel && 'text-gray-400 font-medium')}>
          {selectedLabel || placeholder}
        </span>
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-gray-400" />
      </button>

      {/* Dropdown Popover */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-0 right-0 z-50 mt-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-xl overflow-hidden max-h-72 flex flex-col"
          >
            {/* Search Input Box */}
            <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100 bg-white/50">
              <Search className="h-4 w-4 text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none font-medium py-1"
              />
            </div>

            {/* List Group */}
            <div className="overflow-y-auto py-1.5 flex-1 max-h-56">
              {filteredProjects.length === 0 ? (
                <div className="px-4 py-3 text-sm text-gray-500 font-medium text-center">
                  No matches found.
                </div>
              ) : (
                filteredProjects.map((project) => (
                  <button
                    key={project.value}
                    type="button"
                    onClick={() => handleSelect(project.value)}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-colors font-semibold',
                      project.value === selectedValue && 'bg-blue-50/50 text-blue-600'
                    )}
                  >
                    <Check
                      className={cn(
                        'h-4 w-4 shrink-0 text-blue-600',
                        project.value === selectedValue ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    <span className="truncate">{project.label}</span>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
