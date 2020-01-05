import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookmarkForm from '../components/BookmarkForm';
import { Bookmark } from '../common/bookmarks';
import { FormData } from '../common/forms';
import { GlobalStore } from '../store';
import { createBookmark, updateBookmark } from '../store/actions/bookmarks';

interface BookmarkFormContainer {
  bookmark?: Bookmark;
  afterSubmit?: () => void;
}

const BookmarkFormContainer: React.FC<BookmarkFormContainer> = props => {
  const { bookmark, afterSubmit } = props;
  const isCreate = !bookmark;
  const [isFolder, setIsFolder] = React.useState<boolean>(bookmark ? !bookmark.url : false);
  const dispatch = useDispatch();
  const { auth, bookmarks } = useSelector((store: GlobalStore) => ({ auth: store.auth, bookmarks: store.bookmarks }));

  const onSwitch = () => {
    setIsFolder(!isFolder);
  };

  const onSubmit = (data: FormData) => {
    if (isCreate) {
      dispatch(
        createBookmark({
          jwt: auth.jwt,
          bookmark: {
            parent: bookmarks.parent?.id || null,
            name: data.name,
            url: isFolder ? undefined : data.url,
          },
        }),
      );
    } else {
      dispatch(
        updateBookmark({
          jwt: auth.jwt,
          bookmark: {
            id: bookmark?.id,
            name: data.name,
            url: data.url,
          },
        }),
      );
    }
    if (afterSubmit) afterSubmit();
  };

  const childProps = {
    bookmark,
    isCreate,
    isFolder,
    onSwitch,
    onSubmit,
  };

  return <BookmarkForm {...childProps} />;
};

export default BookmarkFormContainer;
