import React from 'react';
import { Header, Footer } from '../../components';

type CommonLayoutProps = {
  [key: string]: any;
};

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="app__content flex-grow">{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
