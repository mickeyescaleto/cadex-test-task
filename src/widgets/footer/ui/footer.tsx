import Link from 'next/link';

import { FooterBar } from './footer-bar';
import { FooterView } from './footer-view';
import { FooterCopyright } from './footer-copyright';
import { META } from '@/shared/constants/meta';
import { ROUTES } from '@/shared/constants/routes';
import { View } from '@/shared/ui/view';
import { Brand } from '@/shared/ui/brand';

export function Footer() {
  return (
    <FooterBar>
      <View>
        <FooterView>
          <Link title={META.TITLE} href={ROUTES.ROOT}>
            <Brand />
          </Link>

          <FooterCopyright>
            © Artem Kuznetsov, {new Date().getFullYear()}
          </FooterCopyright>
        </FooterView>
      </View>
    </FooterBar>
  );
}
