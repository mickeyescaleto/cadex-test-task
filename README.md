# cadex-test-task

CAD Exchanger test task

## 🛠️ Technology Stack

### Core

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: styled-components
- **UI Components**: Radix UI

### Forms

- **Validation**: Zod
- **Form Management**: React Hook Form

### Media

- **Video Embeds**: react-lite-youtube-embed

### Code Quality

- **Linting**: ESLint
- **Formatting**: Prettier
- **Git Hooks**: Husky + lint-staged
- **Commit Standards**: Commitlint

## 🚀 Quick Start

#### 1. Clone Repository

```bash
git clone git@github.com:mickeyescaleto/cadex-test-task.git
cd cadex-test-task.git
```

#### 2. Install Dependencies

```bash
bun install
```

#### 3. Development Server

```bash
bun run dev
```

#### 4. Build for Production

```bash
bun run build
```

#### 5. Linting & Formatting

```bash
bun run lint
bun run format
```

## 🎨 Styling Architecture

### Design System

```typescript
// core/styles/theme.ts
export const theme = {
  breakpoints: {
    small: '40rem',
    medium: '48rem',
    large: '64rem',
  },
  fonts: {
    main: 'var(--font-inter)',
  },
  colors: {
    background: 'var(--color-background)',
    text: 'var(--color-text)',
    inverse: 'var(--color-inverse)',
    // ...
  },
};
```

### Component Styling

```typescript
// shared/ui/button/ui/button.tsx
const sizes = ({ $size = 'medium' }: StyledButtonProps) =>
  ({
    small: css`
      font-size: 0.875rem;
      padding: 0.5rem 1rem;
    `,
    // ...
  })[$size];

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;

  // ...

  &:disabled {
    opacity: 50%;
    pointer-events: none;
  }

  ${({ $size }) => sizes({ $size })}
`;
```

## ⚡ Performance Optimizations

### Key Strategies

#### 1. Optimized Media

```typescript
<LiteYouTubeEmbed
    aspectHeight={9}
    aspectWidth={16}
    id={videoId}
    title={title}
/>
```

#### 2. Font Loading

```typescript
import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});
```

## 🔍 SEO Configuration

### Core Setup

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: META.TITLE,
    template: `${META.TITLE} – %s`,
  },
  description: META.DESCRIPTION,
};
```

## 🚀 Deployment

### Vercel

- Automatic Git integration

## 🤖 Development Workflow

### Git Hooks

```bash
// .husky/pre-commit
bunx lint-staged
```

```bash
// .husky/commit-msg
bunx commitlint --edit $1
```

### Linting Configuration

```javascript
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default eslintConfig;
```
