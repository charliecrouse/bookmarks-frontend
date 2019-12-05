import * as shared from './shared';
import * as bookmarksTypes from '../actions/types/bookmarks';

import { Bookmark } from '../../services/bookmarks';

export interface StateShape extends shared.AsyncStateShape {
  bookmarks: Bookmark[];
}

const initialState = {
  bookmarks: [],
  loading: false,
  error: undefined,
};

export const handleFetchBookmarksSuccess = (
  state: StateShape,
  action: bookmarksTypes.FetchBookmarksSuccess,
): StateShape => {
  return { ...shared.handleActionSuccess(state, action), bookmarks: action.data.bookmarks || [] };
};

export const reducer = (
  state: StateShape = initialState,
  action: bookmarksTypes.ActionTypes,
): StateShape => {
  switch (action.type) {
    case bookmarksTypes.FETCH_BOOKMARKS_START:
      return shared.handleActionStart(state) as StateShape;
    case bookmarksTypes.FETCH_BOOKMARKS_FAILURE:
      return shared.handleActionFailure(state, action) as StateShape;
    case bookmarksTypes.FETCH_BOOKMARKS_SUCCESS:
      return handleFetchBookmarksSuccess(state, action);
    default:
      return state;
  }
};
