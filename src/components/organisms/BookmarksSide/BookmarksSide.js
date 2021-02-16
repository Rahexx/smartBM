import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import BookmarkListItem from 'components/molecules/BookmarkListItem/BookmarkListItem';

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 25px 0 0 30px;
  position: relative;
  background-color: #798c35;
`;

const StyledHeader = styled.h2`
  margin: 0 0 30px 15px;
  text-align: left;
  color: white;
`;

const StyledButton = styled(Button)`
  margin-left: 15px;
`;

const StyledList = styled.ul`
  min-height: 350px;
  width: calc(100vw - 25px);
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const StyledItem = styled.li`
  height: 25vh;
  width: 100%;
  margin: 23px 0;
`;

const BookmarksSide = ({ title }) => (
  <StyledWrapper data-testid="BookmarksSide-element">
    <StyledHeader data-testid="BookmarksSide-title">{title}</StyledHeader>
    <StyledButton addBookMark>Dodaj zakładkę</StyledButton>
    <StyledList>
      <StyledItem>
        <BookmarkListItem number={1} title="Samochody ekskluzywne">
          Opis ogłoszenia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non est
          ut mauris tempor euismod. Etiam lacinia tempor sollicitudin.
        </BookmarkListItem>
      </StyledItem>
      <StyledItem>
        <BookmarkListItem number={2} title="Samochody ekskluzywne">
          Opis ogłoszenia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non est
          ut mauris tempor euismod. Etiam lacinia tempor sollicitudin.
        </BookmarkListItem>
      </StyledItem>
      <StyledItem>
        <BookmarkListItem number={3} title="Samochody ekskluzywne">
          Opis ogłoszenia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non est
          ut mauris tempor euismod. Etiam lacinia tempor sollicitudin.
        </BookmarkListItem>
      </StyledItem>
    </StyledList>
  </StyledWrapper>
);

export default BookmarksSide;

BookmarksSide.propTypes = {
  title: PropTypes.string.isRequired,
};
