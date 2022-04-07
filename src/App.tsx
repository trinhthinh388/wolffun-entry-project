import React from 'react';
import { SizeProvider } from './contexts';
import { CommonLayout } from './layouts';

type AppProps = {
  [key: string]: any;
};

const App: React.FC<AppProps> = ({ children }) => (
  <SizeProvider>
    <CommonLayout>{children}</CommonLayout>
  </SizeProvider>
);

export default App;
