import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="w-full max-w-4xl p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-1/3 rounded-md bg-gray-200/40" />
          <div className="h-6 w-1/4 rounded-md bg-gray-200/30" />
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="h-40 rounded-md bg-gray-200/20" />
            <div className="h-40 rounded-md bg-gray-200/20" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="h-24 rounded-md bg-gray-200/10" />
            <div className="h-24 rounded-md bg-gray-200/10" />
            <div className="h-24 rounded-md bg-gray-200/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
