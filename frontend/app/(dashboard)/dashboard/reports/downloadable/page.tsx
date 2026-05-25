'use client';

import { Download } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function DownloadableReportsPage() {
  return <SectionPlaceholder eyebrow="Reports" title="Downloadable Reports" description="Export PDF, CSV, payroll, compliance, and client-ready report bundles." icon={Download} metrics={[{ label: 'Exports Ready', value: '36', detail: 'Generated today' }, { label: 'Scheduled', value: '14', detail: 'Auto-delivery enabled' }, { label: 'Formats', value: '5', detail: 'PDF, CSV, XLSX and more' }]} />;
}
