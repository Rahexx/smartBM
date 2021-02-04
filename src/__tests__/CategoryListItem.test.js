import React from 'react';
import { render } from '@testing-library/react';
import CategoryListItem from 'components/molecules/CategoryListItem/CategoryListItem';

describe('CategoryListItem component', () => {
  it('renders CategoryListItem component', () => {
    const { getByTestId } = render(<CategoryListItem />);

    expect(getByTestId('CategoryListItem-element')).toBeInTheDocument();
  });

  it('Passing properly props to appropriate element', () => {
    const { getByTestId } = render(<CategoryListItem name="Stefan" />);

    expect(getByTestId('CategoryListItem-name')).toHaveTextContent('Stefan');
  });
});
