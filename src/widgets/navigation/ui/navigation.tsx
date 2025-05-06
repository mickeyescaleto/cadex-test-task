import Link from 'next/link';

import { NavigationBar } from '@/widgets/navigation/ui/navigation-bar';
import { NavigationView } from '@/widgets/navigation/ui/navigation-view';
import { META } from '@/shared/constants/meta';
import { ROUTES } from '@/shared/constants/routes';
import { View } from '@/shared/ui/view/';
import { Brand } from '@/shared/ui/brand';
import { Button } from '@/shared/ui/button';

export function Navigation() {
  return (
    <NavigationBar>
      <View>
        <NavigationView>
          <Link title={META.TITLE} href={ROUTES.ROOT}>
            <Brand />
          </Link>

          <Button $size="small" title="Contact us" asChild>
            <Link href={ROUTES.CONTACT_US}>Contact us</Link>
          </Button>
        </NavigationView>
      </View>
    </NavigationBar>
  );
}
