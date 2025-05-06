import { theme } from '@/core/styles/theme';

type BreakpointKey = keyof typeof theme.breakpoints;

export const media = Object.entries(theme.breakpoints).reduce(
  (acc, [key, value]) => {
    acc[key as BreakpointKey] = `@media (width >= ${value})`;
    return acc;
  },
  {} as Record<BreakpointKey, string>,
);
