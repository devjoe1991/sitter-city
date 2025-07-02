# Sitter City: Detailed Implementation Plan

**Project Repository:** https://github.com/your-username/sitter-city.git
**Branching Strategy:** Feature branches (`feature/[TASK-ID]`), pull requests to `main` for deployment.

## Instructions for AI Assistant:
1.  Read ALL documentation files in `/docs/` before starting any task.
2.  Execute tasks sequentially in the order listed within each phase.
3.  Mark completed tasks by changing the checkbox from `[ ]` to `[x]`.
4.  Add brief, relevant notes under the "Notes from Cursor" section for each task.
5.  Commit changes to Git after each individual task is completed. The commit message format is `feat(P0-T1): [description]`.

---

## Phase 0: Project Setup & Foundational Configuration
**Objective:** Establish the project structure, initialize all core services, and configure the development environment.
**Notes:** This phase is critical for a smooth development process. Ensure all environment variables are correctly set up in `.env.local`.

- [x] **P0-T1:** Initialize Next.js 14 project with TypeScript & Tailwind CSS.
  - **Notes from Cursor:**
- [x] **P0-T2:** Set up a new project in Supabase.
  - **Notes from Cursor:**
- [ ] **P0-T3:** Configure Supabase environment variables in the Next.js project.
  - **Notes from Cursor:**
- [ ] **P0-T4:** Set up Shadcn/UI and create a basic layout component.
  - **Notes from Cursor:**
- [ ] **P0-T5:** Initialize Git repository, create `main` branch, and push initial project.
  - **Notes from Cursor:**
- [ ] **P0-T6:** Create initial database schema in Supabase for `profiles`, `roles`, and `bookings` tables.
  - **Notes from Cursor:**

## Phase 1: Authentication & User Profiles
**Objective:** Implement a secure registration and login system for both parents and nannies, and build the core profile management features.
**Notes:** Pay close attention to setting up Supabase Row Level Security (RLS) policies for the `profiles` table.

- [ ] **P1-T1:** Build the user/nanny registration (sign-up) page and form.
  - **Notes from Cursor:**
- [ ] **P1-T2:** Implement sign-up logic using Supabase Auth client.
  - **Notes from Cursor:**
- [ ] **P1-T3:** Build the user/nanny login page and form.
  - **Notes from Cursor:**
- [ ] **P1-T4:** Implement login logic and session management using Supabase Auth.
  - **Notes from Cursor:**
- [ ] **P1-T5:** Create a basic profile page where users can view/edit their own data.
  - **Notes from Cursor:**
- [ ] **P1-T6:** Implement RLS policy on the `profiles` table to ensure users can only access their own profile.
  - **Notes from Cursor:**
- [ ] **P1-T7:** Build out the nanny-specific profile fields (e.g., bio, experience, hourly rate).
  - **Notes from Cursor:**

## Phase 2: Nanny Search & Public Profiles
**Objective:** Allow parents to search for nannies and view their public profiles.
**Notes:** The public profile should not display any sensitive information.

- [ ] **P2-T1:** Create a search page with filters for date and time.
  - **Notes from Cursor:**
- [ ] **P2-T2:** Implement the backend logic to query available nannies from Supabase.
  - **Notes from Cursor:**
- [ ] **P2-T3:** Display search results in a clean, user-friendly card format.
  - **Notes from Cursor:**
- [ ] **P2-T4:** Build the dynamic public profile page for nannies (`/nanny/[id]`).
  - **Notes from Cursor:**
- [ ] **P2-T5:** Implement RLS policy to allow any authenticated user to read public nanny profiles.
  - **Notes from Cursor:**

## Phase 3: Booking System & Dashboards
**Objective:** Build the end-to-end booking flow and create the dedicated dashboards for parents and nannies.
**Notes:** The booking flow involves state changes and interactions between both user roles.

- [ ] **P3-T1:** Add a "Request to Book" button on the nanny profile page.
  - **Notes from Cursor:**
- [ ] **P3-T2:** Create the database logic to insert a new `booking` with `pending` status.
  - **Notes from Cursor:**
- [ ] **P3-T3:** Build the Parent Dashboard to display upcoming and past bookings.
  - **Notes from Cursor:**
- [ ] **P3-T4:** Build the Nanny Dashboard to display booking requests and upcoming jobs.
  - **Notes from Cursor:**
- [ ] **P3-T5:** Implement the "Accept" and "Decline" logic for nannies on their dashboard.
  - **Notes from Cursor:**
- [ ] **P3-T6:** Implement RLS policies for the `bookings` table.
  - **Notes from Cursor:**

## Phase 4: Payment Integration with Stripe
**Objective:** Integrate Stripe to handle secure payments for all completed bookings.
**Notes:** This will involve creating Supabase Edge Functions to handle communication with the Stripe API securely.

- [ ] **P4-T1:** Set up a Stripe account and get API keys.
  - **Notes from Cursor:**
- [ ] **P4-T2:** Create a Supabase Edge Function `create-payment-intent`.
  - **Notes from Cursor:**
- [ ] **P4-T3:** Integrate Stripe Elements into the booking flow on the frontend.
  - **Notes from Cursor:**
- [ ] **P4-T4:** Call the Edge Function from the client to initiate payment when booking.
  - **Notes from Cursor:**
- [ ] **P4-T5:** Create a Supabase Edge Function `stripe-webhook-handler` to listen for `payment_succeeded` events.
  - **Notes from Cursor:**
- [ ] **P4-T6:** Implement logic in the webhook to update the booking status to `confirmed` and `paid`.
  - **Notes from Cursor:**