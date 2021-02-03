import React from 'react';
import { render } from '@testing-library/react';
import Button from 'components/atoms/Button/Button';

describe('Button component', () => {
  it('renders input element', () => {
    const { getByText } = render(<Button>Szukaj</Button>);

    expect(getByText(/szukaj/i)).toBeInTheDocument();
  });
});
