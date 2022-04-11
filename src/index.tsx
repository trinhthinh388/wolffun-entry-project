import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Styles
import './styles/global.css';

// Fonts
import '@fontsource/oxanium';
import '@fontsource/oxanium/500.css';
import '@fontsource/oxanium/600.css';
import '@fontsource/oxanium/700.css';

const rootEl = document.getElementById('root');
const rootNode = createRoot(rootEl as any);

rootNode.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
