import React from 'react';

import { Button, Checkbox, Form, Modal } from 'semantic-ui-react';

import { Bookmark } from '../common/bookmarks';

interface BookmarkModalShape {
  active: boolean;

  handleClose: () => void;
  handleSubmit: (values: Partial<Bookmark>) => void;

  name?: string;
  url?: string;
}

export const BookmarkModal: React.FC<BookmarkModalShape> = props => {
  const { active, handleClose } = props;

  const [name, setName] = React.useState<string>(props.name || '');
  const [url, setUrl] = React.useState<string>(props.url || '');
  const [folder, setFolder] = React.useState<boolean>(false);

  const isExistingBookmark = !!props.name;

  const handleInputChange = (setter: (value: string) => void) => (
    e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.preventDefault();
    setter(e.currentTarget.value);
  };

  const handleSubmit = () => {
    props.handleSubmit({ name, url });
    setName('');
    setUrl('');
    setFolder(false);
  };

  return (
    <Modal open={active} onClose={handleClose} closeIcon>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Field
            control="input"
            label="Name"
            placeholder="Enter the name"
            type="text"
            value={name}
            onChange={handleInputChange(setName)}
          />

          {/* Only display URL field if not creating/editing a folder */}
          {!isExistingBookmark && !folder && (
            <Form.Field
              control="input"
              label="URL"
              placeholder="Enter the url"
              type="text"
              value={url}
              onChange={handleInputChange(setUrl)}
            />
          )}

          {/* Only display folder toggle when creating bookmarks */}
          {!isExistingBookmark && (
            <Form.Field>
              <Checkbox label="Folder" onChange={() => setFolder(!folder)} />
            </Form.Field>
          )}

          <Button type="submit">SUBMIT</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};
