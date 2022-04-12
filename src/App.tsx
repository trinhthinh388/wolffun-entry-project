import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SizeProvider } from './contexts';
import { CommonLayout } from './layouts';
import { Provider } from 'react-redux';
import store from './redux/store';

// Pages
const MarketPlace = React.lazy(() => import('./pages/Marketplace'));
const Hero = React.lazy(() => import('./pages/HeroDetail'));

type AppProps = {
  [key: string]: any;
};

const App: React.FC<AppProps> = () => (
  <BrowserRouter>
    <SizeProvider>
      <Provider store={store}>
        <CommonLayout>
          <React.Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<h1>HOME</h1>} />
              <Route path="/buy" element={<MarketPlace />} />
              <Route path="/hero" element={<Hero />} />
            </Routes>
          </React.Suspense>
        </CommonLayout>
      </Provider>
    </SizeProvider>
  </BrowserRouter>
);

export default App;
