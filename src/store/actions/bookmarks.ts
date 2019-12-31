import * as bookmarksService from '../../services/bookmarks';

import { Thunk } from '../common/actions';
import { StateShape, actions } from '../reducers/bookmarks';

export const fetchBookmarks = (data: bookmarksService.FetchBookmarksRequest): Thunk<StateShape> => async dispatch => {
  dispatch(actions.fetchBookmarksStart());
  try {
    const res = await bookmarksService.fetchBookmarks(data);
    dispatch(actions.fetchBookmarksSuccess(res));
  } catch (err) {
    dispatch(actions.fetchBookmarksFailure(err));
  }
};

export const createBookmark = (data: bookmarksService.CreateBookmarkRequest): Thunk<StateShape> => async dispatch => {
  dispatch(actions.createBookmarkStart());
  try {
    const res = await bookmarksService.createBookmark(data);
    dispatch(actions.createBookmarkSuccess(res));
    dispatch(fetchBookmarks({ jwt: data.jwt }));
  } catch (err) {
    dispatch(actions.createBookmarkFailure(err));
  }
};

export const updateBookmark = (data: bookmarksService.UpdateBookmarkRequest): Thunk<StateShape> => async dispatch => {
  dispatch(actions.updateBookmarkStart());
  try {
    const res = await bookmarksService.updateBookmark(data);
    dispatch(actions.updateBookmarkSuccess(res));
    dispatch(fetchBookmarks({ jwt: data.jwt }));
  } catch (err) {
    dispatch(actions.updateBookmarkFailure(err));
  }
};

export const deleteBookmark = (data: bookmarksService.DeleteBookmarkRequest): Thunk<StateShape> => async dispatch => {
  dispatch(actions.deleteBookmarkStart());
  try {
    const res = await bookmarksService.deleteBookmark(data);
    dispatch(actions.deleteBookmarkSuccess(res));
    dispatch(fetchBookmarks({ jwt: data.jwt }));
  } catch (err) {
    dispatch(actions.deleteBookmarkFailure(err));
  }
};
