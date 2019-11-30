import React from 'react';

import { Provider } from 'react-redux';

import { initStore } from '../store';

const store = initStore();

export const ReduxProvider: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
