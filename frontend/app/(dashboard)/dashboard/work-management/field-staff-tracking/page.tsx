'use client';

import { MapPin } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function FieldStaffTrackingPage() {
  return <SectionPlaceholder eyebrow="Work Management" title="Field Staff Tracking" description="Coordinate field attendance, location check-ins, route visibility, and assignment coverage." icon={MapPin} metrics={[{ label: 'Field Staff', value: '72', detail: '58 active now' }, { label: 'Visits Today', value: '214', detail: '92% completed' }, { label: 'Coverage', value: '96%', detail: 'Healthy routes' }]} />;
}
