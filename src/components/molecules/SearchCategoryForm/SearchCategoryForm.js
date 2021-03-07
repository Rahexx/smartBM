import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import { Search } from '@styled-icons/boxicons-regular/Search';

const StyledForm = styled.form`
  height: 40px;
  width: 60vw;
  margin-bottom: 30px;
  position: relative;

  @media (min-width: 400px) {
    width: 55vw;
  }

  @media (min-width: 540px) {
    width: 43vw;
  }

  @media (min-width: 960px) {
    width: 20vw;
  }

  @media (min-width: 1600px) {
    width: 12vw;
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

  @media (min-width: 960px) {
    cursor: pointer;
  }
`;

const SearchCategoryForm = () => {
  const showSearchElements = (categoriesArray, searchText) => {
    const elementsArray = categoriesArray;

    for (let i = 0; i < elementsArray.length; i++) {
      const text = elementsArray[i].textContent.toLowerCase();

      if (searchText === '') {
        elementsArray[i].parentNode.style.display = 'flex';
      } else if (!text.includes(searchText)) {
        elementsArray[i].parentNode.style.display = 'none';
      } else {
        elementsArray[i].parentNode.style.display = 'flex';
      }
    }
  };

  const searchCategory = (e) => {
    e.preventDefault();
    const input = document.querySelector('.searchInput');
    const categories = document.querySelectorAll('.categoryItem');
    const searchText = input.value.toLowerCase();
    const categoriesArray = [...categories];

    showSearchElements(categoriesArray, searchText);
  };

  return (
    <StyledForm data-testid="SearchCategoryForm-element">
      <Input className="searchInput" placeholder="Szukaj kategorii" search />
      <SubmitBtn onClick={(e) => searchCategory(e)}>
        <Search size="18" />
      </SubmitBtn>
    </StyledForm>
  );
};

export default SearchCategoryForm;
