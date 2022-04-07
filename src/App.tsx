import React from 'react';
import { SizeProvider } from './contexts';
import { CommonLayout } from './layouts';

type AppProps = {
  [key: string]: any;
};

const App: React.FC<AppProps> = ({ children }) => (
  <React.StrictMode>
    <SizeProvider>
      <CommonLayout>{children}</CommonLayout>
    </SizeProvider>
  </React.StrictMode>
);

export default App;
