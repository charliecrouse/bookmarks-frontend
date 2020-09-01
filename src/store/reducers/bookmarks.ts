import { createSlice } from '@reduxjs/toolkit';

import * as bookmarksService from '../../services/bookmarks';
import { Bookmark } from '../../common/bookmarks';
import { AsyncState, defaultAsyncState } from '../common/state';
import { handleActionStart, handleActionFailure, handleActionSuccess } from '../common/reducers';

export interface StateShape extends AsyncState {
  bookmarks: Bookmark[];
  parent?: Bookmark;
}

export const initialState: StateShape = {
  ...defaultAsyncState,
  bookmarks: [],
};

export interface LoadParentSuccess {
  parent?: Bookmark;
}

export interface SetParentSuccess {
  parent?: Bookmark;
}

export const { reducer, actions } = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    fetchBookmarksStart: handleActionStart<StateShape>(),
    fetchBookmarksFailure: handleActionFailure<StateShape>(),
    fetchBookmarksSuccess: handleActionSuccess<StateShape, bookmarksService.FetchBookmarksResponse>(),
    createBookmarkStart: handleActionStart<StateShape>(),
    createBookmarkFailure: handleActionFailure<StateShape>(),
    createBookmarkSuccess: handleActionSuccess<StateShape, {}>(),
    updateBookmarkStart: handleActionStart<StateShape>(),
    updateBookmarkFailure: handleActionFailure<StateShape>(),
    updateBookmarkSuccess: handleActionSuccess<StateShape, {}>(),
    deleteBookmarkStart: handleActionStart<StateShape>(),
    deleteBookmarkFailure: handleActionFailure<StateShape>(),
    deleteBookmarkSuccess: handleActionSuccess<StateShape, {}>(),
    loadParentStart: handleActionStart<StateShape>(),
    loadParentSuccess: handleActionSuccess<StateShape, LoadParentSuccess>(),
    setParentStart: handleActionStart<StateShape>(),
    setParentSuccess: handleActionSuccess<StateShape, SetParentSuccess>(),
  },
});
