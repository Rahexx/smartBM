import React from 'react';
import styled from 'styled-components';
import SearchForm from 'components/molecules/SearchCategoryForm/SearchCategoryForm';
import CategoryListItem from 'components/molecules/CategoryListItem/CategoryListItem';
import AddCategoryForm from 'components/molecules/AddCategoryForm/AddCategoryForm';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 25px;
  position: relative;
  background-color: #485922;
`;

const StyledHeader = styled.h2`
  margin-bottom: 30px;
  text-align: left;
  color: white;
`;

const ListCategory = styled.ul`
  width: 100%;
  height: 45vh;
  list-style: none;
`;

const CategorySide = () => (
  <StyledWrapper data-testid="CategorySide-element">
    <SearchForm />
    <StyledHeader>Kategorie</StyledHeader>
    <ListCategory>
      <CategoryListItem name="Elektornika" />
      <CategoryListItem name="Samochody" />
      <CategoryListItem name="Filmiki" />
    </ListCategory>
    <AddCategoryForm />
  </StyledWrapper>
);

export default CategorySide;
