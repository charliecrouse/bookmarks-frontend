import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, Feed, Icon, Image } from 'semantic-ui-react';

import { Bookmark, isFolder } from '../common/bookmarks';
import { useBookmarks } from '../hooks/useBookmarks';
import { setParentId } from '../store/actions/bookmarks';

export interface BookmarksGridItemShape {
  bookmark: Bookmark;
  onFolderClick: (id: number | null) => void;
  onBookmarkClick: (url: string) => void;
}

export const BookmarksGridItem: React.FC<BookmarksGridItemShape> = props => {
  const { bookmark, onFolderClick, onBookmarkClick } = props;
  const onClick = () => {
    if (isFolder(bookmark)) {
      onFolderClick(bookmark.id);
    } else {
      onBookmarkClick(bookmark.url || '/');
    }
  };

  const getLabel = () => {
    if (isFolder(bookmark)) {
      return <Image icon={<Icon name="folder" size="large" />} />;
    }
    return <Image src={`//logo.clearbit.com/${bookmark.url}`} size="mini" />;
  };

  return (
    <Card onClick={onClick}>
      <Card.Content></Card.Content>
      <Feed.Event>{getLabel()}</Feed.Event>
      <Card.Content extra>
        <Button basic color="blue" onClick={alert} icon="edit" />
        <Button basic color="red" onClick={alert} icon="delete" />
      </Card.Content>
    </Card>
  );
};

export const BookmarksGrid: React.FC = props => {
  const dispatch = useDispatch();
  const { children } = useBookmarks();

  const onFolderClick = (parentId: number | null) => {
    dispatch(setParentId(parentId));
  };

  const onBookmarkClick = (url: string) => {
    window.location.href = url;
  };

  const rows = children.map(bookmark => (
    <BookmarksGridItem
      key={bookmark.id}
      bookmark={bookmark}
      onBookmarkClick={onBookmarkClick}
      onFolderClick={onFolderClick}
    />
  ));

  return (
    <>
      <Card.Group itemsPerRow={4}>{rows}</Card.Group>
    </>
  );
};
