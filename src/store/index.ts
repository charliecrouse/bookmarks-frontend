import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { reducer as auth } from './reducers/auth';
import { reducer as bookmarks } from './reducers/bookmarks';

const reducer = combineReducers({
  auth,
  bookmarks,
});

const middleware = [thunk];

export const store = configureStore({ reducer, middleware });

export type GlobalStore = ReturnType<typeof reducer>;
