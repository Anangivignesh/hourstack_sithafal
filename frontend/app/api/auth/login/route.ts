import { NextRequest, NextResponse } from 'next/server';

// Demo users for testing
const DEMO_ADMIN = {
  email: 'admin@hourstack.com',
  password: 'admin123',
  name: 'Admin User',
  role: 'admin',
};

const DEMO_EMPLOYEE = {
  email: 'employee@hourstack.com',
  password: 'emp123',
  name: 'Employee User',
  role: 'employee',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, role } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Check demo credentials
    if (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password && (!role || role === 'admin')) {
      const response = NextResponse.json({
        success: true,
        user: {
          id: '1',
          email: DEMO_ADMIN.email,
          name: DEMO_ADMIN.name,
          role: DEMO_ADMIN.role,
        },
      });

      response.cookies.set('hourstack_session', 'admin', {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24,
        path: '/',
      });

      return response;
    }

    if (email === DEMO_EMPLOYEE.email && password === DEMO_EMPLOYEE.password && (!role || role === 'employee')) {
      const response = NextResponse.json({
        success: true,
        user: {
          id: '2',
          email: DEMO_EMPLOYEE.email,
          name: DEMO_EMPLOYEE.name,
          role: DEMO_EMPLOYEE.role,
        },
      });

      response.cookies.set('hourstack_session', 'employee', {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24,
        path: '/',
      });

      return response;
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
