import { NextRequest, NextResponse } from 'next/server';

// Mock time tracking data
const mockTimeEntries = [
  {
    id: '1',
    employeeId: '1',
    date: new Date(),
    startTime: new Date(Date.now() - 8 * 60 * 60 * 1000),
    endTime: null,
    duration: 480,
    type: 'work',
    projectId: '1',
  },
  {
    id: '2',
    employeeId: '2',
    date: new Date(Date.now() - 24 * 60 * 60 * 1000),
    startTime: new Date(Date.now() - 32 * 60 * 60 * 1000),
    endTime: new Date(Date.now() - 24 * 60 * 60 * 1000),
    duration: 480,
    type: 'work',
    projectId: '2',
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const employeeId = searchParams.get('employeeId');
    const date = searchParams.get('date');

    let filtered = mockTimeEntries;

    if (employeeId) {
      filtered = filtered.filter((entry) => entry.employeeId === employeeId);
    }

    if (date) {
      const filterDate = new Date(date);
      filtered = filtered.filter(
        (entry) =>
          entry.date.toDateString() === filterDate.toDateString()
      );
    }

    return NextResponse.json({
      success: true,
      data: filtered,
      count: filtered.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch time entries' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { employeeId, startTime, duration, type, projectId } = body;

    if (!employeeId || !startTime || !duration || !type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newEntry = {
      id: String(mockTimeEntries.length + 1),
      employeeId,
      date: new Date(),
      startTime: new Date(startTime),
      endTime: null,
      duration,
      type,
      projectId,
    };

    mockTimeEntries.push(newEntry);

    return NextResponse.json(
      { success: true, data: newEntry },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create time entry' },
      { status: 500 }
    );
  }
}
