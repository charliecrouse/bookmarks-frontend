import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

import { BookmarkBreadcrumbsItemText } from './Styled';
import { Bookmark } from '../../common/bookmarks';

interface BookmarkBreadcrumbsItem {
  bookmark?: Bookmark;
  onClick: (bookmark?: Bookmark) => void;
}

export const BookmarkBreadcrumbsItem: React.FC<BookmarkBreadcrumbsItem> = props => {
  const { bookmark, onClick } = props;

  const breadcrumbText = bookmark?.name || 'Home';

  return (
    <Breadcrumb.Section link>
      <BookmarkBreadcrumbsItemText onClick={() => onClick(bookmark)}>{breadcrumbText}</BookmarkBreadcrumbsItemText>
      <Breadcrumb.Divider>/</Breadcrumb.Divider>
    </Breadcrumb.Section>
  );
};
