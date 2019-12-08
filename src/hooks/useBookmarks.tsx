import { useSelector } from 'react-redux';

import { getChildren } from '../common/bookmarks';
import { GlobalStore } from '../store';

export const useBookmarks = () => {
  const { bookmarks } = useSelector((store: GlobalStore) => store);
  const children = getChildren(bookmarks.bookmarks, bookmarks.parentId);

  return { bookmarks, children };
};
