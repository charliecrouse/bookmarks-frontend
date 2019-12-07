import { createSlice } from '@reduxjs/toolkit';

import * as bookmarksService from '../../services/bookmarks';
import { AsyncState, defaultAsyncState } from '../common/state';
import { handleActionStart, handleActionFailure, handleActionSuccess } from '../common/reducers';

export interface StateShape extends AsyncState {
  bookmarks: bookmarksService.Bookmark[];
}

export const initialState: StateShape = {
  ...defaultAsyncState,
  bookmarks: [],
};

export const { reducer, actions } = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    fetchBookmarksStart: handleActionStart<StateShape>(),
    fetchBookmarksFailure: handleActionFailure<StateShape>(),
    fetchBookmarksSuccess: handleActionSuccess<
      StateShape,
      bookmarksService.FetchBookmarksResponse
    >(),
    createBookmarkStart: handleActionStart<StateShape>(),
    createBookmarkFailure: handleActionFailure<StateShape>(),
    createBookmarkSuccess: handleActionSuccess<
      StateShape,
      bookmarksService.CreateBookmarkResponse
    >(),
    updateBookmarkStart: handleActionStart<StateShape>(),
    updateBookmarkFailure: handleActionFailure<StateShape>(),
    updateBookmarkSuccess: handleActionSuccess<
      StateShape,
      bookmarksService.UpdateBookmarkResponse
    >(),
  },
});
