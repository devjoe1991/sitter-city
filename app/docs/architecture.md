# Sitter City: System Architecture

## 1. High-Level Overview
Sitter City employs a modern web architecture centered around a Next.js frontend and the Supabase backend-as-a-service (BaaS) platform. This approach separates the presentation layer (frontend) from the backend logic and data, promoting scalability and faster development. The frontend is hosted on Vercel for optimal performance and deployment, while Supabase handles all backend concerns.

## 2. Component Breakdown
- **Frontend (Client):** A Next.js 14 application using the App Router. It is responsible for rendering all user interfaces, managing client-side state, and communicating with the Supabase backend.
- **Backend (Supabase):**
    - **Database (Postgres):** The single source of truth for all application data, including user profiles, nanny details, bookings, and availability. **Row Level Security (RLS)** is a core part of the security model, ensuring users can only access their own data.
    - **Authentication (Supabase Auth):** Manages all user and nanny sign-ups, logins, and session management. It issues JSON Web Tokens (JWTs) that are used to authenticate API requests.
    - **Storage (Supabase Storage):** Securely stores user-generated files like profile pictures and nanny verification documents, with access controlled by storage policies.
    - **Serverless Functions (Edge Functions):** Used for sensitive or complex business logic that should not run on the client, such as processing payments with Stripe, sending transactional emails, or performing admin-level tasks.

## 3. Data Flow Diagrams

### User/Nanny Authentication Flow
1.  A user or nanny visits the Sitter City website.
2.  They enter their credentials into the Next.js login/signup form.
3.  The Next.js client calls the Supabase Auth API to authenticate the user.
4.  Supabase Auth verifies the credentials and, if successful, returns a JWT to the client.
5.  The JWT is stored securely on the client and sent with every subsequent request to Supabase to access protected resources (database, storage).

### Booking and Payment Flow
1.  A **Parent** logs into the Next.js application.
2.  The parent searches for nannies. The client queries the Supabase **Postgres Database** directly, respecting RLS policies.
3.  The parent selects a nanny and a time slot and initiates a booking.
4.  The Next.js client calls a **Supabase Edge Function** named `create-payment-intent`.
5.  The Edge Function communicates with the **Stripe API** to create a payment intent for the booking amount.
6.  The Edge Function writes the pending booking details to the **Postgres Database** and returns the Stripe client secret to the Next.js frontend.
7.  The frontend uses the client secret to confirm the payment with Stripe.js.
8.  Upon successful payment confirmation from the user, Stripe sends a webhook notification back to a dedicated **Supabase Edge Function** (`stripe-webhook-handler`).
9.  This webhook handler verifies the event and updates the booking status in the **Postgres Database** from `pending` to `confirmed`. It also triggers notifications to the parent and nanny.

## 4. Technical Decisions
- **Row Level Security (RLS):** RLS in Supabase is a non-negotiable part of our architecture. It is the primary mechanism for data isolation between users. Policies will be written to ensure:
    - Users can only view and manage their own profiles and bookings.
    - Nannies can only view and manage their own profiles, availability, and accepted bookings.
    - Public nanny profiles are read-only for authenticated users.
- **Edge Functions for Business Logic:** All interactions with third-party services (like Stripe) and any logic that requires elevated privileges or must be hidden from the client will be encapsulated in Supabase Edge Functions. This creates a secure and maintainable backend layer.
- **Stateless Authentication:** The use of JWTs for authentication ensures the application is stateless, which is essential for serverless environments and horizontal scaling.