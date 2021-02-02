import React from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { Cross } from '@styled-icons/entypo/Cross';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 40px 25px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 400px) {
    justify-content: flex-start;
  }
`;

const StyledCrossIcon = styled(Cross)`
  position: absolute;
  top: 10px;
  right: 10px;
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

  @media (min-width: 400px) {
    height: 47vh;
    margin-top: 50px;
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
`;

const AddBookmark = () => (
  <StyledWrapper>
    <StyledCrossIcon size="33" />
    <StyledHeader>Dodaj zakładkę</StyledHeader>
    <StyledForm>
      <StyledField>
        <StyledLabel>Tytuł zakładki</StyledLabel>
        <Input placeholder="Tytuł zakładki" form />
      </StyledField>
      <StyledField>
        <StyledLabel>Link</StyledLabel>
        <Input placeholder="Link" form />
      </StyledField>
      <StyledField larger>
        <StyledLabel>Opis zakładki</StyledLabel>
        <StyledTextArea placeholder="Opis zakładki" />
      </StyledField>
      <Button addBookMark form>
        Dodaj kategorię
      </Button>
    </StyledForm>
  </StyledWrapper>
);

export default AddBookmark;
