import * as bookmarksService from '../../services/bookmarks';

import { Thunk } from '../common/actions';
import { BookmarkViews } from '../../common/bookmarks';
import { StateShape, actions } from '../reducers/bookmarks';

// -----------
// API ACTIONS
// -----------
export const fetchBookmarks = (
  data: bookmarksService.FetchBookmarksRequest,
): Thunk<StateShape> => async dispatch => {
  dispatch(actions.fetchBookmarksStart());
  try {
    const res = await bookmarksService.fetchBookmarks(data);
    dispatch(actions.fetchBookmarksSuccess(res));
    dispatch(getParentId());
    dispatch(getView());
  } catch (err) {
    dispatch(actions.fetchBookmarksFailure(err));
  }
};

export const createBookmark = (
  data: bookmarksService.CreateBookmarkRequest,
): Thunk<StateShape> => async dispatch => {
  dispatch(actions.createBookmarkStart());
  try {
    const res = await bookmarksService.createBookmark(data);
    dispatch(actions.createBookmarkSuccess(res));
  } catch (err) {
    dispatch(actions.createBookmarkFailure(err));
  }
};

export const updateBookmark = (
  data: bookmarksService.UpdateBookmarkRequest,
): Thunk<StateShape> => async dispatch => {
  dispatch(actions.updateBookmarkStart());
  try {
    const res = await bookmarksService.updateBookmark(data);
    dispatch(actions.updateBookmarkSuccess(res));
  } catch (err) {
    dispatch(actions.updateBookmarkFailure(err));
  }
};

// --------------
// CLIENT ACTIONS
// --------------
export const getParentId = (): Thunk<StateShape> => async dispatch => {
  dispatch(actions.getParentIdStart());

  try {
    const item = window.localStorage.getItem('parentId');

    if (!item) throw new Error('');

    const parsed = parseInt(item);
    const parentId = isNaN(parsed) ? null : parsed;

    dispatch(actions.getParentIdSuccess({ parentId }));
  } catch (err) {
    dispatch(actions.getParentIdSuccess({ parentId: null }));
  }
};

export const setParentId = (parentId: number | null): Thunk<StateShape> => async dispatch => {
  dispatch(actions.setParentIdStart());

  try {
    if (parentId) {
      window.localStorage.setItem('parentId', parentId.toString());
    } else {
      window.localStorage.removeItem('parentId');
    }
    dispatch(actions.setParentIdSuccess({ parentId }));
  } catch (err) {
    dispatch(actions.setParentIdFailure(err));
  }
};

export const getView = (): Thunk<StateShape> => async dispatch => {
  dispatch(actions.getViewStart());

  try {
    const view = window.localStorage.getItem('bookmarks-view');

    // Prevent invalid or unknown view from being set
    if (!view) throw new Error('');
    if (!BookmarkViews[view]) throw new Error('');

    dispatch(actions.setViewSuccess({ view }));
  } catch (err) {
    dispatch(actions.setViewSuccess({ view: BookmarkViews.LIST }));
  }
};

export const setView = (view: string): Thunk<StateShape> => async dispatch => {
  dispatch(actions.setViewStart());

  try {
    if (BookmarkViews[view]) {
      window.localStorage.setItem('bookmarks-view', view);
      dispatch(actions.setViewSuccess({ view }));
    } else {
      window.localStorage.setItem('bookmarks-view', BookmarkViews.LIST);
      dispatch(actions.setViewSuccess({ view }));
    }
  } catch (err) {
    dispatch(actions.setViewFailure(err));
  }
};
