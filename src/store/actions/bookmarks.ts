import * as bookmarksService from '../../services/bookmarks';
import { Bookmark } from '../../common/bookmarks';
import { Thunk } from '../common/actions';
import { StateShape, actions } from '../reducers/bookmarks';

export const fetchBookmarks = (data: bookmarksService.FetchBookmarksRequest): Thunk<StateShape> => async dispatch => {
  dispatch(actions.fetchBookmarksStart());
  try {
    const res = await bookmarksService.fetchBookmarks(data);
    dispatch(actions.fetchBookmarksSuccess(res));
    dispatch(loadParent());
  } catch (err) {
    dispatch(actions.fetchBookmarksFailure(err));
  }
};

export const createBookmark = (data: bookmarksService.CreateBookmarkRequest): Thunk<StateShape> => async dispatch => {
  dispatch(actions.createBookmarkStart());
  try {
    await bookmarksService.createBookmark(data);
    dispatch(actions.createBookmarkSuccess({}));
    dispatch(fetchBookmarks({ jwt: data.jwt }));
  } catch (err) {
    dispatch(actions.createBookmarkFailure(err));
  }
};

export const updateBookmark = (data: bookmarksService.UpdateBookmarkRequest): Thunk<StateShape> => async dispatch => {
  dispatch(actions.updateBookmarkStart());
  try {
    await bookmarksService.updateBookmark(data);
    dispatch(actions.updateBookmarkSuccess({}));
    dispatch(fetchBookmarks({ jwt: data.jwt }));
  } catch (err) {
    dispatch(actions.updateBookmarkFailure(err));
  }
};

export const deleteBookmark = (data: bookmarksService.DeleteBookmarkRequest): Thunk<StateShape> => async dispatch => {
  dispatch(actions.deleteBookmarkStart());
  try {
    await bookmarksService.deleteBookmark(data);
    dispatch(actions.deleteBookmarkSuccess({}));
    dispatch(fetchBookmarks({ jwt: data.jwt }));
  } catch (err) {
    dispatch(actions.deleteBookmarkFailure(err));
  }
};

export const loadParent = (): Thunk<StateShape> => async dispatch => {
  dispatch(actions.loadParentStart());

  const stored = window.localStorage.getItem('parent');
  if (!stored) {
    return dispatch(actions.loadParentSuccess({ parent: undefined }));
  }

  dispatch(actions.loadParentSuccess({ parent: JSON.parse(stored) }));
};

export const setParent = (bookmark?: Bookmark): Thunk<StateShape> => async dispatch => {
  dispatch(actions.setParentStart());

  if (bookmark) {
    window.localStorage.setItem('parent', JSON.stringify(bookmark));
  } else {
    window.localStorage.removeItem('parent');
  }

  dispatch(actions.setParentSuccess({ parent: bookmark }));
};
