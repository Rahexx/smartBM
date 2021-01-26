import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

export const Primary = () => <Button>Dodaj</Button>;
export const addBookmark = () => <Button addBookMark>Dodaj zakładkę</Button>;
export const addBookmarkForm = () => (
  <Button addBookMark form>
    Dodaj zakładkę
  </Button>
);
