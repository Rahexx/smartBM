import React from 'react';
import AppContext from 'context';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { Plus } from '@styled-icons/boxicons-regular/Plus';

// Styled components

const StyledWrapper = styled.div`
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 540px) {
    height: 38px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  @media (min-width: 960px) {
    height: 95px;
    flex-direction: column;
    justify-content: space-between;
    align-items: initial;
  }
`;

const InnerWrapper = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
`;

const StyledFormText = styled.p`
  color: white;

  @media (min-width: 960px) {
    font-size: 2rem;
  }
`;

const StyledPlusIcon = styled(Plus)`
  color: #b4bf5e;
  margin-right: 30px;

  @media (min-width: 960px) {
    margin: 0 0 0 30px;
    height: 33px;
    width: 33px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledForm = styled.form`
  height: 35px;
  display: none;
  align-items: center;

  @media (min-width: 540px) {
    margin-right: 20px;
  }

  @media (min-width: 960px) {
    margin-right: 0;
  }
`;

const StyledInput = styled(Input)`
  margin-right: 25px;

  :focus {
    outline: none;
  }
`;

const StyledButton = styled(Button)`
  @media (min-width: 960px) {
    height: 31px;
    width: 100%;
    font-size: 1.6rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

const AddCategoryForm = () => {
  const handleClickPlus = () => {
    const addCategoryForm = document.querySelector('.addCategoryForm');

    addCategoryForm.style.display = 'flex';
  };

  const handleSubmitCategory = () => {
    const addCategoryForm = document.querySelector('.addCategoryForm');

    addCategoryForm.style.display = 'none';
  };

  return (
    <AppContext.Consumer>
      {(context) => (
        <StyledWrapper data-testid="AddCategoryForm-element">
          <InnerWrapper>
            <StyledFormText>Dodaj kategorię</StyledFormText>
            <StyledPlusIcon size="29" onClick={handleClickPlus} />
          </InnerWrapper>
          <StyledForm
            className="addCategoryForm"
            onSubmit={(e) => {
              e.preventDefault();
              const categoryName = document.querySelector('.categoryName');

              handleSubmitCategory();
              context.addCategory(categoryName.value);
              categoryName.value = '';
            }}
          >
            <StyledInput className="categoryName" placeholder="Nazwa kategorii" />
            <StyledButton>Dodaj</StyledButton>
          </StyledForm>
        </StyledWrapper>
      )}
    </AppContext.Consumer>
  );
};

export default AddCategoryForm;
