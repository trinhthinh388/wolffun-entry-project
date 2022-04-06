import React from 'react';

type AppProps = {
  [key: string]: any;
};

const App: React.FC<AppProps> = ({ children }) => (
  <React.StrictMode>{children}</React.StrictMode>
);

export default App;
