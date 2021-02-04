import React from 'react';
import { render } from '@testing-library/react';
import AddCategoryForm from 'components/molecules/AddCategoryForm/AddCategoryForm';

describe('AddCategoryForm component', () => {
  it('renders AddCategoryForm component', () => {
    const { getByTestId } = render(<AddCategoryForm />);

    expect(getByTestId('AddCategoryForm-element')).toBeInTheDocument();
  });
});
