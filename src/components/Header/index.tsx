import React from 'react';

export type HeaderProps = {
  [key: string]: any;
};

const Header: React.FC<HeaderProps> = () => {
  return <header id="header"></header>;
};

export default Header;
