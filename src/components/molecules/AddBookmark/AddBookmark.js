/* eslint-disable no-param-reassign */
import React from 'react';
import AppContext from 'context';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { Cross } from '@styled-icons/entypo/Cross';

// Styled components

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 40px 25px;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  z-index: 3;

  @media (min-width: 375px) {
    justify-content: flex-start;
  }

  @media (min-width: 540px) {
    height: 185vh;
  }

  @media (min-width: 960px) {
    height: 75vh;
    width: 50vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 1140px) {
    width: 40vw;
  }

  @media (min-width: 1600px) {
    width: 30vw;
  }
`;

const StyledCrossIcon = styled(Cross)`
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledHeader = styled.h2`
  font-size: 2.6rem;
  text-align: center;
  text-transform: uppercase;
`;

const StyledForm = styled.form`
  height: 75vh;
  width: 75vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 375px) {
    height: 54vh;
    width: 50vw;
    margin-top: 50px;
  }

  @media (min-width: 540px) {
    height: 130vh;
  }

  @media (min-width: 960px) {
    height: 54vh;
    width: calc(100vw / 3);
  }

  @media (min-width: 1140px) {
    width: 25vw;
  }

  @media (min-width: 1600px) {
    height: 48vh;
    width: 15vw;
  }
`;

const StyledField = styled.div`
  height: 63px;
  width: 100%;
  padding-top: 31px;
  position: relative;

  ${({ larger }) =>
    larger &&
    css`
      height: 150px;
    `}
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.8rem;
  color: #485922;
`;

const StyledTextArea = styled.textarea`
  height: 120px;
  width: 100%;
  padding: 5px 12px;
  border: 2px solid black;
  border-radius: 5px;
  resize: none;

  &:focus {
    outline: none;
    border: 2px solid #485922;
  }
`;

const StyledButton = styled(Button)`
  @media (min-width: 400px) {
    height: 34px;
    width: 123px;
    margin-top: 30px;
    font-size: 1.6rem;
  }

  @media (min-width: 960px) {
    &:hover {
      cursor: pointer;
    }
  }
`;

const AddBookmark = () => {
  const handleCloseButton = () => {
    const bookmarkForm = document.querySelector('.popUpBookmark');

    bookmarkForm.style.display = 'none';
  };

  const clearForm = (...inputs) => {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  };

  const handleSubmit = (e, context) => {
    e.preventDefault();

    const title = document.querySelector('input[name="title"]');
    const link = document.querySelector('input[name="link"]');
    const description = document.querySelector('textarea[name="description"]');

    context.addNewBookmark(title.value, link.value, description.value);
    clearForm(title, link, description);
    handleCloseButton();
  };

  return (
    <AppContext.Consumer>
      {(context) => (
        <StyledWrapper className="popUpBookmark">
          <StyledCrossIcon size="33" onClick={handleCloseButton} />
          <StyledHeader>Dodaj zakładkę</StyledHeader>
          <StyledForm data-testid="AddBookmark-element">
            <StyledField>
              <StyledLabel htmlFor="title">Tytuł zakładki</StyledLabel>
              <Input name="title" id="title" placeholder="Tytuł zakładki" form="isTrue" />
            </StyledField>
            <StyledField>
              <StyledLabel htmlFor="link">Link</StyledLabel>
              <Input name="link" id="link" placeholder="Link" form="isTrue" />
            </StyledField>
            <StyledField larger>
              <StyledLabel htmlFor="description">Opis zakładki</StyledLabel>
              <StyledTextArea name="description" id="description" placeholder="Opis zakładki" />
            </StyledField>
            <StyledButton
              addBookMark
              form="isTrue"
              onClick={(e) => {
                handleSubmit(e, context);
              }}
            >
              Dodaj
            </StyledButton>
          </StyledForm>
        </StyledWrapper>
      )}
    </AppContext.Consumer>
  );
};

export default AddBookmark;
