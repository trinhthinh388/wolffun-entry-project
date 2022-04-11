import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SizeProvider } from './contexts';
import { CommonLayout } from './layouts';

// Pages
const MarketPlace = React.lazy(() => import('./pages/Marketplace'));
const Hero = React.lazy(() => import('./pages/HeroDetail'));

type AppProps = {
  [key: string]: any;
};

const App: React.FC<AppProps> = () => (
  <BrowserRouter>
    <SizeProvider>
      <CommonLayout>
        <React.Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<h1>HOME</h1>} />
            <Route path="buy" element={<MarketPlace />} />
            <Route path="hero" element={<Hero />} />
          </Routes>
        </React.Suspense>
      </CommonLayout>
    </SizeProvider>
  </BrowserRouter>
);

export default App;
