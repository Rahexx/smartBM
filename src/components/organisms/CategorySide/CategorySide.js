import React from 'react';
import styled from 'styled-components';
import SearchForm from 'components/molecules/SearchCategoryForm/SearchCategoryForm';
import CategoryListItem from 'components/molecules/CategoryListItem/CategoryListItem';
import AddCategoryForm from 'components/molecules/AddCategoryForm/AddCategoryForm';
import { DoubleArrow } from '@styled-icons/material-rounded/DoubleArrow';

// variables
let isShow = true;

// functions

const handleClickArrow = () => {
  const wrapper = document.querySelector('.categorySideWrapper');
  const arrow = document.querySelector('.doubleArrow');

  if (isShow) {
    wrapper.style.transform = 'translateX(calc(-100vw + 30px))';
    arrow.style.transform = 'translate(50%, -50%) rotate(0)';
    isShow = !isShow;
  } else {
    wrapper.style.transform = 'translateX(0)';
    arrow.style.transform = 'translate(50%, -50%) rotate(180deg)';
    isShow = !isShow;
  }
};

// styled elements

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 25px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #485922;
  z-index: 2;
  transition: 0.5s;

  @media (min-width: 960px) {
    width: 33vw;
    transition: 0s;
  }

  @media (min-width: 1600px) {
    padding: 50px 25px 25px;
    width: 18vw;
  }
`;

const StyledHeader = styled.h2`
  margin-bottom: 30px;
  text-align: left;
  color: white;

  @media (min-width: 960px) {
    font-size: 2.9rem;
  }
`;

const ListCategory = styled.ul`
  width: 100%;
  height: 45vh;
  list-style: none;

  @media (min-width: 540px) {
    height: 35vh;
  }
`;

const StyledDoubleArrowIcon = styled(DoubleArrow)`
  position: absolute;
  top: 50vh;
  right: 5vw;
  transform: translate(50%, -50%) rotate(180deg);
  color: white;

  @media (min-width: 540px) {
    right: 2.5vw;
  }

  @media (min-width: 720px) {
    right: 2.1vw;
  }

  @media (min-width: 960px) {
    display: none;
  }
`;

const CategorySide = () => (
  <StyledWrapper className="categorySideWrapper" data-testid="CategorySide-element">
    <SearchForm />
    <StyledHeader>Kategorie</StyledHeader>
    <ListCategory>
      <CategoryListItem name="Elektornika" />
      <CategoryListItem name="Samochody" />
      <CategoryListItem name="Filmiki" />
    </ListCategory>
    <AddCategoryForm />
    <StyledDoubleArrowIcon className="doubleArrow" size="30" onClick={handleClickArrow} />
  </StyledWrapper>
);

export default CategorySide;
