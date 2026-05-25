'use client';

import { ClipboardList } from 'lucide-react';
import { SectionPlaceholder } from '@/components/dashboard/SectionPlaceholder';

export default function ProjectTaskManagementPage() {
  return <SectionPlaceholder eyebrow="Administration" title="Project Management" description="Govern projects, task codes, client assignments, approvals, and billing structures." icon={ClipboardList} metrics={[{ label: 'Task Codes', value: '184', detail: '42 billable' }, { label: 'Approvals', value: '31', detail: 'Awaiting managers' }, { label: 'Budgets Watched', value: '27', detail: '3 near limit' }]} />;
}
