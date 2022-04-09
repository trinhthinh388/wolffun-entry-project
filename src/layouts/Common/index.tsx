import React from 'react';
import { Header, Footer } from '../../components';

type CommonLayoutProps = {
  [key: string]: any;
};

const CommonLayout: React.FC<CommonLayoutProps> = () => {
  return (
    <>
      <Header />
      <div className="flex-grow" />
      <Footer />
    </>
  );
};

export default CommonLayout;
