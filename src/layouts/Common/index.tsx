import React from 'react';
import { Header } from '../../components';

type CommonLayoutProps = {
  [key: string]: any;
};

const CommonLayout: React.FC<CommonLayoutProps> = () => {
  return <Header></Header>;
};

export default CommonLayout;
