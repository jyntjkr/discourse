# Discourse App

A platform for thoughtful, structured discussions around content from across the internet.

## Features

- Share and discuss content from across the web
- Structured replies with categories (agreement, counterpoint, question, expansion, resource)
- User authentication and profiles
- Tag-based organization

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Supabase (PostgreSQL, Authentication)
- **Styling:** shadcn/ui components

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account

### Setup Supabase

1. Create a new project on [Supabase](https://supabase.com)
2. Once your project is created, go to Project Settings > API to get your API keys
3. Create a `.env.local` file in the root of the project with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Go to the SQL Editor in your Supabase dashboard and run the SQL schema from `lib/db/schema.ts` (the commented SQL section)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `app/`: Next.js app router pages
- `components/`: React components
  - `ui/`: Reusable UI components
  - `discourse/`: Discourse-specific components
  - `layout/`: Layout components
- `lib/`: Utility functions and services
  - `db/`: Database schema and services
  - `metadata/`: Link metadata fetching utilities
- `hooks/`: Custom React hooks
- `public/`: Static assets

## Database Schema

The application uses the following tables:

- `users`: User profiles
- `discourses`: Discourse topics
- `replies`: User replies to discourses
- `tags`: Topic tags
- `discourse_tags`: Junction table for discourse-tag relationships

## Authentication

The application uses Supabase Authentication with email/password. Users can:

- Sign up with email, password, username, and full name
- Sign in with email and password
- Sign out

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
