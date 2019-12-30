import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getChildren } from '../common/bookmarks';
import { GlobalStore } from '../store';

export const useBookmarks = () => {
  const history = useHistory();

  const { bookmarks } = useSelector((store: GlobalStore) => store);
  const children = getChildren(bookmarks.bookmarks, bookmarks.parentId);

  const setParent = (id: number | null) => {
    if (id) {
      history.push({
        pathname: window.location.href,
        search: window.location.search || '?' + new URLSearchParams({ parent: id.toString() }),
      });
    }
  };

  return { bookmarks, children, setParent };
};
