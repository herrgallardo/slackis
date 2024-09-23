# Slack Clone (Proof of Concept)

This project is a **Slack Clone** built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. It's an early-stage, proof-of-concept application demonstrating basic features inspired by Slack's interface and functionality.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Project Structure](#project-structure)
- [Features](#features)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project aims to showcase a simple Slack-like chat application using modern web technologies. While not fully functional, it demonstrates essential elements such as a customizable UI, component-based architecture, and integration with popular React libraries.

## Technologies Used

- **Next.js 14**: React framework for server-side rendering and static site generation.
- **TypeScript**: Type safety and modern JavaScript features.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **shadcn/ui**: A set of accessible React components.
- **Radix UI**: Headless UI components for building accessible interfaces.
- **Jotai**: State management.
- **React Icons**: For incorporating icons.
- **Date-fns**: Date utility library.
- **Quill**: Rich text editor.
- **Convex**: Real-time data synchronization and authentication.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or above)
- [Bun](https://bun.sh/) (latest version)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/slack-clone.git
   cd slack-clone
   ```

2. Install dependencies:

   Using **npm**:

   ```bash
   npm install
   ```

   Using **yarn**:

   ```bash
   yarn install
   ```

   Using **pnpm**:

   ```bash
   pnpm install
   ```

   Using **bun**:

   ```bash
   bun install
   ```

### Running the Development Server

To start the development server, run:

Using **npm**:

```bash
npm run dev
```

Using **yarn**:

```bash
yarn dev
```

Using **pnpm**:

```bash
pnpm dev
```

Using **bun**:

```bash
bun dev
```

To start the Convex server, run:

```bash
bunx convex dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

The project follows a typical Next.js file structure:

- `/app`: Contains page components following the Next.js App Router convention.
- `/components`: Reusable UI components.
- `/public`: Static assets like images and fonts.
- `/styles`: Tailwind CSS styles and configurations.
- `/lib`: Utility functions and helpers.
- `/config`: Configuration files (e.g., Tailwind, ESLint).

## Features

- Customizable UI with Tailwind CSS and shadcn components.
- State management using Jotai.
- Rich text editing using Quill.
- Basic authentication with `@auth/core` and `@convex-dev/auth`.
- Theming support with `next-themes`.

## Scripts

- `dev`: Start the development server.
- `build`: Build the project for production.
- `start`: Start the production server.
- `lint`: Run ESLint for code quality.

You can execute these scripts using:

```bash
npm run <script>
# or
yarn <script>
# or
pnpm <script>
# or
bun <script>
```

## Configuration

- Tailwind CSS is configured in `tailwind.config.ts`.
- Next.js configuration is available in `next.config.mjs`.
- TypeScript settings can be modified in `tsconfig.json`.
- ESLint configuration is available in `.eslintrc.json`.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your feature or bug fix. Ensure you adhere to the project's coding style and conventions.

1. **Fork the repository**
2. **Create your feature branch**:
   ```bash
   git checkout -b feature/my-feature
   ```
3. **Commit your changes**:
   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/my-feature
   ```
5. **Open a pull request**

## License

This project is licensed under the MIT License.
