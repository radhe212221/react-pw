import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LangProvider from './comp/LangProvider';
import Root from './comp/Root';
import './styles/index.css';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <LangProvider>
      <Root />
    </LangProvider>
  </StrictMode>
);
