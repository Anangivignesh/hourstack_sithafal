// Auth Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'employee';
  avatar?: string;
  department?: string;
  createdAt: Date;
}

export interface Session {
  user: User;
  token: string;
  expiresAt: Date;
}

// Employee Types
export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  role: string;
  avatar?: string;
  status: 'active' | 'inactive' | 'on-leave';
  joinDate: Date;
  projectIds: string[];
}

// Project Types
export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planning';
  startDate: Date;
  deadline: Date;
  teamMembers: string[];
  progress: number;
  githubUrl?: string;
}

// Time Tracking Types
export interface TimeEntry {
  id: string;
  employeeId: string;
  date: Date;
  startTime: Date;
  endTime?: Date;
  duration: number; // in minutes
  type: 'work' | 'break' | 'away' | 'offline';
  projectId?: string;
  description?: string;
}

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  date: Date;
  checkIn: Date;
  checkOut?: Date;
  status: 'present' | 'absent' | 'on-leave' | 'holiday';
  workingHours: number;
  notes?: string;
}

// Activity Types
export interface Activity {
  id: string;
  employeeId: string;
  timestamp: Date;
  type: 'screenshot' | 'keyboard' | 'mouse' | 'app-switch' | 'idle';
  metadata?: Record<string, any>;
}

export interface Screenshot {
  id: string;
  employeeId: string;
  timestamp: Date;
  imageUrl: string;
  thumbnailUrl?: string;
  appName?: string;
  windowTitle?: string;
  isBlurred: boolean;
}

// Analytics Types
export interface DailyStats {
  date: Date;
  totalHours: number;
  productiveHours: number;
  breakHours: number;
  idleHours: number;
  offlineHours: number;
  topApps: { name: string; duration: number }[];
  topWebsites: { name: string; duration: number }[];
}

export interface ProductivityMetrics {
  productiveTime: number;
  neutralTime: number;
  idleTime: number;
  breakTime: number;
  productivityPercentage: number;
  focusScore: number;
  appUsage: { name: string; duration: number; category: string }[];
  websiteUsage: { name: string; duration: number; category: string }[];
}

// Report Types
export interface ActivityReport {
  employeeId: string;
  employeeName: string;
  period: { start: Date; end: Date };
  totalWorkingHours: number;
  averageDaily: number;
  topApps: { name: string; percentage: number }[];
  topWebsites: { name: string; percentage: number }[];
  screenshots: Screenshot[];
}

// Client Types
export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company: string;
  projects: string[];
  activeProjects: number;
  avatar?: string;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
  createdAt: Date;
}

// Live Status
export interface EmployeeStatus {
  employeeId: string;
  name: string;
  status: 'active' | 'idle' | 'offline' | 'break';
  lastActive: Date;
  currentActivity?: string;
  projectId?: string;
}
