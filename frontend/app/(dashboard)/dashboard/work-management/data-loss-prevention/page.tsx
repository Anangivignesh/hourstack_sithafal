'use client';

import { Shield } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function DataLossPreventionPage() {
  return <SectionPlaceholder eyebrow="Work Management" title="Data Loss Prevention" description="Protect sensitive data with policy events, app controls, audit trails, and risk signals." icon={Shield} metrics={[{ label: 'Threats Blocked', value: '18', detail: 'This week' }, { label: 'Risk Score', value: 'Low', detail: 'No critical events' }, { label: 'Policies Active', value: '27', detail: 'Across teams' }]} />;
}
