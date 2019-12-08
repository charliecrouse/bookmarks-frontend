import React from 'react';

import 'semantic-ui-css/semantic.min.css';

import { ReduxProvider } from './store';

export const Provider: React.FC = ({ children }) => <ReduxProvider>{children}</ReduxProvider>;
