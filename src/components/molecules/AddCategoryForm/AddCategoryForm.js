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
  background-color: #485922;
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
  margin-left: 30px;
`;

const StyledForm = styled.form`
  height: 35px;
  display: flex;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin-right: 35px;

  :focus {
    outline: none;
  }
`;

const AddCategoryForm = () => (
  <StyledWrapper>
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
