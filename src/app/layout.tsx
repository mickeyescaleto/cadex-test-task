import '@/core/styles/variables.css';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import { inter } from '@/core/styles/fonts';
import { StyledComponentsProvider } from '@/core/providers/styled-components-provider';
import { Navigation } from '@/widgets/navigation';
import { Footer } from '@/widgets/footer';
import { META } from '@/shared/constants/meta';
import { Main } from '@/shared/ui/main';

export const metadata: Metadata = {
  title: META.TITLE,
  description: META.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <StyledComponentsProvider>
          <Navigation />
          <Main>{children}</Main>
          <Footer />
        </StyledComponentsProvider>
      </body>
    </html>
  );
}
