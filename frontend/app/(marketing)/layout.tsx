import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'HOURSTACK - Marketing',
  description: 'Workforce Intelligence Platform',
};

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
