'use client';

import { TrendingUp } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function WorkforceAnalyticsPage() {
  return <SectionPlaceholder eyebrow="Work Management" title="Workforce Analytics" description="Forecast capacity, utilization, workload balance, and productivity across departments." icon={TrendingUp} metrics={[{ label: 'Capacity Index', value: '91%', detail: 'Balanced' }, { label: 'Utilization', value: '84%', detail: '+6% this month' }, { label: 'Forecast Risk', value: 'Low', detail: '3 teams watched' }]} />;
}
