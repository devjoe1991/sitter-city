# Sitter City: Memory Bank

This document serves as a log of key decisions, learnings, and important context gathered throughout the Sitter City project. Its purpose is to provide a historical record for future team members and for referencing past decisions.

## Key Decisions Log

### 2025-07-02: Choice of Backend Technology
- **Decision:** Selected Supabase as the all-in-one Backend-as-a-Service (BaaS) platform.
- **Context:** The project requires a robust backend with a relational database, authentication, file storage, and serverless functions. We considered building a custom backend with Node.js/Express but faced a tight timeline for the MVP.
- **Reasoning:** Supabase provides all the necessary components out of the box, drastically reducing development time and infrastructure management overhead. Its deep integration with Postgres and focus on Row Level Security aligns perfectly with our need for a secure, multi-tenant platform. This choice allows the team to focus almost exclusively on frontend development and business logic, rather than boilerplate backend setup.
- **Alternative Considered:** Firebase. We chose Supabase due to our preference for a SQL database (Postgres) over a NoSQL one (Firestore), as our data (users, bookings) is highly relational.

*(This file will be updated as the project progresses)*