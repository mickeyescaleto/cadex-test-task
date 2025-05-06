import Link from 'next/link';

import { DATA } from '../constants/data';
import { FeaturesView } from './features-view';
import { FeaturesTitle } from './features-title';
import { FeaturesContent } from './features-content';
import { FeaturesGrid } from './features-grid';
import {
  FeaturesItem,
  FeaturesItemContent,
  FeaturesItemTitle,
} from './features-item';
import { ROUTES } from '@/shared/constants/routes';
import { View } from '@/shared/ui/view';
import { Button } from '@/shared/ui/button';

export function Features() {
  return (
    <FeaturesView>
      <View>
        <FeaturesTitle>Also very important title</FeaturesTitle>
        <FeaturesContent>
          <FeaturesGrid>
            {DATA.map(({ title, content }, idx) => (
              <FeaturesItem key={idx}>
                <FeaturesItemTitle>{title}</FeaturesItemTitle>
                <FeaturesItemContent>{content}</FeaturesItemContent>
              </FeaturesItem>
            ))}
          </FeaturesGrid>

          <Button $size="medium" title="Contact us" asChild>
            <Link href={ROUTES.CONTACT_US}>Contact us</Link>
          </Button>
        </FeaturesContent>
      </View>
    </FeaturesView>
  );
}
