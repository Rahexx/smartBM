import React from 'react';
import { render } from '@testing-library/react';
import SearchCategoryForm from 'components/molecules/SearchCategoryForm/SearchCategoryForm';

describe('SearchCategoryForm component', () => {
  it('renders SearchCategoryForm component', () => {
    const { getByTestId } = render(<SearchCategoryForm />);

    expect(getByTestId('SearchCategoryForm-element')).toBeInTheDocument();
  });
});
