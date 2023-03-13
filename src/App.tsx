import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RootPage } from './view/pages/RootPage';

export function App() {
  return (
    <BrowserRouter>
      <RootPage />
    </BrowserRouter>
  );
}
