# Overview

This is a modern full-stack portfolio website for Safrin Bargana, a software developer specializing in MERN stack development. The application serves as a comprehensive showcase of projects, skills, and professional experience with a focus on elegant design and user engagement. Built with React, TypeScript, and Express.js, the portfolio features interactive animations, responsive design, and a professional presentation of technical expertise.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built as a Single Page Application (SPA) using React with TypeScript, leveraging modern development patterns and libraries:

- **Component Structure**: Organized into modular components following atomic design principles, with clear separation between UI components (`components/ui/`), feature components, and pages
- **Styling System**: Uses Tailwind CSS with shadcn/ui components for consistent design language, featuring CSS variables for theming and responsive design
- **Animation Framework**: Framer Motion provides smooth animations and micro-interactions throughout the portfolio
- **State Management**: TanStack Query handles server state management and caching, with local state managed through React hooks
- **Routing**: Wouter provides lightweight client-side routing for navigation between sections
- **Build System**: Vite handles development server, hot module replacement, and production builds with TypeScript compilation

## Backend Architecture

The backend follows a minimal Express.js architecture designed for extensibility:

- **Server Framework**: Express.js with TypeScript for type safety and modern JavaScript features
- **Storage Layer**: Abstract storage interface (`IStorage`) with in-memory implementation, designed to easily swap for database persistence
- **API Structure**: RESTful API design with `/api` prefix and centralized route registration
- **Development Tools**: Custom middleware for request logging and error handling, with Vite integration for seamless development experience

## Database Design

The application includes a PostgreSQL schema definition using Drizzle ORM:

- **User Schema**: Simple user model with UUID primary keys, username, and password fields
- **ORM Integration**: Drizzle provides type-safe database operations with automatic schema validation through Zod
- **Migration System**: Drizzle Kit handles database migrations and schema updates

## Component Architecture

The UI is built with a comprehensive design system:

- **shadcn/ui Components**: Full suite of accessible, customizable UI components including forms, dialogs, navigation, and data display elements
- **Custom Components**: Specialized portfolio components like ProjectCard, SkillBar, TechLogo with integrated animations
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts and interactions
- **Accessibility**: ARIA-compliant components with keyboard navigation and screen reader support

# External Dependencies

## Core Framework Dependencies
- **React 18**: Modern React with concurrent features and hooks
- **Express.js**: Minimal web framework for Node.js backend
- **TypeScript**: Static type checking across frontend and backend
- **Vite**: Fast build tool and development server with HMR

## Database and ORM
- **Drizzle ORM**: Type-safe PostgreSQL ORM with schema validation
- **Neon Database**: Serverless PostgreSQL database (via @neondatabase/serverless)
- **Drizzle Zod**: Schema validation integration between Drizzle and Zod

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Comprehensive React component library built on Radix UI
- **Radix UI**: Unstyled, accessible UI primitives (extensive component suite)
- **Framer Motion**: Animation library for smooth transitions and interactions

## State Management and Data Fetching
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Performant forms with validation
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries

## Development and Build Tools
- **Wouter**: Lightweight React router
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for constructing className strings
- **date-fns**: Modern date utility library

## Replit Integration
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error reporting in development

The architecture prioritizes type safety, developer experience, and maintainability while providing a solid foundation for a professional portfolio website with potential for future expansion into more complex features.