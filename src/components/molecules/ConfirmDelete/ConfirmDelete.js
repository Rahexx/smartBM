import React from 'react';
import AppContext from 'context';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  width: 75vw;
  height: 63vw;
  padding: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 7px;
  z-index: 4;

  @media (min-width: 960px) {
    height: 25vw;
    width: 50vw;
  }

  @media (min-width: 1200px) {
    height: 20vw;
    width: 40vw;
  }

  @media (min-width: 1600px) {
    height: 13vw;
    width: 27vw;
  }
`;

const StyledInfo = styled.h3`
  margin: 20px 0;
  color: #798c35;
  text-align: center;

  @media (min-width: 960px) {
    margin: 20px 0 40px;
    font-size: 2.1rem;
  }
`;

const StyledButton = styled(Button)`
  margin-bottom: 20px;
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

const ConfirmDelete = () => {
  const handleClosePopup = () => {
    const confirmPopup = document.querySelector('.confirmDelete');

    confirmPopup.style.display = 'none';
  };
  const handleDeleteButton = (context) => {
    handleClosePopup();
    context.deleteCategory();
  };

  return (
    <AppContext.Consumer>
      {(context) => (
        <StyledWrapper className="confirmDelete">
          <StyledInfo>Czy jeste pewny usunięcia kategorii?</StyledInfo>
          <StyledButton onClick={handleClosePopup}>Nie</StyledButton>
          <StyledButton onClick={() => handleDeleteButton(context)}>Tak</StyledButton>
        </StyledWrapper>
      )}
    </AppContext.Consumer>
  );
};

export default ConfirmDelete;
