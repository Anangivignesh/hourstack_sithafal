import { NextRequest, NextResponse } from 'next/server';

// Mock report data
const mockReports = [
  {
    id: '1',
    title: 'Weekly Employee Activity Report',
    type: 'employee-activity',
    generatedAt: new Date(),
    period: { start: '2024-05-20', end: '2024-05-26' },
  },
  {
    id: '2',
    title: 'Productivity Analysis Report',
    type: 'productivity',
    generatedAt: new Date(),
    period: { start: '2024-05-20', end: '2024-05-26' },
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    let filtered = mockReports;

    if (type) {
      filtered = filtered.filter((report) => report.type === type);
    }

    return NextResponse.json({
      success: true,
      data: filtered,
      count: filtered.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch reports' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, type, period } = body;

    if (!title || !type || !period) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newReport = {
      id: String(mockReports.length + 1),
      title,
      type,
      generatedAt: new Date(),
      period,
    };

    mockReports.push(newReport);

    return NextResponse.json(
      { success: true, data: newReport },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create report' },
      { status: 500 }
    );
  }
}
