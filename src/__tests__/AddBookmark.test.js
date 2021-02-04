import React from 'react';
import { render } from '@testing-library/react';
import AddBookmark from 'components/molecules/AddBookmark/AddBookmark';

describe('AddBookmark component', () => {
  it('renders AddBookmark component', () => {
    const { getByTestId } = render(<AddBookmark />);

    expect(getByTestId('AddBookmark-element')).toBeInTheDocument();
  });
});
