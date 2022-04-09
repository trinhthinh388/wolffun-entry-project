import React from 'react';
import { useBreakpointValue } from '../../hooks';
import { mergeClassname } from '../../utils';

// Components
import MobileMenu from './components/MobileMenu';
import DesktopMenu from './components/DesktopMenu';

// Styles
import styles from './styles/header.module.scss';

export type HeaderProps = {
  [key: string]: any;
};

const Header: React.FC<HeaderProps> = () => {
  const Menu = useBreakpointValue({
    tablet: <MobileMenu />,
    desktop: <DesktopMenu />,
  });

  const logoClass = useBreakpointValue({
    tablet: styles['header__logo--mobile'],
  });
  return (
    <header id="header" className={styles.header}>
      <div className={styles.header__logo}>
        <a href="/">
          <div className={mergeClassname(styles.logo__container, logoClass)}>
            <img alt="logo" src="/png/thetan_logo_V2.png" />
          </div>
        </a>
      </div>
      {Menu}
    </header>
  );
};

export default Header;
