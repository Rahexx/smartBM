import React from 'react';
import { render } from '@testing-library/react';
import IdBookmark from 'components/atoms/IdBookmark/IdBookmark';

describe('IdBookmark component', () => {
  it('renders IdBookmark component', () => {
    const { getByText } = render(<IdBookmark>1</IdBookmark>);

    expect(getByText('1')).toBeInTheDocument();
  });
});
