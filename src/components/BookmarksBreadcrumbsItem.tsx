import React from 'react';
import styled from 'styled-components';
import { Breadcrumb } from 'semantic-ui-react';

import { Bookmark } from '../common/bookmarks';

const StyledBreadcrumbText = styled.span`
  margin-left: 10px;
  margin-right: 5px;
`;

interface BookmarksBreadcrumbsItemProps {
  bookmark?: Bookmark;
  onClick: (bookmark?: Bookmark) => void;
}

const BookmarksBreadcrumbsItem: React.FC<BookmarksBreadcrumbsItemProps> = props => {
  const { bookmark, onClick } = props;

  return (
    <Breadcrumb.Section link>
      <StyledBreadcrumbText onClick={() => onClick(bookmark)}>{bookmark?.name || 'Home'}</StyledBreadcrumbText>
      <Breadcrumb.Divider>/</Breadcrumb.Divider>
    </Breadcrumb.Section>
  );
};

export default BookmarksBreadcrumbsItem;
