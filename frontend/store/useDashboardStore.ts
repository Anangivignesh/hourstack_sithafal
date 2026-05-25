import { create } from 'zustand';
import { EmployeeStatus } from '@/types';

interface DashboardState {
  sidebarOpen: boolean;
  employeeStatuses: EmployeeStatus[];
  selectedEmployee: string | null;
  filterDate: Date;
  toggleSidebar: () => void;
  setEmployeeStatuses: (statuses: EmployeeStatus[]) => void;
  setSelectedEmployee: (employeeId: string | null) => void;
  setFilterDate: (date: Date) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  sidebarOpen: true,
  employeeStatuses: [],
  selectedEmployee: null,
  filterDate: new Date(),

  toggleSidebar: () =>
    set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  setEmployeeStatuses: (statuses: EmployeeStatus[]) =>
    set({ employeeStatuses: statuses }),

  setSelectedEmployee: (employeeId: string | null) =>
    set({ selectedEmployee: employeeId }),

  setFilterDate: (date: Date) =>
    set({ filterDate: date }),
}));
