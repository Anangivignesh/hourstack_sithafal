'use client';

import { Radio } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function LiveMonitoringPage() {
  return <SectionPlaceholder eyebrow="Administration" title="Live Monitoring" description="Observe live employee status, focus state, app context, screenshots, and alerts." icon={Radio} metrics={[{ label: 'Live Users', value: '184', detail: 'Online now' }, { label: 'Alerts', value: '12', detail: 'No critical issues' }, { label: 'Review Items', value: '26', detail: 'Assigned today' }]} />;
}
