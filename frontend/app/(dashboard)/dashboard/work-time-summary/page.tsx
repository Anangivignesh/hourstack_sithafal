'use client';

import { Clock } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function WorkTimeSummaryPage() {
  return <SectionPlaceholder eyebrow="Dashboard" title="Work Time Summary" description="Summarize tracked hours, overtime, breaks, billable ratios, and payroll-ready work totals." icon={Clock} metrics={[{ label: 'Tracked Hours', value: '1,284h', detail: 'This cycle' }, { label: 'Overtime', value: '42h', detail: '12 approved' }, { label: 'Billable Ratio', value: '81%', detail: '+7% this month' }]} />;
}
