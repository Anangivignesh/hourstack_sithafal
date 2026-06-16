import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import './globals.css';
import Loading from './loading';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: 'HOURSTACK - Employee Monitoring & Workforce Intelligence',
  description: 'Premium employee monitoring and workforce intelligence platform with real-time tracking, analytics, and reporting.',
  keywords: 'employee monitoring, time tracking, workforce intelligence, productivity analytics',
  openGraph: {
    title: 'HOURSTACK',
    description: 'Premium employee monitoring platform',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-white font-sans text-gray-900">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
