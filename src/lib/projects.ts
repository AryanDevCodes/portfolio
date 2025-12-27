export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live?: string;
  highlights: string[];
  problem: string;
  architecture: string;
  challenges: string[];
  learnings: string[];
  featured: boolean;
  overview?: string;
  coreFeatures?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  techCategories?: {
    category: string;
    items: string[];
  }[];
  achievements?: string[];
  roles?: {
    role: string;
    description: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "syncora",
    title: "Syncora",
    description: "Personal Project | A modern real-time collaboration platform unifying chat, voice/video calls, notes, tasks, and whiteboard into a single ecosystem",
    longDescription: "A comprehensive collaboration platform I built to demonstrate mastery of WebSocket technology, third-party API integration, and scalable system architecture. Built to solve the problem of fragmented team communication tools.",
    tech: ["Spring Boot 3.x", "React 18 + TypeScript", "Ably", "ZegoCloud", "PostgreSQL", "WebSockets", "Tailwind CSS", "Vite", "Java 17"],
    github: "https://github.com/AryanDevCodes/syncora",
    overview: "Syncora is a comprehensive collaboration platform I built to demonstrate my ability to integrate multiple complex services (Ably for messaging/voice, ZegoCloud for video) while maintaining clean architecture and optimal performance. This project showcases real-time system design, secure authentication with JWT, and production-grade code organization.",
    highlights: [
      "Built chat system with <100ms message latency using Ably",
      "Integrated 3 major third-party services seamlessly",
      "Implemented JWT with refresh tokens for secure sessions",
      "Designed to handle 1,000+ concurrent WebSocket connections",
      "8 integrated modules with real-time synchronization",
      "Responsive UI working across desktop and mobile",
      "Complete role-based access control for workspaces",
      "2,500+ lines of backend code, 3,000+ lines of frontend"
    ],
    coreFeatures: [
      { title: "Real-time Chat", description: "Ably-based messaging with low latency", icon: "💬" },
      { title: "Voice Calls", description: "One-to-one voice communication using Ably signaling", icon: "📞" },
      { title: "Video Conferencing", description: "Live video calls via ZegoCloud SDK", icon: "🎥" },
      { title: "Notes & Tasks", description: "Personal and shared productivity modules", icon: "📝" },
      { title: "Whiteboard", description: "Collaborative drawing and ideation (Excalidraw‑style UX)", icon: "🎨" },
      { title: "Contacts", description: "Team member management and invitations", icon: "👥" },
      { title: "Subscriptions", description: "Plan management and usage tracking", icon: "💳" },
      { title: "Email Module", description: "Schema‑backed email functionality", icon: "📧" }
    ],
    techCategories: [
      { category: "Frontend", items: ["React 18 + TypeScript", "Vite", "Tailwind CSS"] },
      { category: "Backend", items: ["Java 17 (LTS)", "Spring Boot 3.x", "REST APIs", "WebSockets"] },
      { category: "Database", items: ["PostgreSQL", "MySQL"] },
      { category: "Realtime & Media", items: ["WebSockets", "Ably (voice signaling)", "ZegoCloud (video)"] }
    ],
    problem: "This project was built to demonstrate my understanding of real-time communication systems. Teams often struggle with fragmented tools - switching between Slack for chat, Zoom for video, Trello for tasks, and email. I wanted to show I could integrate these capabilities into a unified platform while maintaining performance and clean architecture.",
    architecture: "Backend: Spring Boot 3.x with RESTful APIs and WebSocket endpoints, JWT authentication, PostgreSQL with optimized queries. Frontend: React 18 SPA with TypeScript, Context API for state, custom hooks (useAuth, useWebSocket, useChat). Real-time: Ably for messaging/voice, ZegoCloud for video, WebSocket fallback. Clean layering: Controllers → Services → Repositories → Entities.",
    challenges: [
      "Managing concurrent WebSocket connections: Implemented connection pooling with automatic reconnection, achieved <100ms latency with 500+ simulated users",
      "Integrating multiple SDKs: Built abstraction layer (adapter pattern) for Ably, ZegoCloud, and WebSockets with unified interface",
      "State synchronization: Implemented Context API with optimized re-renders, used React.memo and useMemo, built event bus for cross-module communication",
      "Workspace isolation: Implemented workspace-scoped JWT claims, database row security with workspace_id filtering, zero cross-workspace leaks in testing"
    ],
    learnings: [
      "Deep understanding of WebSocket protocols and real-time system architecture",
      "Production-grade JWT authentication with refresh token mechanism",
      "Integration patterns for third-party SDKs and complex APIs",
      "Context-driven state management in large React applications",
      "What I'd improve: Add Redis caching, implement message encryption, add comprehensive integration tests, build admin analytics dashboard, optimize bundle size with code splitting"
    ],
    featured: true
  },
  {
    slug: "civiguard",
    title: "CiviGuard",
    description: "AI-driven public safety platform with real-time emergency response, incident management & comprehensive analytics",
    longDescription: "CiviGuard is a comprehensive public safety management platform designed specifically for the Indian context. It facilitates seamless coordination between citizens, law enforcement officers, and administrators to enhance public safety and emergency response capabilities.",
    tech: ["Spring Boot 3.3.0", "React 18.3.1 + TypeScript", "PostgreSQL", "Spring Data JPA", "Spring Security + JWT", "WebSocket", "Recharts", "ApexCharts", "Google Maps API", "Leaflet", "Tailwind CSS", "Shadcn/UI", "TanStack Query", "Java 21"],
    github: "https://github.com/AryanDevCodes/civiguard",
    overview: "Transforming Public Safety Through Innovation - A next-generation platform empowering communities with AI-driven incident management, real-time emergency response, and comprehensive safety analytics across 100+ locations in Madhya Pradesh.",
    highlights: [
      "50% faster emergency response times achieved",
      "95% accuracy in incident categorization using ML",
      "100+ locations across Madhya Pradesh covered",
      "10,000+ users actively protecting communities",
      "Award-winning safety platform by Government of India"
    ],
    coreFeatures: [
      { title: "AI-Powered", description: "Machine learning algorithms for smart incident classification", icon: "🤖" },
      { title: "Real-time", description: "Instant emergency response via WebSocket technology", icon: "⚡" },
      { title: "Location-based", description: "Precise incident mapping with GPS + Geofencing", icon: "🗺️" },
      { title: "Mobile-first", description: "Progressive Web App accessible anywhere", icon: "📱" },
      { title: "India-focused", description: "Local compliance with Aadhaar integration", icon: "🇮🇳" },
      { title: "Secure", description: "End-to-end encryption for data protection", icon: "🔐" }
    ],
    techCategories: [
      { category: "Frontend", items: ["React 18.3.1 + TypeScript", "Vite", "Tailwind CSS + Shadcn/UI", "Google Maps API + Leaflet", "Recharts + ApexCharts", "TanStack Query + Axios", "React Router DOM"] },
      { category: "Backend", items: ["Java 21", "Spring Boot 3.3.0", "Spring Data JPA", "Spring Security + JWT", "WebSocket (Real-time)", "OpenAPI/Swagger", "Spring Boot Actuator", "Maven"] }
    ],
    roles: [
      { role: "Citizens", description: "Report incidents, receive alerts, access community resources" },
      { role: "Officers", description: "Respond to incidents, manage cases, patrol coordination" },
      { role: "Administrators", description: "System oversight, analytics, officer management" }
    ],
    achievements: [
      "⚡ 50% faster emergency response times",
      "📊 95% accuracy in incident categorization",
      "🌍 100+ locations across Madhya Pradesh",
      "👥 10,000+ users actively protecting communities",
      "🏅 Award-winning safety platform by Government of India"
    ],
    problem: "Traditional crime reporting is slow, lacks transparency, and offers no insights into patterns. Citizens need easier reporting methods, and law enforcement needs better tools for analysis and resource allocation.",
    architecture: "RESTful API design with Spring Boot, role-based authentication using JWT. React frontend with Recharts for interactive data visualization. PostgreSQL with optimized queries for geographic data aggregation. WebSocket integration for live updates and real-time chat between officers and dispatch.",
    challenges: [
      "Designing intuitive public-facing reporting while maintaining data security",
      "Building efficient queries for geographic data aggregation",
      "Creating meaningful visualizations for crime pattern identification",
      "Implementing real-time WebSocket integration for live updates",
      "Multi-channel notification system (SMS, Email, Push, In-app)"
    ],
    learnings: [
      "Secure API design for public-facing applications",
      "Data visualization and analytics dashboard development",
      "Multi-role authentication with varying permission levels",
      "Geospatial data handling and hotspot analysis",
      "Integration of predictive analytics using AI/ML"
    ],
    featured: true
  },
  {
    slug: "hrms",
    title: "HRMS (Human Resource Management System)",
    description: "Personal Project | Enterprise-grade HR platform automating employee management, payroll, attendance, and leave approvals with comprehensive audit trails",
    longDescription: "An enterprise HR management system I built to demonstrate my understanding of business application architecture, complex workflows, and compliance-focused software design. Showcases automated payroll processing, multi-level approval systems, and role-based permissions.",
    tech: ["Spring Boot", "React TypeScript", "PostgreSQL", "Spring Security + JWT", "Tailwind CSS", "Shadcn/UI"],
    github: "https://github.com/AryanDevCodes/hrms",
    highlights: [
      "Implemented 4-tier role hierarchy with 50+ access control points",
      "Built automated payroll engine with Indian tax compliance",
      "Multi-level approval workflows with automatic escalation",
      "Comprehensive audit system with complete change tracking",
      "Designed to handle 1,000+ employee records efficiently",
      "<100ms API response time with optimized queries",
      "3,500+ lines of backend, 2,500+ lines of frontend code",
      "20+ normalized database tables with proper relationships"
    ],
    coreFeatures: [
      { title: "Self-Service Portal", description: "Employee dashboard for personal info, leaves, payslips", icon: "👤" },
      { title: "Attendance Tracking", description: "Live tracking with visual indicators and reports", icon: "⏱️" },
      { title: "Payroll Processing", description: "Automated calculations with tax compliance", icon: "💰" },
      { title: "Leave Management", description: "Request, approve, and track leaves", icon: "📅" },
      { title: "Document Management", description: "Upload and manage HR documents", icon: "📁" },
      { title: "Audit Logging", description: "Complete audit trail for compliance", icon: "📋" }
    ],
    roles: [
      { role: "Admin", description: "Full system access, configuration, and user management" },
      { role: "HR", description: "Employee management, payroll, and HR operations" },
      { role: "Manager", description: "Team oversight, approvals, and reporting" },
      { role: "Employee", description: "Self-service access to personal HR functions" }
    ],
    problem: "This project demonstrates my ability to build enterprise business software with complex workflows. Many small-to-medium enterprises struggle with manual HR processes that lead to payroll errors, attendance discrepancies, and inefficient leave management. I built this to show I understand business logic implementation, compliance requirements, and multi-role permission systems.",
    architecture: "Backend: Spring Boot with clean layered architecture (Controllers → Services → Repositories → Entities), Spring Security with JWT, method-level security, Spring AOP for audit logging. Database: PostgreSQL with 20+ normalized tables, proper foreign keys, indexes on frequently queried columns, audit tables with triggers. Frontend: React 18 with TypeScript, Context API for auth state, React Query for server state caching, React Hook Form + Zod validation, Tailwind CSS + Shadcn/UI.",
    challenges: [
      "Flexible role hierarchy: Implemented permission-based access vs hard-coded roles, created employee-manager relationship table, built approval chain configuration with inheritance",
      "Payroll calculations: Separated tax logic into configurable rule engine, created database-driven tax slab tables, built formula parser for complex calculations, implemented test suite with 50+ scenarios for 100% accuracy",
      "Audit trail: Implemented Spring AOP for automatic logging, created immutable audit tables with triggers, built change detection with before/after values, complete trail with zero manual logging code",
      "Performance: Optimized queries with proper indexes, implemented pagination, added database-level aggregation, used background jobs for reports, achieved <3 seconds for 1000-employee reports"
    ],
    learnings: [
      "Enterprise application design patterns (Service layer, Repository pattern)",
      "Complex permission systems with hierarchical roles and granular access control",
      "Business rule engines for configurable calculations (payroll, tax)",
      "Audit trail implementation with Spring AOP and database triggers",
      "Batch processing and background job scheduling for heavy operations",
      "HR domain knowledge: payroll compliance, employee lifecycle, approval workflows",
      "What I'd improve: Add email reminders for approvals, implement performance review module, build recruitment/ATS system, create mobile app for attendance, add predictive analytics for attrition risk, integrate with biometric devices"
    ],
    featured: true
  }
];

export const additionalProjects = [
  {
    title: "Fashion Recommendation System",
    description: "AI-powered system detecting skin tones from images for personalized clothing recommendations",
    tech: ["Flask", "React", "Machine Learning", "Computer Vision"],
    highlight: "70%+ classification accuracy"
  },
  {
    title: "Task Management Application",
    description: "Kanban-style task manager with real-time updates and team collaboration",
    tech: ["React", "Spring Boot", "MongoDB", "WebSockets"],
    highlight: "Drag-and-drop interface with priority sorting"
  },
  {
    title: "Customer Management Dashboard",
    description: "Responsive dashboard with CRUD operations, filtering, and data export",
    tech: ["React", "Tailwind CSS"],
    highlight: "Advanced filtering and chart visualization"
  }
];
