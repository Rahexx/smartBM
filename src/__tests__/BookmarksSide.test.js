import React from 'react';
import { render } from '@testing-library/react';
import BookmarksSide from 'components/organisms/BookmarksSide/BookmarksSide';

const renderBookmarksSide = (idItem) => {
  const utils = render(<BookmarksSide title="Ogólne" />);
  const bookmarksSide = utils.getByTestId(idItem);

  return { ...utils, bookmarksSide };
};

describe('BookmarksSide component', () => {
  it('Render BookmarksSide element', () => {
    const { bookmarksSide } = renderBookmarksSide('BookmarksSide-element');
    expect(bookmarksSide).toBeInTheDocument();
  });

  it('Display props title properly', () => {
    const { bookmarksSide } = renderBookmarksSide('BookmarksSide-title');
    expect(bookmarksSide).toHaveTextContent('Ogólne');
  });
});
