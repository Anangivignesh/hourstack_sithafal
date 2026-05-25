'use client';

import { TrendingUp } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function ProductivityPage() {
  return <SectionPlaceholder eyebrow="Dashboard" title="Productivity" description="Track productive time, focus trends, app usage, and team performance patterns." icon={TrendingUp} metrics={[{ label: 'Productivity Rate', value: '87%', detail: '+5% this week' }, { label: 'Focus Blocks', value: '146', detail: 'Across active teams' }, { label: 'Top Team', value: 'Design', detail: '94% focus score' }]} />;
}
