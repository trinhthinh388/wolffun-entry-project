import React from 'react';
import { useBreakpointValue } from '../../hooks';

import Button from '../Button';
import MobileMenu from './components/MobileMenu';

// Styles
import styles from './styles/header.module.scss';

export type HeaderProps = {
  [key: string]: any;
};

const Header: React.FC<HeaderProps> = () => {
  const Menu = useBreakpointValue({
    mobile: <MobileMenu />,
    desktop: null,
  });

  return (
    <header id="header" className={styles.header}>
      <div className={styles.header__logo}>
        <a href="/">
          <div className={styles.logo__container}>
            <img alt="logo" src="/png/thetan_logo_V2.png" />
          </div>
        </a>
      </div>

      <Button>
        <span>Connect Wallet</span>
      </Button>
      {Menu}
    </header>
  );
};

export default Header;
