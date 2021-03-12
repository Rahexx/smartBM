/* eslint-disable array-callback-return */
import React from 'react';
import AppContext from 'context';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import BookmarkListItem from 'components/molecules/BookmarkListItem/BookmarkListItem';

// Styled components

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 25px 0 0 30px;
  position: relative;
  background-color: #798c35;

  @media (min-width: 960px) {
    width: 67vw;
    padding: 25px 0 0 0;
    left: 33vw;
  }

  @media (min-width: 1600px) {
    width: 82vw;
    left: 18vw;
  }
`;

const StyledHeader = styled.h2`
  margin: 0 0 30px 15px;
  height: 29px;
  text-align: left;
  color: white;

  @media (min-width: 720px) {
    margin: 0 0 30px 30px;
  }

  @media (min-width: 960px) {
    height: 40px;
    font-size: 3.3rem;
  }

  @media (min-width: 1600px) {
    margin: 0 0 30px 80px;
  }
`;

const StyledButton = styled(Button)`
  margin-left: 15px;

  @media (min-width: 720px) {
    margin-left: 30px;
  }

  @media (min-width: 960px) {
    &:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 1600px) {
    margin-left: 80px;
  }
`;

const StyledList = styled.ul`
  min-height: 350px;
  width: calc(100vw - 25px);
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  list-style: none;

  @media (min-width: 540px) {
    margin-top: 13px;
  }

  @media (min-width: 960px) {
    width: 67vw;
  }
`;

const StyledItem = styled.li`
  height: 25vh;
  width: 100%;
  margin: 23px 0;

  @media (min-width: 540px) {
    height: 33vh;
  }

  @media (min-width: 960px) {
    height: 20vh;
  }
`;

const BookmarksSide = () => {
  const handleClickButton = () => {
    const popUpBookmark = document.querySelector('.popUpBookmark');

    popUpBookmark.style.display = 'flex';
  };

  return (
    <AppContext.Consumer>
      {(context) => (
        <StyledWrapper data-testid="BookmarksSide-element">
          <StyledHeader data-testid="BookmarksSide-title">
            {context.active ? context.active : ' '}
          </StyledHeader>
          {context.active ? (
            <StyledButton addBookMark onClick={handleClickButton}>
              Dodaj zakładkę
            </StyledButton>
          ) : (
            ''
          )}

          <StyledList>
            {context.categoryStore.map((item) =>
              item.bookmarks.map(
                (bookmark, index) =>
                  item.name === context.active && (
                    <StyledItem key={bookmark.title}>
                      <BookmarkListItem number={index + 1} title={bookmark.title}>
                        {bookmark.description}
                      </BookmarkListItem>
                    </StyledItem>
                  ),
              ),
            )}
          </StyledList>
        </StyledWrapper>
      )}
    </AppContext.Consumer>
  );
};

export default BookmarksSide;
