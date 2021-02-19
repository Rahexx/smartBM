import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { Plus } from '@styled-icons/boxicons-regular/Plus';

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
`;

const InnerWrapper = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
`;

const StyledFormText = styled.p`
  color: white;
`;

const StyledPlusIcon = styled(Plus)`
  color: #b4bf5e;
  margin-right: 30px;
`;

const StyledForm = styled.form`
  height: 35px;
  display: flex;
  align-items: center;

  @media (min-width: 540px) {
    margin-right: 20px;
  }
`;

const StyledInput = styled(Input)`
  margin-right: 35px;

  :focus {
    outline: none;
  }
`;

const AddCategoryForm = () => (
  <StyledWrapper data-testid="AddCategoryForm-element">
    <InnerWrapper>
      <StyledFormText>Dodaj kategorię</StyledFormText>
      <StyledPlusIcon size="29" />
    </InnerWrapper>
    <StyledForm>
      <StyledInput placeholder="Nazwa kategorii" />
      <Button>Dodaj</Button>
    </StyledForm>
  </StyledWrapper>
);

export default AddCategoryForm;
