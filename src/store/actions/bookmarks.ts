import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as bookmarksTypes from './types/bookmarks';
import * as bookmarksService from '../../services/bookmarks';

export const fetchBookmarksStart = (): bookmarksTypes.FetchBookmarksStart => ({
  type: bookmarksTypes.FETCH_BOOKMARKS_START,
});

export const fetchBookmarksFailure = (error: Error): bookmarksTypes.FetchBookmarksFailure => ({
  type: bookmarksTypes.FETCH_BOOKMARKS_FAILURE,
  error,
});

export const fetchBookmarksSuccess = (
  data: bookmarksService.FetchBookmarksResponse,
): bookmarksTypes.FetchBookmarksSuccess => ({
  type: bookmarksTypes.FETCH_BOOKMARKS_SUCCESS,
  data,
});

type FetchBookmarksThunk = ThunkAction<
  void,
  bookmarksTypes.FetchBookmarksSuccess,
  null,
  Action<string>
>;

export const fetchBookmarks = (
  data: bookmarksService.FetchBookmarksRequest,
): FetchBookmarksThunk => async dispatch => {
  dispatch(fetchBookmarksStart());

  try {
    const res = await bookmarksService.fetchBookmarks(data);
    dispatch(fetchBookmarksSuccess(res));
  } catch (err) {
    dispatch(fetchBookmarksFailure(err));
  }
};
