'use client';

import { BarChart3 } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function ProductivityReportPage() {
  return <SectionPlaceholder eyebrow="Reports" title="Productivity Report" description="Analyze productivity rates, focus quality, team comparisons, and performance trends." icon={BarChart3} metrics={[{ label: 'Avg Productivity', value: '88%', detail: '+3% vs last week' }, { label: 'High Performers', value: '42', detail: 'Above 90%' }, { label: 'Focus Delta', value: '+12%', detail: 'Month over month' }]} />;
}
