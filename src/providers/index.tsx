import React from 'react';

import { ReduxProvider } from './redux';

export const Provider: React.FC = ({ children }) => <ReduxProvider>{children}</ReduxProvider>;
