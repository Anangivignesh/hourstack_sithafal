import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge Tailwind CSS classes intelligently
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format milliseconds to HH:MM:SS
 */
export function formatDuration(ms: number): string {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

  return [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ].join(":");
}

/**
 * Format date to readable string
 */
export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Format time to HH:MM AM/PM
 */
export function formatTime(date: Date): string {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

/**
 * Calculate percentage with 2 decimals
 */
export function calculatePercentage(
  value: number,
  total: number
): number {
  if (total === 0) return 0;
  return Math.round((value / total) * 100 * 100) / 100;
}

/**
 * Get status color based on type
 */
export function getStatusColor(
  status: string
): "default" | "secondary" | "destructive" | "outline" {
  switch (status.toLowerCase()) {
    case "active":
    case "present":
    case "completed":
      return "default";
    case "idle":
    case "away":
    case "on-leave":
      return "secondary";
    case "offline":
    case "absent":
      return "destructive";
    default:
      return "outline";
  }
}

/**
 * Get status badge color
 */
export function getStatusBadgeColor(
  status: string
): "bg-green-100" | "bg-yellow-100" | "bg-red-100" | "bg-gray-100" {
  switch (status.toLowerCase()) {
    case "active":
    case "present":
      return "bg-green-100";
    case "idle":
    case "away":
      return "bg-yellow-100";
    case "offline":
    case "absent":
      return "bg-red-100";
    default:
      return "bg-gray-100";
  }
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function (...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Format seconds to HH:MM:SS
 */
export function formatTimeSeconds(seconds: number): string {
  const hrs = Math.floor(seconds / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  
  const pad = (num: number) => String(num).padStart(2, '0')
  
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`
}
