'use client';

import { Monitor } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function EmployeesMonitoringPage() {
  return <SectionPlaceholder eyebrow="Work Management" title="Employees Monitoring" description="Live employee status, app usage, screenshots, idle periods, and work context." icon={Monitor} metrics={[{ label: 'Online', value: '184', detail: 'Live now' }, { label: 'Screenshots', value: '1.8k', detail: 'Captured today' }, { label: 'Alerts', value: '12', detail: 'Policy reviewed' }]} />;
}
