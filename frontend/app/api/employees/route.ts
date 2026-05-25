import { NextRequest, NextResponse } from 'next/server';

// Mock employee data
const mockEmployees = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    department: 'Development',
    role: 'Developer',
    status: 'active',
  },
  {
    id: '2',
    name: 'Sarah Smith',
    email: 'sarah@example.com',
    department: 'Design',
    role: 'Designer',
    status: 'active',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    department: 'Management',
    role: 'Manager',
    status: 'idle',
  },
];

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: mockEmployees,
      count: mockEmployees.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch employees' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, department, role } = body;

    if (!name || !email || !department || !role) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newEmployee = {
      id: String(mockEmployees.length + 1),
      name,
      email,
      department,
      role,
      status: 'active',
    };

    mockEmployees.push(newEmployee);

    return NextResponse.json(
      { success: true, data: newEmployee },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create employee' },
      { status: 500 }
    );
  }
}
