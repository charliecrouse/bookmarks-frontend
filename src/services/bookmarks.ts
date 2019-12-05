import axios from 'axios';

export interface Bookmark {
  name: string;
  url?: string;
  ownerEmail: string;
  parent: number;
}

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
    const { bookmarks } = res.data;

    return { bookmarks };
  } catch (err) {
    return Promise.reject(err.response.data.error || err.message || err);
  }
};
