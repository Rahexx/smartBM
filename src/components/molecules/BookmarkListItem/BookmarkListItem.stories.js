import React from 'react';
import BookmarkListItem from './BookmarkListItem';

export default {
  title: 'Components/Molecules/BookmarkListItem',
  component: BookmarkListItem,
};

export const ListItem = () => (
  <BookmarkListItem number={1} title="Myjnia samochodowa">
    Opis ogłoszenia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non est ut
    mauris tempor euismod. Etiam lacinia tempor sollicitudin.{' '}
  </BookmarkListItem>
);
