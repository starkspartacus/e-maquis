import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRouter } from './routers/index.tsx';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
