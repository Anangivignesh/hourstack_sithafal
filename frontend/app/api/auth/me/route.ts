import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const users = {
  admin: {
    id: '1',
    email: 'admin@hourstack.com',
    name: 'Admin User',
    role: 'admin',
  },
  employee: {
    id: '2',
    email: 'employee@hourstack.com',
    name: 'Employee User',
    role: 'employee',
  },
} as const;

export async function GET() {
  const cookieStore = await cookies();
  const role = cookieStore.get('hourstack_session')?.value;

  if (role !== 'admin' && role !== 'employee') {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({
    authenticated: true,
    user: users[role],
  });
}
