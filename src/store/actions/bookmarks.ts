import * as bookmarksService from '../../services/bookmarks';

import { Thunk } from '../common/actions';
import { StateShape, actions } from '../reducers/bookmarks';

export const fetchBookmarks = (
  data: bookmarksService.FetchBookmarksRequest,
): Thunk<StateShape> => async dispatch => {
  dispatch(actions.fetchBookmarksStart());
  try {
    const res = await bookmarksService.fetchBookmarks(data);
    dispatch(actions.fetchBookmarksSuccess(res));
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
