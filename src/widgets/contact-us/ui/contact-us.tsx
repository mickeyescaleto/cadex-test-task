import Link from 'next/link';

import { ContactUsView } from './contact-us-view';
import { ContactUsContent } from './contact-us-content';
import { ContactUsTitle } from './contact-us-title';
import { ROUTES } from '@/shared/constants/routes';
import { View } from '@/shared/ui/view';
import { Button } from '@/shared/ui/button';

export function ContactUs() {
  return (
    <ContactUsView>
      <View>
        <ContactUsContent>
          <ContactUsTitle>Less important title</ContactUsTitle>

          <Button $size="large" title="Contact us" asChild>
            <Link href={ROUTES.CONTACT_US}>Contact us</Link>
          </Button>
        </ContactUsContent>
      </View>
    </ContactUsView>
  );
}
