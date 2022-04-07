import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Styles
import './styles/global.css';

const rootEl = document.getElementById('root');
const rootNode = createRoot(rootEl as any);

rootNode.render(<App />);
