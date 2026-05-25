import { NextRequest, NextResponse } from 'next/server';

// Mock projects data
const mockProjects = [
  {
    id: '1',
    name: 'Website Redesign',
    status: 'in-progress',
    progress: 65,
    startDate: '2024-01-15',
    deadline: '2024-03-30',
    team: 5,
    githubUrl: 'https://github.com/example/website-redesign',
  },
  {
    id: '2',
    name: 'Mobile App v2.0',
    status: 'in-progress',
    progress: 45,
    startDate: '2024-02-01',
    deadline: '2024-04-15',
    team: 8,
    githubUrl: 'https://github.com/example/mobile-app',
  },
  {
    id: '3',
    name: 'API Integration',
    status: 'completed',
    progress: 100,
    startDate: '2024-01-01',
    deadline: '2024-02-28',
    team: 3,
    githubUrl: 'https://github.com/example/api-integration',
  },
];

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: mockProjects,
      count: mockProjects.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, status, startDate, deadline, githubUrl } = body;

    if (!name || !startDate || !deadline) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newProject = {
      id: String(mockProjects.length + 1),
      name,
      status: status || 'planning',
      progress: 0,
      startDate,
      deadline,
      team: 0,
      githubUrl,
    };

    mockProjects.push(newProject);

    return NextResponse.json(
      { success: true, data: newProject },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
