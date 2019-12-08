import * as _ from 'lodash';
import axios from 'axios';

import { Bookmark } from '../common/bookmarks';

export interface FetchBookmarksRequest {
  jwt: string;
}

export interface FetchBookmarksResponse {
  bookmarks: Bookmark[];
}

export const fetchBookmarks = async (
  props: FetchBookmarksRequest,
): Promise<FetchBookmarksResponse> => {
  try {
    const res = await axios.get(`/bookmarks?jwt=${props.jwt}`);
    return res.data;
  } catch (err) {
    const message = _.get(err, 'response.data.error') || _.get(err, 'message') || err;
    return Promise.reject(message);
  }
};

export interface CreateBookmarkRequest {
  jwt: string;
  bookmark: Bookmark;
}

export interface CreateBookmarkResponse {
  bookmark: Bookmark;
}

export const createBookmark = async (
  props: CreateBookmarkRequest,
): Promise<CreateBookmarkResponse> => {
  try {
    const res = await axios.post(`/bookmarks?jwt=${props.jwt}`, props.bookmark);
    return res.data;
  } catch (err) {
    const message = _.get(err, 'response.data.error') || _.get(err, 'message') || err;
    return Promise.reject(message);
  }
};

export interface UpdateBookmarkRequest {
  jwt: string;
  bookmark: Bookmark;
}

export interface UpdateBookmarkResponse {}

export const updateBookmark = async (
  props: UpdateBookmarkRequest,
): Promise<UpdateBookmarkResponse> => {
  try {
    const res = await axios.patch(`/bookmarks/${props.bookmark.id}`, props.bookmark);
    return res.data;
  } catch (err) {
    const message = _.get(err, 'response.data.error') || _.get(err, 'message') || err;
    return Promise.reject(message);
  }
};

export interface DeleteBookmarkRequest {
  jwt: string;
  bookmark: Bookmark;
}

export interface DeleteBookmarkResponse {}

export const deleteBookmark = async (
  props: DeleteBookmarkRequest,
): Promise<DeleteBookmarkResponse> => {
  try {
    const res = await axios.delete(`/bookmarks/${props.bookmark.id}`);
    return res.data;
  } catch (err) {
    const message = _.get(err, 'response.data.error') || _.get(err, 'message') || err;
    return Promise.reject(message);
  }
};
