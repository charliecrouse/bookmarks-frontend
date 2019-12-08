import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumb } from 'semantic-ui-react';

import { Bookmark, getParents } from '../common/bookmarks';
import { GlobalStore } from '../store';
import { setParentId } from '../store/actions/bookmarks';

const Container = styled.div`
  margin-bottom: 2%;
`;

const BreadcrumbText = styled.span`
  margin-left: 15px;
  margin-right: 15px;
`;

interface BookmarkBreadcrumbShape {
  bookmark: Bookmark;
  onClick: (id: number | null) => void;
}

export const BookmarkBreadcrumb: React.FC<BookmarkBreadcrumbShape> = props => {
  const { bookmark, onClick } = props;

  return (
    <>
      <Breadcrumb.Section onClick={() => onClick(bookmark.id)} active>
        <BreadcrumbText>{bookmark.name}</BreadcrumbText>
      </Breadcrumb.Section>
      <Breadcrumb.Divider>/</Breadcrumb.Divider>
    </>
  );
};

export const BookmarksBreadcrumb: React.FC = props => {
  const dispatch = useDispatch();
  const { bookmarks } = useSelector((store: GlobalStore) => store);

  const parents = getParents(bookmarks.bookmarks, bookmarks.parentId);

  const onClick = (parentId: number | null) => {
    dispatch(setParentId(parentId));
  };

  const breadcrumbs = parents.reverse().map(parent => {
    return <BookmarkBreadcrumb key={parent.id} bookmark={parent} onClick={onClick} />;
  });

  return (
    <Container>
      <Breadcrumb size="massive">
        <Breadcrumb.Section onClick={() => onClick(null)}>/</Breadcrumb.Section>
        {breadcrumbs}
      </Breadcrumb>
    </Container>
  );
};
