import React from 'react';
import styles from './styles/header.module.scss';

export type HeaderProps = {
  [key: string]: any;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header id="header" className={styles.header}>
      <a className={styles.header__logo} href="/">
        <div className={styles.logo__container}>
          <img alt="logo" src="/png/thetan_logo_V2.png" />
        </div>
      </a>

      <button>
        <span>Connect Wallet</span>
      </button>
    </header>
  );
};

export default Header;
