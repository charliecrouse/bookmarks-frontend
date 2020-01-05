import * as _ from 'lodash';
import axios from 'axios';

import { Bookmark } from '../common/bookmarks';

const http = axios.create({
  baseURL: process.env.REACT_APP_BOOKMARKS_API || 'http://localhost:3000',
});

export interface FetchBookmarksRequest {
  jwt: string;
}

export interface FetchBookmarksResponse {
  bookmarks: Bookmark[];
}

export const fetchBookmarks = async (props: FetchBookmarksRequest): Promise<FetchBookmarksResponse> => {
  try {
    const res = await http.get(`/bookmarks?jwt=${props.jwt}`);
    return res.data;
  } catch (err) {
    const message = _.get(err, 'response.data.error') || _.get(err, 'message') || err;
    return Promise.reject(message);
  }
};

export interface CreateBookmarkRequest {
  jwt: string;
  bookmark: {
    name: string;
    url: string | undefined;
    parent: number | null;
  };
}

export interface CreateBookmarkResponse {
  bookmark: Bookmark;
}

export const createBookmark = async (props: CreateBookmarkRequest): Promise<CreateBookmarkResponse> => {
  try {
    const res = await http.post(`/bookmarks?jwt=${props.jwt}`, props.bookmark);
    return res.data;
  } catch (err) {
    const message = _.get(err, 'response.data.error') || _.get(err, 'message') || err;
    return Promise.reject(message);
  }
};

export interface UpdateBookmarkRequest {
  jwt: string;
  bookmark: Partial<Bookmark>;
}

export const updateBookmark = async (props: UpdateBookmarkRequest): Promise<{}> => {
  try {
    const res = await http.patch(`/bookmarks/${props.bookmark.id}?jwt=${props.jwt}`, props.bookmark);
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

export const deleteBookmark = async (props: DeleteBookmarkRequest): Promise<{}> => {
  try {
    const res = await http.delete(`/bookmarks/${props.bookmark.id}?jwt=${props.jwt}`);
    return res.data;
  } catch (err) {
    const message = _.get(err, 'response.data.error') || _.get(err, 'message') || err;
    return Promise.reject(message);
  }
};
