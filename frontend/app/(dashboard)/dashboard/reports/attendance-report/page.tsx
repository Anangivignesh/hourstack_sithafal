'use client';

import { CalendarCheck } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function AttendanceReportPage() {
  return <SectionPlaceholder eyebrow="Reports" title="Attendance Report" description="Attendance rates, late arrivals, absences, approved leave, and shift compliance reports." icon={CalendarCheck} metrics={[{ label: 'Attendance Rate', value: '95%', detail: 'Healthy week' }, { label: 'Late Arrivals', value: '23', detail: '-8 vs last week' }, { label: 'Absences', value: '11', detail: '7 approved' }]} />;
}
