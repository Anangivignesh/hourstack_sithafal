# HOURSTACK - Premium Employee Monitoring & Workforce Intelligence Platform

![HOURSTACK](https://img.shields.io/badge/HOURSTACK-Premium%20SaaS-blueviolet)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06b6d4)
![License](https://img.shields.io/badge/License-MIT-green)

**HOURSTACK** is an ultra-premium, production-ready clone of employee monitoring platforms like TimeChamp. It's built with cutting-edge technology and features a premium, futuristic UI design inspired by top SaaS products.

## ✨ Features

### Core Features

- **Real-Time Monitoring** - Live tracking of employee activities and productivity
- **Time Tracking** - Automatic time tracking with manual override capabilities
- **Automated Screenshots** - Intelligent screenshot capture with privacy controls
- **Activity Monitoring** - Keyboard, mouse, and app usage tracking
- **Productivity Analytics** - Advanced charts and productivity metrics
- **Project Management** - Assign and manage projects with team members
- **Employee Management** - Admin controls for employee lifecycle
- **Attendance Tracking** - Automatic check-in/out with compliance reporting
- **Real-Time Reports** - Generate comprehensive reports on-demand
- **Data Loss Prevention** - Sensitive data protection and security
- **Field Staff Tracking** - GPS tracking for mobile employees

### Premium UI/UX

- **Glassmorphism Design** - Frosted glass cards with backdrop blur
- **Bento Grid Layout** - Modern, organized component arrangement
- **Animated Interactions** - Smooth micro-animations with Framer Motion
- **Spotlight Effects** - Interactive hover effects
- **3D Transforms** - Parallax and 3D hover effects
- **Gradient Animations** - Animated gradient borders and backgrounds
- **Dark/Light Modes** - Full theme support (Light theme optimized)
- **Responsive Design** - Mobile, tablet, and desktop optimization

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 10.16 + GSAP 3.12
- **UI Components**: shadcn/ui, Aceternity UI, Magic UI
- **Charts**: Recharts 2.10, Tremor 3.12
- **Icons**: Lucide React 0.292
- **Form**: React Hook Form 7.48 + Zod 3.22
- **State Management**: Zustand 4.4

### Backend

- **API**: Next.js API Routes
- **Database**: PostgreSQL
- **ORM**: Prisma 5.7
- **Authentication**: NextAuth.js 4.24
- **Real-time**: Socket.io 4.7

### Desktop Agent

- **Framework**: Electron.js 27
- **Renderer**: React with Next.js components
- **Tracking**: Custom screenshot, keyboard, mouse, app, idle trackers

## 📁 Project Structure

```
HOURSTACK/
├── frontend/                           # Next.js 15 Application
│   ├── app/
│   │   ├── (marketing)/               # Landing page
│   │   ├── (auth)/                    # Login/Auth pages
│   │   ├── (dashboard)/               # Main dashboard
│   │   │   ├── dashboard/            # Dashboard sections
│   │   │   ├── projects/             # Projects page
│   │   │   ├── clients/              # Clients management
│   │   │   ├── reports/              # Reports section
│   │   │   ├── work-management/      # Work management tools
│   │   │   └── administration/       # Admin panel
│   │   └── api/                       # API routes
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components
│   │   ├── dashboard/                # Dashboard components
│   │   ├── common/                   # Shared components
│   │   └── monitoring/               # Monitoring components
│   ├── hooks/                        # Custom React hooks
│   ├── store/                        # Zustand stores
│   ├── types/                        # TypeScript types
│   └── lib/                          # Utilities and helpers
├── electron-agent/                    # Electron Desktop App
│   ├── src/
│   │   ├── main/                    # Electron main process
│   │   ├── preload/                 # IPC preload
│   │   ├── renderer/                # React renderer
│   │   └── trackers/                # Activity trackers
│   └── package.json
├── prisma/
│   └── schema.prisma                # Database schema
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/HOURSTACK.git
cd HOURSTACK
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment**

```bash
cp .env.example .env.local
# Update DATABASE_URL and other secrets in .env.local
```

4. **Setup database**

```bash
npx prisma migrate dev
npx prisma db seed  # Optional: seed demo data
```

5. **Run development server**

```bash
npm run dev
```

6. **Open in browser**

```
http://localhost:3000
```

### Demo Credentials

**Admin Account:**

- Email: `admin@hourstack.com`
- Password: `admin123`

**Employee Account:**

- Email: `employee@hourstack.com`
- Password: `emp123`

## 🎨 Design System

### Color Palette

- **Primary**: Blue (#3b82f6)
- **Secondary**: Purple (#a855f7)
- **Accent**: Pink (#ec4899)
- **Success**: Green (#22c55e)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### Typography

- **Font**: Inter (sans-serif)
- **Monospace**: Fira Code
- **Sizes**: Scale from 12px to 48px

### Components

- **Buttons**: Primary, Secondary, Outline, Gradient
- **Cards**: Glass, Elevated, Flat
- **Inputs**: Text, Email, Password, Textarea
- **Modals**: Centered, Slide-in, Full-screen
- **Tables**: Standard, Sortable, Filterable

## 📊 Dashboard Sections

### 1. Dashboard

- Real-time overview of team status
- Key metrics and KPIs
- Activity feed
- Productivity charts
- Work time summary

### 2. Time Tracker

- Manual time tracking
- Project-based tracking
- Break management
- Attendance records
- Work schedule

### 3. Projects

- Bento grid project cards
- Project status tracking
- Team member assignment
- Progress visualization
- GitHub integration

### 4. Clients

- Client management
- Active projects per client
- Contact information
- Team allocation

### 5. Reports

- Employee activity reports
- Productivity reports
- Attendance reports
- PDF export functionality
- Custom date ranges

### 6. Work Management

- Workforce analytics
- Employee monitoring
- Data loss prevention
- Field staff tracking
- Mobile tracking

### 7. Administration

- Employee management
- Attendance tracking
- Project assignment
- Live monitoring
- System settings

## 🔐 Security Features

- **Encryption**: All data encrypted in transit and at rest
- **Authentication**: NextAuth.js with JWT tokens
- **Authorization**: Role-based access control (RBAC)
- **Data Privacy**: PII blurring in screenshots
- **Compliance**: GDPR, CCPA ready
- **Audit Logs**: All actions logged for compliance

## 📱 Responsive Design

- **Mobile**: Optimized for smartphones (320px+)
- **Tablet**: Full functionality on tablets (768px+)
- **Desktop**: Premium experience on desktops (1024px+)
- **Large Screens**: Enhanced layouts for 4K displays

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```bash
docker build -t hourstack .
docker run -p 3000:3000 hourstack
```

### Self-Hosted

```bash
npm run build
npm start
```

## 📚 API Documentation

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/session` - Get current session

### Employees

- `GET /api/employees` - List all employees
- `POST /api/employees` - Create employee
- `PUT /api/employees/:id` - Update employee
- `DELETE /api/employees/:id` - Delete employee

### Time Tracking

- `GET /api/tracking` - Get time entries
- `POST /api/tracking` - Create time entry
- `PUT /api/tracking/:id` - Update time entry

### Projects

- `GET /api/projects` - List projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project

### Reports

- `GET /api/reports` - Get reports
- `POST /api/reports` - Generate report
- `GET /api/reports/:id/download` - Download report

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by TimeChamp.io, Linear.app, Vercel, and Arc
- Built with modern web technologies
- Premium UI design patterns from top SaaS products

## 📧 Contact & Support

- **Email**: support@hourstack.com
- **Website**: https://hourstack.com
- **Twitter**: @hourstack
- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions

## 🗓️ Roadmap

- [ ] AI-powered productivity insights
- [ ] Advanced machine learning predictions
- [ ] Mobile app (React Native)
- [ ] Slack integration
- [ ] Teams integration
- [ ] Advanced security features
- [ ] Multi-language support
- [ ] Custom branding

---

**Built with ❤️ for modern enterprises**
