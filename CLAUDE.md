# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an auto repair service website called "Liberty Auto SLC" (previously Autofix) built with Next.js 14 using the App Router. It's a modern automotive service website template with multiple home page variants and service pages.

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
npm run lint:fix
```

## Project Structure

The project consists of two main directories:
- `documentation/` - Contains HTML/CSS/JS template files (legacy)
- `main-files/` - The main Next.js application

### Key Directories in main-files/

- `src/app/` - Next.js App Router pages and layouts
  - `(homes)/` - Different home page variants (home2, home3)
  - `about/`, `blogs/`, `contact/`, `projects/`, `faqs/` - Main pages
  - Dynamic routes: `blogs/[blogId]/`, `projects/[projectId]/`
- `src/components/` - React components organized by feature
  - `Home/`, `Home2/`, `Home3/` - Components for different home variants
  - `About/`, `Blogs/`, `Contact/`, `Footer/` - Feature-specific components
- `src/lib/` - Utility functions and shared logic
- `src/hooks/` - Custom React hooks
- `public/` - Static assets

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: 
  - Radix UI primitives (@radix-ui/react-*)
  - Custom components with class-variance-authority
- **Forms**: React Hook Form with Zod validation
- **Icons**: React Icons
- **Carousel**: Embla Carousel
- **Animations**: Framer Motion
- **State Management**: Zustand

## Architecture Patterns

1. **Component Organization**: Components are organized by feature/page (Home, About, Contact, etc.)
2. **Styling**: Uses Tailwind CSS with tailwind-merge for conditional classes
3. **Forms**: Implements React Hook Form with Zod schemas for validation
4. **Fonts**: Custom fonts (DM Sans for body, Orbitron for headers) loaded via Next.js font optimization
5. **Metadata**: Centralized metadata management in layout files
6. **Image Optimization**: Uses Next.js Image component with Sharp for optimization

## Important Notes

- The project uses ESLint for code quality with TypeScript and React plugins
- Prettier is configured for code formatting with Tailwind CSS plugin
- The site is themed around an auto repair service with customizable content
- Multiple home page layouts are available for different design preferences