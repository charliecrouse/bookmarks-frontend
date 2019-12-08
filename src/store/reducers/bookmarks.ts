import { createSlice } from '@reduxjs/toolkit';

import * as bookmarksService from '../../services/bookmarks';
import { Bookmark, BookmarkViews } from '../../common/bookmarks';
import { AsyncState, defaultAsyncState } from '../common/state';
import { handleActionStart, handleActionFailure, handleActionSuccess } from '../common/reducers';

export interface StateShape extends AsyncState {
  bookmarks: Bookmark[];
  parentId: number | null;
  view: string;
}

export const initialState: StateShape = {
  ...defaultAsyncState,
  bookmarks: [],
  parentId: null,
  view: BookmarkViews.LIST,
};

export interface GetParentIdSuccess {
  parentId: number | null;
}

export interface SetParentIdSuccess {
  parentId: number | null;
}

export interface GetViewSuccess {
  view: string;
}

export interface SetViewSuccess {
  view: string;
}

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
    getParentIdStart: handleActionStart<StateShape>(),
    getParentIdSuccess: handleActionSuccess<StateShape, GetParentIdSuccess>(),
    setParentIdStart: handleActionStart<StateShape>(),
    setParentIdFailure: handleActionFailure<StateShape>(),
    setParentIdSuccess: handleActionSuccess<StateShape, SetParentIdSuccess>(),
    getViewStart: handleActionStart<StateShape>(),
    getViewSuccess: handleActionSuccess<StateShape, GetViewSuccess>(),
    setViewStart: handleActionStart<StateShape>(),
    setViewFailure: handleActionFailure<StateShape>(),
    setViewSuccess: handleActionSuccess<StateShape, SetViewSuccess>(),
  },
});
