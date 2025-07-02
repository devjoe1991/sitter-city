# Sitter City: Development Workflow

This document outlines the standard development processes, coding standards, and deployment strategy for the Sitter City project. All contributors must adhere to these guidelines.

## Git Workflow
We use a feature-branching workflow to keep the `main` branch stable and deployable at all times.

1.  **Branching:**
    - The `main` branch is the production branch. Direct pushes to `main` are forbidden.
    - All new work (features, bug fixes) must be done on a separate feature branch.
    - Branch names should be descriptive and reference the Task ID from `implementation-plan.md`.
    - **Format:** `feature/[TASK-ID]_[short-description]` (e.g., `feature/P1-T1_user-signup-form`).

2.  **Committing:**
    - Commit messages must follow the Conventional Commits specification.
    - **Format:** `type([TASK-ID]): [description]`
    - **Examples:**
        - `feat(P1-T1): Add email and password fields to signup form`
        - `fix(P2-T3): Correct alignment of nanny search cards on mobile`
        - `docs(prd): Update user persona details`

3.  **Pull Requests (PRs):**
    - When a feature is complete, open a Pull Request to merge the feature branch into `main`.
    - The PR description should summarize the changes and link to the relevant task in the implementation plan.
    - At least one other team member must review and approve the PR before it can be merged.

4.  **Merging:**
    - Use "Squash and Merge" in GitHub to combine all commits from the feature branch into a single, clean commit on the `main` branch. This keeps the `main` history tidy.

## Code Standards
- **Language:** All code must be written in TypeScript. Use strict mode.
- **Formatting:** Code is automatically formatted on save using Prettier.
- **Linting:** We use ESLint with recommended rules for React, Next.js, and TypeScript to enforce code quality. All linting errors must be fixed before committing.
- **Components:** All React components must be functional components using hooks.
- **Naming:**
    - Components: `PascalCase` (e.g., `NannyProfileCard.tsx`)
    - Functions/Variables: `camelCase` (e.g., `handleBookingRequest`)
- **Comments:** Add comments to explain complex logic, especially for business rules within Edge Functions or custom hooks.

## Deployment Process
- **Hosting:** The application is hosted on Vercel.
- **Environments:**
    - **Production:** `main` branch. Every merge to `main` automatically triggers a deployment to the live production URL.
    - **Preview:** Every Pull Request automatically generates a unique preview deployment. This allows for testing and reviewing changes in a live-like environment before merging.
- **Rollback Procedures:** In case of a critical issue in production, Vercel allows for instant rollbacks to a previous successful deployment through its dashboard.