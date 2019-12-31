import * as _ from 'lodash';

export interface Bookmark {
  id: number;
  name: string;
  url?: string;
  ownerEmail: string;
  parent?: number;
}

export enum DISPLAY_VARIANT {
  LIST = 'LIST',
  GRID = 'GRID',
}

/**
 * Return a list of bookmarks whose `parent` field matches the given `id`.
 *
 * @param bookmarks list of bookmarks to
 * @param id the id of the parent bookmark
 */
export const getChildren = (bookmarks: Bookmark[], id: number | null): Bookmark[] => {
  return _.filter(bookmarks, bookmark => bookmark.parent === id);
};

/**
 * Return the parent tree for the bookmark with the given `id`.
 * Note: the result will include the bookmark with the given id.
 *
 * @param bookmarks the list of bookmarks to filter
 * @param id
 */
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

/**
 * Return the bookmark with the given `id` from the given list of bookmarks.
 *
 * @param bookmarks the list of bookmarks to search
 * @param id the id of the bookmark to return
 */
export const findBookmarkById = (bookmarks: Bookmark[], id: number): Bookmark | undefined => {
  return _.find(bookmarks, bookmark => bookmark.id === id);
};

/**
 * Return true if the given bookmark is a true bookmark and not a folder.
 *
 * @param bookmark the bookmark to identify
 */
export const isBookmark = (bookmark: Bookmark): boolean => {
  return !!bookmark.url;
};

/**
 * Return true if the given bookmark is a folder and not a true bookmark.
 *
 * @param bookmark the bookmark to identify
 */
export const isFolder = (bookmark: Bookmark): boolean => {
  return !isBookmark(bookmark);
};

/**
 * Sorts bookmarks by name (folders always come before true bookmarks).
 *
 * @param bookmarks the list of bookmarks to sort
 */
export const sortBookmarks = (bookmarks: Bookmark[]): Bookmark[] => {
  const folders = _.sortBy(_.filter(bookmarks, isFolder), (bookmark: Bookmark) => bookmark.name);
  const _bookmarks = _.sortBy(_.filter(bookmarks, isBookmark), (bookmark: Bookmark) => bookmark.name);
  return _.concat(folders, _bookmarks);
};
