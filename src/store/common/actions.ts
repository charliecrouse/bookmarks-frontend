import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

export type Thunk<T> = ThunkAction<void, T, null, Action<string>>;
