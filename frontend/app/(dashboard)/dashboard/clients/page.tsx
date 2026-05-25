'use client';

import { Building2 } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function ClientsPage() {
  return (
    <SectionPlaceholder
      eyebrow="Clients"
      title="Client Portfolio"
      description="Manage client accounts, billing health, delivery utilization, and tracked work across every engagement."
      icon={Building2}
      metrics={[
        { label: 'Active Clients', value: '42', detail: '+6 this quarter' },
        { label: 'Billable Hours', value: '1,284h', detail: '91% approved' },
        { label: 'Revenue Protected', value: '$186k', detail: 'Through budget alerts' },
      ]}
    />
  );
}
