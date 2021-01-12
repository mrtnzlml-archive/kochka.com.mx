// @flow

import fbt from 'fbt';
import * as React from 'react';
import sx from '@adeira/sx';

// import Footer from './Footer';
import LanguageSwitch from './LanguageSwitch';
import Link from './Link';
import Logo from './Logo';
import SocialMediaIcons from './SocialMediaIcons';

export default function LayoutFooter(): React.Node {
  return (
    <div className={styles('wrapper')}>
      <div className={styles('row')}>
        <div className={styles('column', 'columnLeft')}>
          <Logo horizontal={true} color="#1c1e21" size="small" />
        </div>
        <div className={styles('column', 'columnLeft')}>
          <div>
            <Link href="/">
              <fbt desc="footer navigation link to homepage">Home</fbt>
            </Link>
          </div>
          <div>
            <Link href="/menu">
              <fbt common={true}>Café&nbsp;menu</fbt>
            </Link>
          </div>
          <div>
            <Link href="/rules">
              <fbt common={true}>Café&nbsp;rules</fbt>
            </Link>
          </div>
          <div>
            <Link href="/shop">
              <fbt common={true}>Shop</fbt>
            </Link>
          </div>
        </div>
        <div className={styles('column', 'columnLeft')}>
          <div>
            <Link href="/legal/terms">
              <fbt desc="footer navigation link to terms of use">Terms of use</fbt>
            </Link>
          </div>
          <div>
            <Link href="/legal/shipping">
              <fbt desc="footer navigation link to shipping and returns">Shipping & Returns</fbt>
            </Link>
          </div>
          <div>
            <Link href="/legal/privacy">
              <fbt desc="footer navigation link to privacy policy">Privacy Policy</fbt>
            </Link>
          </div>
        </div>
        <div className={styles('column', 'columnRight')}>
          <LanguageSwitch />
        </div>
      </div>

      <div className={styles('socialMedia')}>
        <SocialMediaIcons color="#1c1e21" size={30} />
      </div>
    </div>
  );
}

const styles = sx.create({
  wrapper: {
    paddingTop: '5vw',
    paddingBottom: '5vw',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  column: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  columnLeft: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  columnRight: {
    display: 'flex',
    flexDirection: 'column',
    flex: 3,
    alignItems: 'flex-end',
  },
  socialMedia: {
    paddingLeft: '1rem',
  },
});