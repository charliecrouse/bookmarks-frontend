import React from 'react';
import * as yup from 'yup';
import { Controller, ErrorMessage, useForm } from 'react-hook-form';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

import { Bookmark } from '../../common/bookmarks';

interface BookmarkForm {
  isCreate: boolean;
  isFolder: boolean;
  // Current values (used when editing)
  bookmark?: Bookmark;
  // Switches between bookmark/folder (used when creating)
  onSwitch: () => void;
  // Function to use when submitting (either create or update bookmark)
  onSubmit: (values: any) => void;
}

export const BookmarkForm: React.FC<BookmarkForm> = props => {
  const { isCreate, isFolder, bookmark, onSwitch, onSubmit } = props;
  const { control, errors, handleSubmit } = useForm({
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .required()
        .min(1),
      url: yup.string().url(),
    }),
    defaultValues: {
      name: bookmark?.name,
      url: bookmark?.url,
    },
  });

  return (
    <>
      <Header as="h2" textAlign="center">
        {isCreate ? 'Create Bookmark' : 'Edit Bookmark'}
      </Header>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          as={<Form.Field control="input" label="Name" placeholder="Bookmark Name" type="text" />}
        />

        {!isFolder && (
          <Controller
            name="url"
            control={control}
            as={<Form.Field control="input" label="Url" placeholder="Bookmark Url" type="text" />}
          />
        )}

        {isCreate && <Form.Checkbox toggle label="Folder" checked={isFolder} onChange={onSwitch} />}

        <Button type="submit">SUBMIT</Button>
      </Form>

      <ErrorMessage name="name" errors={errors} as={<Segment inverted color="red" secondary />} />
      <ErrorMessage name="url" errors={errors} as={<Segment inverted color="red" secondary />} />
    </>
  );
};
