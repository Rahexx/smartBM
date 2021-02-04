import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from 'components/atoms/Input/Input';

const renderInput = () => {
  const utils = render(<Input placeholder="Nazwa kategorii" />);
  const input = utils.getByPlaceholderText('Nazwa kategorii');

  return { ...utils, input };
};

describe('Input component', () => {
  it('renders Input component', () => {
    const { input } = renderInput();
    expect(input).toBeInTheDocument();
  });

  it('displays proper value', () => {
    const { input } = renderInput();

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'gameName' } });

    expect(input).toHaveValue('gameName');
  });
});
