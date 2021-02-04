import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from 'components/atoms/Input/Input';

describe('Input component', () => {
  it('renders Input component', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Nazwa kategorii" />);

    expect(getByPlaceholderText('Nazwa kategorii')).toBeInTheDocument();
  });

  it('displays proper value', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Nazwa kategorii" />);

    expect(getByPlaceholderText('Nazwa kategorii')).toBeInTheDocument();

    fireEvent.change(getByPlaceholderText('Nazwa kategorii'), { target: { value: 'gameName' } });

    expect(getByPlaceholderText('Nazwa kategorii')).toHaveValue('gameName');
  });
});
