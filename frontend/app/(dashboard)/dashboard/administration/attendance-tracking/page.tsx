'use client';

import { CalendarCheck } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function AttendanceTrackingPage() {
  return <SectionPlaceholder eyebrow="Administration" title="Attendance Tracking" description="Configure attendance rules, shifts, late policies, leave mapping, and payroll exceptions." icon={CalendarCheck} metrics={[{ label: 'Rules Active', value: '18', detail: 'Across shifts' }, { label: 'Exceptions', value: '14', detail: 'Pending approval' }, { label: 'Payroll Ready', value: '96%', detail: 'This cycle' }]} />;
}
