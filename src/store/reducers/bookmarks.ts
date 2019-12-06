import { createSlice } from '@reduxjs/toolkit';

import { AsyncState, defaultAsyncState } from '../common/state';

export interface StateShape extends AsyncState {}

export const initialState: StateShape = {
  ...defaultAsyncState,
};

export const { reducer, actions } = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {},
});
