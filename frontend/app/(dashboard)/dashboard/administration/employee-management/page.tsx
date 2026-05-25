'use client';

import { Users } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function EmployeeManagementPage() {
  return <SectionPlaceholder eyebrow="Administration" title="Employee Management" description="Manage employees, departments, roles, invitations, permissions, and reporting access." icon={Users} metrics={[{ label: 'Employees', value: '268', detail: '+12 this month' }, { label: 'Departments', value: '24', detail: 'All active' }, { label: 'Pending Invites', value: '9', detail: 'Expires in 3 days' }]} />;
}
