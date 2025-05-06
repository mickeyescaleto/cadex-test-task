'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { StyledComponentsRegistry } from '@/core/registry/styled-components-registry';
import { ResetStyles } from '@/core/styles/reset';
import { GlobalStyles } from '@/core/styles/main';
import { theme } from '@/core/styles/theme';

export function StyledComponentsProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        {children}
        <ResetStyles />
        <GlobalStyles />
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
