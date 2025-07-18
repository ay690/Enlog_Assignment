# BizLink Dashboard

A modern, responsive CRM dashboard application built with React, TypeScript, and Tailwind CSS. Features customer pipeline management, analytics, team collaboration, and project tracking.

## 🚀 Deployment Link:

https://enlog-assignment-five.vercel.app/

## ✨ Features

### 📊 Analytics Dashboard
- **Customer Metrics**: Track new customers with interactive bar charts
- **Success Rate**: Visual circular progress indicators for deal success rates
- **Task Management**: Monitor tasks in progress with real-time updates
- **Revenue Tracking**: Track prepayments and financial metrics

### 🎯 Customer Pipeline
- **Kanban Board**: Customer cards across deal stages
- **Deal Stages**: Contacted → Negotiation → Offer Sent → Deal Closed
- **Customer Details**: Contact information, attachments, and comments
- **Team Assignment**: Assign customers to team members

### 👥 Team Management
- **Member Profiles**: View team member roles and responsibilities
- **Project Tracking**: Monitor project progress with counters
- **Collaboration Tools**: Comments and attachment tracking

### 🔍 Advanced Search & Filtering
- **Real-time Search**: Instant customer search functionality
- **Smart Filters**: Filter by stage, date, assigned member
- **Sorting Options**: Sort by various criteria

## 🚀 Tech Stack

### Frontend
- **React 19+** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with full IntelliSense
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Smooth animations and micro-interactions

### State Management
- **Redux Toolkit** - Efficient Redux with modern patterns
- **React Redux** - Official React bindings for Redux
- **RTK Query** - Data fetching and caching solution

### Routing & Navigation
- **React Router v6** - Declarative routing for React applications

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing with Autoprefixer

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/ay690/Enlog_Assignment.git
   cd Enlog_Assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Dashboard/       # Dashboard-specific components
│   │   ├── StatsCard.tsx
│   │   ├── NewCustomersChart.tsx
│   │   ├── CircularProgress.tsx
│   │   ├── CustomerCard.tsx
│   │   └── PipelineBoard.tsx
│   └── Layout/          # Layout components
│       ├── Sidebar.tsx
│       └── Header.tsx
├── pages/               # Page components
│   ├── Dashboard.tsx
│   ├── Tasks.tsx
│   ├── Activity.tsx
│   ├── Customers.tsx
│   └── Settings.tsx
├── store/               # Redux store configuration
│   ├── index.ts
│   └── slices/
│       ├── dashboardSlice.ts
│       ├── customersSlice.ts
│       └── userSlice.ts
├── types/               # TypeScript type definitions
│   └── index.ts
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary**: `#111827` (Gray-900)
- **Secondary**: `#6B7280` (Gray-500)
- **Background**: `#F9FAFB` (Gray-50)
- **Surface**: `#FFFFFF` (White)
- **Accent**: `#3B82F6` (Blue-500)

### Typography
- **Headings**: Inter font family, various weights
- **Body**: System font stack with fallbacks
- **Code**: Monospace font family

### Spacing
- **Base Unit**: 4px (0.25rem)
- **Grid System**: 8px increments
- **Container**: Max-width with responsive padding

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Extended color palette
- Custom font families
- Responsive breakpoints
- Animation utilities

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile Features
- Collapsible sidebar navigation
- Touch-friendly interactions
- Optimized card layouts
- Responsive typography scaling

## 🎭 Animations

Powered by Framer Motion for smooth, performant animations:

### Page Transitions
- Fade in/out effects
- Slide transitions between routes
- Stagger animations for lists

### Micro-interactions
- Hover effects on cards and buttons
- Loading states with skeleton screens
- Smooth state transitions

### Performance
- Hardware-accelerated animations
- Reduced motion support
- Optimized re-renders
