'use client';

import { Activity } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function EmployeeActivityReportPage() {
  return <SectionPlaceholder eyebrow="Reports" title="Employee Activity Report" description="Detailed activity timelines, app usage, idle periods, and focus summaries for each employee." icon={Activity} metrics={[{ label: 'Employees Covered', value: '268', detail: 'All departments' }, { label: 'Activity Events', value: '48k', detail: 'Last 7 days' }, { label: 'Review Queue', value: '17', detail: 'Needs manager review' }]} />;
}
