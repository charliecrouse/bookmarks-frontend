import * as shared from './shared';
import { StateShape } from '../../reducers/bookmarks';

export const FETCH_BOOKMARKS_START = 'FETCH_BOOKMARKS_START';
export const FETCH_BOOKMARKS_FAILURE = 'FETCH_BOOKMARKS_FAILURE';
export const FETCH_BOOKMARKS_SUCCESS = 'FETCH_BOOKMARKS_SUCCESS';

export interface FetchBookmarksStart extends shared.ActionStart {
  type: typeof FETCH_BOOKMARKS_START;
}

export interface FetchBookmarksFailure extends shared.ActionFailure {
  type: typeof FETCH_BOOKMARKS_FAILURE;
}

export interface FetchBookmarksSuccess extends shared.ActionSuccess {
  type: typeof FETCH_BOOKMARKS_SUCCESS;
  data: Partial<StateShape>;
}

export type ActionTypes = FetchBookmarksStart | FetchBookmarksFailure | FetchBookmarksSuccess;
