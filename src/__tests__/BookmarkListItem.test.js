import React from 'react';
import { render } from '@testing-library/react';
import BookmarkListItem from 'components/molecules/BookmarkListItem/BookmarkListItem';

describe('BookmarkListItem', () => {
  it('Render BookmarkListItem component', () => {
    const { getByTestId } = render(
      <BookmarkListItem number={1} title="Myjnia samochodowa">
        Opis ogłoszenia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non est ut
        mauris tempor euismod. Etiam lacinia tempor sollicitudin.
      </BookmarkListItem>,
    );

    expect(getByTestId('BookmarkListItem-element')).toBeInTheDocument();
  });
});
