import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IdBookmark from 'components/atoms/IdBookmark/IdBookmark';
import { Trash } from '@styled-icons/boxicons-regular/Trash';

const StyledWrapper = styled.div`
  height: 25vh;
  width: calc(100vw - 25px);
  padding: 10px 15px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #b4bf5e;

  @media (min-width: 540px) {
    height: 33vh;
  }
`;

const StyledInnerWrapper = styled.div`
  width: 75%;
  height: 90%;
  overflow-y: scroll;

  @media (min-width: 540px) {
    width: 80%;
    padding-right: 30px;
  }
`;

const StyledTitleBookmark = styled.h3`
  margin-bottom: 13px;
  width: 80%;
  font-size: 1.6rem;
  text-align: left;
  color: white;
`;

const StyledText = styled.p`
  font-size: 1.3rem;
  color: white;
`;

const StyledDelete = styled.p`
  height: 30px;
  width: 30px;
  position: absolute;
  top: 9px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #485922;
  border-radius: 50px;

  @media (min-width: 720px) {
    height: 35px;
    width: 35px;
  }
`;

const StyledIconTrash = styled(Trash)`
  color: #b4bf5e;

  @media (min-width: 720px) {
    height: 23px;
    width: 23px;
  }
`;

const BookmarkListItem = ({ number, title, children }) => (
  <StyledWrapper data-testid="BookmarkListItem-element">
    <IdBookmark data-testid="BookmarkListItem-number">{number}</IdBookmark>
    <StyledInnerWrapper>
      <StyledTitleBookmark data-testid="BookmarkListItem-title">{title}</StyledTitleBookmark>
      <StyledText data-testid="BookmarkListItem-description">{children}</StyledText>
    </StyledInnerWrapper>
    <StyledDelete>
      <StyledIconTrash size="20" />
    </StyledDelete>
  </StyledWrapper>
);

export default BookmarkListItem;

BookmarkListItem.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.string,
};

BookmarkListItem.defaultProps = {
  children: '',
};
