import '@/core/styles/colors.css';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import { inter } from '@/core/styles/fonts';
import { StyledComponentsProvider } from '@/core/providers/styled-components-provider';

export const metadata: Metadata = {
  title: 'Web application',
  description: 'Web application created using NextJS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <StyledComponentsProvider>{children}</StyledComponentsProvider>
      </body>
    </html>
  );
}
