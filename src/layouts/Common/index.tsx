import React from 'react';

type CommonLayoutProps = {
  [key: string]: any;
};

const CommonLayout: React.FC<CommonLayoutProps> = () => {
  return <div className="min-h-screen"></div>;
};

export default CommonLayout;
