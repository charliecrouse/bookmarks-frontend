import thunk from 'redux-thunk';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as auth } from './reducers/auth';

export const rootReducer = combineReducers({
  auth,
});

export type GlobalState = ReturnType<typeof rootReducer>;

export const initStore = () => {
  const middlewares = [thunk];
  const middlwareEnhancer = applyMiddleware(...middlewares);

  return createStore(rootReducer, composeWithDevTools(middlwareEnhancer));
};
