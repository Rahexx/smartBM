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

  it('Display properly props number', () => {
    const { getByTestId } = render(<BookmarkListItem number={1} title="Myjnia samochodowa" />);

    expect(getByTestId('BookmarkListItem-number')).toHaveTextContent(1);
  });

  it('Display properly props title', () => {
    const { getByTestId } = render(<BookmarkListItem number={1} title="Myjnia samochodowa" />);

    expect(getByTestId('BookmarkListItem-title')).toHaveTextContent('Myjnia samochodowa');
  });

  it('Check default props children', () => {
    const { getByTestId } = render(<BookmarkListItem number={1} title="Myjnia samochodowa" />);

    expect(getByTestId('BookmarkListItem-description')).toHaveTextContent('');
  });
});
