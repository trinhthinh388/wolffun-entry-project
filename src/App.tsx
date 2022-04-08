import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SizeProvider } from './contexts';
import { CommonLayout } from './layouts';

type AppProps = {
  [key: string]: any;
};

const App: React.FC<AppProps> = ({ children }) => (
  <BrowserRouter>
    <SizeProvider>
      <CommonLayout>{children}</CommonLayout>
    </SizeProvider>
  </BrowserRouter>
);

export default App;
