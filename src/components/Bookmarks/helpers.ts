import BookmarkList from '../BookmarkList';
import { DISPLAY_VARIANT } from '../../common/bookmarks';

export const getComponentFromVariant = (variant: DISPLAY_VARIANT) => {
  switch (variant) {
    default:
      return BookmarkList;
  }
};
