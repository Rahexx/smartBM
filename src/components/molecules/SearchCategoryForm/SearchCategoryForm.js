import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import { Search } from '@styled-icons/boxicons-regular/Search';

const StyledForm = styled.form`
  height: 40px;
  width: 60vw;
  position: relative;

  @media (min-width: 400px) {
    width: 55vw;
  }
`;

const SubmitBtn = styled.button`
  height: 27px;
  width: 27px;
  border: none;
  position: absolute;
  top: 4px;
  right: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #b4bf5e;
`;

const SearchCategoryForm = () => (
  <StyledForm data-testid="SearchCategoryForm-element">
    <Input placeholder="Szukaj kategorii" search />
    <SubmitBtn>
      <Search size="18" />
    </SubmitBtn>
  </StyledForm>
);

export default SearchCategoryForm;
