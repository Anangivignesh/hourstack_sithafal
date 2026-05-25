'use client';

import { Smartphone } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function MobileTrackingPage() {
  return <SectionPlaceholder eyebrow="Work Management" title="Mobile Tracking" description="Track mobile work sessions, check-ins, app activity, and remote employee workflows." icon={Smartphone} metrics={[{ label: 'Mobile Users', value: '128', detail: 'Synced today' }, { label: 'Check-ins', value: '342', detail: 'Geo-verified' }, { label: 'Offline Syncs', value: '19', detail: 'Recovered cleanly' }]} />;
}
