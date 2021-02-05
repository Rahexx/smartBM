import React from 'react';
import { render } from '@testing-library/react';
import CategorySide from 'components/organisms/CategorySide/CategorySide';

describe('CategorySide component', () => {
  it('renders CategorySide component', () => {
    const { getByTestId } = render(<CategorySide />);

    expect(getByTestId('CategorySide-element')).toBeInTheDocument();
  });
});
