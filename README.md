# Next.js 15 App Router: Unexpected Link Behavior in Nested Layouts

This repository demonstrates an unexpected behavior encountered when using the Next.js 15 App Router with links within nested layouts.  The issue involves links not functioning as expected, potentially resulting in incorrect navigation or page rendering.  This issue is particularly relevant to developers working with complex navigation structures within their Next.js applications.

## Reproduction

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the application and click on the links. Observe the unexpected behavior.

## Solution

The solution involves using the `useSearchParams` hook from Next.js and carefully adjusting the routing logic to ensure that the intended behavior is achieved.  This allows for better handling of route parameters and proper navigation across nested layouts.
