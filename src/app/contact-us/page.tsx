import type { Metadata } from 'next';

import { Form } from '@/features/form';
import { FullView } from '@/shared/ui/view';

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Contact us page',
};

export default function ContactUsPage() {
  return (
    <FullView>
      <Form />
    </FullView>
  );
}
