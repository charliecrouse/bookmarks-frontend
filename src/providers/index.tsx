import React from 'react';

import 'semantic-ui-css/semantic.min.css';

import { ReduxProvider } from './store';
import { RouterProvider } from './router';

export const Provider: React.FC = ({ children }) => (
  <ReduxProvider>
    <RouterProvider>{children}</RouterProvider>
  </ReduxProvider>
);
