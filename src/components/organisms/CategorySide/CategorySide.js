import React from 'react';
import AppContext from 'context';
import styled from 'styled-components';
import SearchForm from 'components/molecules/SearchCategoryForm/SearchCategoryForm';
import CategoryListItem from 'components/molecules/CategoryListItem/CategoryListItem';
import AddCategoryForm from 'components/molecules/AddCategoryForm/AddCategoryForm';
import { DoubleArrow } from '@styled-icons/material-rounded/DoubleArrow';

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
  width: 90%;
  height: 45vh;
  margin-bottom: 20px;
  list-style: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #798c35;
    outline: 0;
    border-radius: 7px;
  }

  @media (min-width: 540px) {
    height: 35vh;
    margin-bottom: 50px;
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

const CategorySide = () => {
  let isShow = true;

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

  return (
    <AppContext.Consumer>
      {(context) => (
        <StyledWrapper className="categorySideWrapper" data-testid="CategorySide-element">
          <SearchForm />
          <StyledHeader>Kategorie</StyledHeader>
          <ListCategory>
            {context.categoryStore.map((item) => (
              <CategoryListItem key={item.name} name={item.name} />
            ))}
          </ListCategory>
          <AddCategoryForm />
          <StyledDoubleArrowIcon className="doubleArrow" size="30" onClick={handleClickArrow} />
        </StyledWrapper>
      )}
    </AppContext.Consumer>
  );
};

export default CategorySide;
