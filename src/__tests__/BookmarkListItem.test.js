import React from 'react';
import { render } from '@testing-library/react';
import BookmarkListItem from 'components/molecules/BookmarkListItem/BookmarkListItem';

const renderBookmarkListItem = (idItem) => {
  const utils = render(<BookmarkListItem number={1} title="Myjnia samochodowa" />);
  const bookmarkListItem = utils.getByTestId(idItem);

  return { ...utils, bookmarkListItem };
};

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

  it('Display properly props number', () => {
    const { bookmarkListItem } = renderBookmarkListItem('BookmarkListItem-number');
    expect(bookmarkListItem).toHaveTextContent(1);
  });

  it('Display properly props title', () => {
    const { bookmarkListItem } = renderBookmarkListItem('BookmarkListItem-title');
    expect(bookmarkListItem).toHaveTextContent('Myjnia samochodowa');
  });

  it('Check default props children', () => {
    const { bookmarkListItem } = renderBookmarkListItem('BookmarkListItem-description');
    expect(bookmarkListItem).toHaveTextContent('');
  });
});
