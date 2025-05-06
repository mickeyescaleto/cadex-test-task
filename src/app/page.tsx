import type { Metadata } from 'next';

import { Hero } from '@/widgets/hero';
import { Features } from '@/widgets/features';
import { ContactUs } from '@/widgets/contact-us';

export const metadata: Metadata = {
  title: 'Root',
};

export default function RootPage() {
  return (
    <>
      <Hero />
      <Features />
      <ContactUs />
    </>
  );
}
