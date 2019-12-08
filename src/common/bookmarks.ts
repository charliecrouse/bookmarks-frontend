import * as _ from 'lodash';

export interface Bookmark {
  id: number;
  name: string;
  url?: string;
  ownerEmail: string;
  parent?: number;
}

export const getChildren = (bookmarks: Bookmark[], id: number | null): Bookmark[] => {
  return _.filter(bookmarks, bookmark => bookmark.parent === id);
};

// Note: includes the bookmark with the given id
export const getParents = (bookmarks: Bookmark[], id: number | null): Bookmark[] => {
  const parents: Bookmark[] = [];

  if (!id) {
    return parents;
  }

  let current = findBookmarkById(bookmarks, id);

  while (current) {
    parents.push(current);

    if (!current.parent) {
      break;
    }

    current = findBookmarkById(bookmarks, current.parent);
  }

  return parents;
};

export const findBookmarkById = (bookmarks: Bookmark[], id: number): Bookmark | undefined => {
  return _.find(bookmarks, bookmark => bookmark.id === id);
};

export const isBookmark = (bookmark: Bookmark): boolean => {
  return !!bookmark.url;
};

export const isFolder = (bookmark: Bookmark): boolean => {
  return !isBookmark(bookmark);
};
