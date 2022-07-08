import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import LangProvider from './comp/LangProvider';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <LangProvider />
  </StrictMode>
);
