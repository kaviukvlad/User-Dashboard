# React / Next.js — Technical Assignment

## Estimated time
⏱ **2–4 hours**

---

## Goal
The goal of this assignment is to assess your practical knowledge of **React**, **TypeScript**, and **Next.js**, as well as your understanding of component architecture, state management, and rendering behavior.

We are not evaluating visual design.  
We are primarily interested in **code structure, clarity, and decision-making**.

---

## Tech Stack Requirements

### Mandatory
- Next.js **13+**
- React **18+**
- TypeScript
- Functional components and hooks only

### Allowed (optional)
- App Router or Pages Router
- React Query / SWR
- React Hook Form
- Zustand / Redux Toolkit
- Any UI solution (or none)

### Not allowed
- Class components
- Heavy starter templates or admin dashboards

---

## Data Source

You may use:
- https://jsonplaceholder.typicode.com/users  
- Or a local mocked API

---

## Functional Requirements

### 1. Users Page

Create a page that displays a list of users with:
- Name
- Email
- City
- **Edit** action

Requirements:
- Proper TypeScript types
- Stable list keys
- Logical component breakdown

---

### 2. Filtering

Implement:
- Search by **name**
- Filter by **city**

Requirements:
- Client-side filtering only
- Filtering logic must not be inside JSX
- Avoid unnecessary re-renders

---

### 3. Edit User

When clicking **Edit**:
- Open a form (modal / inline / separate section)
- Allow editing:
  - Name
  - Email
  - City
- On submit, update the user locally

Requirements:
- Controlled inputs
- Email validation
- Clear form responsibility

---

### 4. Next.js Specific Requirements

Please demonstrate basic Next.js usage:
- Data fetching using:
  - `fetch` in a Server Component **or**
  - Client-side fetching with hooks
- Clear separation between server and client components (if using App Router)
- Proper usage of `"use client"` where required

You do **not** need to implement SSR optimizations unless you want to.

---

## Architecture & Code Quality

Minimum expectations:
- Separation of UI, logic, and state
- No business logic directly in JSX
- Reasonable folder structure

---

## Code Comments (Mandatory)

⚠️ **Important requirement**

Please add **comments throughout the code**, explaining:
- What each component is responsible for
- Why specific hooks or patterns are used
- How data flows between components
- Any Next.js–specific decisions (server vs client components)

The goal is to understand **your reasoning**, not just the final result.

---

## Optional (Nice to Have ⭐)

Not required, but considered a plus:
- Debounced search
- Custom hooks (e.g. `useUsers`)
- Rendering optimizations (`React.memo`, `useMemo`)
- Loading and error states
- Abortable requests

---

## Submission

Please provide:
- GitHub repository link
- A `README.md` containing:
  - How to run the project
  - Short explanation of the architecture
  - What you would improve in a production setup

---

## Evaluation Criteria

We will evaluate:
- React fundamentals
- Next.js basics and mental model
- TypeScript usage
- State and rendering management
- Code readability and comments
- Ability to explain trade-offs

---

## Notes

This assignment is intentionally small in scope.  
If something feels overengineered — explain your reasoning instead.

Good luck! 🚀
