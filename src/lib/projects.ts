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
    description: "Real-time team collaboration platform unifying chat, voice/video, whiteboards, tasks & email into one ecosystem",
    longDescription: "Syncora is a modern, collaborative productivity platform that unifies real‑time communication and team workflows into a single ecosystem. It brings together chat, voice/video calls, notes, tasks, whiteboard, contacts, subscriptions, and email—powered by a robust Spring Boot backend and a high‑performance React + TypeScript frontend.",
    tech: ["Spring Boot 3.x", "React 18 + TypeScript", "Ably", "ZegoCloud", "PostgreSQL", "WebSockets", "Tailwind CSS", "Vite", "Java 17"],
    github: "https://github.com/AryanDevCodes/syncora",
    overview: "Syncora is designed for teams that need real‑time collaboration without context switching. The platform combines synchronous communication (chat, voice, video, whiteboard) with asynchronous productivity tools (notes, tasks, email, subscriptions) in a single, scalable system.",
    highlights: [
      "Real-time multi-user chat with low latency via Ably",
      "One-to-one voice communication using Ably signaling",
      "Live video conferencing via ZegoCloud SDK",
      "Collaborative whiteboard with Excalidraw-style UX",
      "Personal and shared notes & tasks modules",
      "Team member management and invitations",
      "Subscription plan management and usage tracking",
      "Schema-backed email functionality"
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
    problem: "Distributed teams struggle with fragmented communication tools, leading to context switching, missed messages, and reduced productivity. Existing solutions are either too expensive or lack seamless integration between communication and project management.",
    architecture: "The architecture follows a clean separation of concerns: Backend uses Spring Boot REST APIs, WebSockets, SQL schema management with optional HTTPS. Frontend is a React SPA with Vite, TypeScript, Tailwind CSS, and context‑driven state management.",
    challenges: [
      "Handling concurrent users with minimal latency across multiple communication channels",
      "Implementing secure multi-tenant workspace isolation",
      "Synchronizing state across real-time features without conflicts",
      "Integrating multiple third-party SDKs (Ably, ZegoCloud) seamlessly"
    ],
    learnings: [
      "Deep understanding of WebSocket protocols and real-time system design",
      "Production-grade JWT authentication and RBAC implementation",
      "Context-driven state management in large React applications",
      "Clean separation of concerns in full-stack architecture"
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
    title: "HRMS",
    description: "Enterprise-grade Human Resource Management System with payroll, attendance, and leave management",
    longDescription: "An enterprise-grade HR platform automating core HR processes including employee management, attendance tracking, payroll processing, leave approvals, and document management with role-based access control.",
    tech: ["Spring Boot", "React TypeScript", "PostgreSQL", "JWT", "Tailwind CSS"],
    github: "https://github.com/AryanDevCodes/hrms",
    highlights: [
      "Employee Self-Service Portal with comprehensive features",
      "Live attendance tracking with visual indicators",
      "Automated payroll processing with tax calculations",
      "Four-tier role hierarchy with granular permissions",
      "Document and expense management with uploads",
      "Automated email notifications for approvals and alerts"
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
    problem: "Small to medium enterprises lack affordable, comprehensive HR management solutions. Manual HR processes lead to errors in payroll, attendance discrepancies, and inefficient leave management.",
    architecture: "Monolithic Spring Boot application with clean layered architecture (Controller → Service → Repository). React frontend with TypeScript for type safety. PostgreSQL for relational data with optimized queries for reporting.",
    challenges: [
      "Designing flexible role hierarchy that scales with organizational complexity",
      "Implementing accurate payroll calculations with tax compliance",
      "Building audit logging for compliance and security requirements"
    ],
    learnings: [
      "Enterprise application design patterns and best practices",
      "Complex permission systems and audit trail implementation",
      "Integration of email notifications and document management"
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
