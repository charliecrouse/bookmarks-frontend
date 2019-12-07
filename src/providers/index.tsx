import React from 'react';

import { ReduxProvider } from './store';

export const Provider: React.FC = ({ children }) => <ReduxProvider>{children}</ReduxProvider>;
