'use client';

import { Activity } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function ActivityPage() {
  return <SectionPlaceholder eyebrow="Dashboard" title="Activity" description="Monitor employee activity, active windows, idle signals, and real-time work status." icon={Activity} metrics={[{ label: 'Active Now', value: '184', detail: '92% online' }, { label: 'Idle Alerts', value: '11', detail: 'Within threshold' }, { label: 'App Events', value: '12.8k', detail: 'Synced today' }]} />;
}
