'use client';

import { Settings } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function AdministrationPage() {
  return (
    <SectionPlaceholder
      eyebrow="Administration"
      title="Administration Hub"
      description="Control employee management, attendance rules, project governance, permissions, and live monitoring."
      icon={Settings}
      metrics={[
        { label: 'Employees', value: '268', detail: '24 departments' },
        { label: 'System Health', value: '100%', detail: 'All services online' },
        { label: 'Open Reviews', value: '9', detail: 'Managers assigned' },
      ]}
    />
  );
}
