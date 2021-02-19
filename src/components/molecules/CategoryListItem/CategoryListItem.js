import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FolderOpen } from '@styled-icons/boxicons-regular/FolderOpen';

const StyledWrapper = styled.div`
  height: 29px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  transition: 0.3s;

  ${({ active }) =>
    active &&
    css`
      background-color: #b4bf5e;
    `}

  @media (min-width: 960px) {
    height: 40px;

    &:hover {
      background-color: #b4bf5e;
      cursor: pointer;
    }
  }
`;

const StyledIcon = styled(FolderOpen)`
  color: #b4bf5e;

  ${({ active }) =>
    active &&
    css`
      color: white;
    `}

  @media (min-width: 960px) {
    width: 30px;
    height: 30px;
  }
`;

const StyledName = styled.p`
  min-width: 30px;
  margin-left: 22px;
  color: white;

  @media (min-width: 960px) {
    font-size: 1.8rem;
  }
`;

const CategoryListItem = ({ name, active }) => (
  <StyledWrapper data-testid="CategoryListItem-element" active={active}>
    <StyledIcon size="20" active={active} />
    <StyledName data-testid="CategoryListItem-name">{name}</StyledName>
  </StyledWrapper>
);

export default CategoryListItem;

CategoryListItem.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

CategoryListItem.defaultProps = {
  active: false,
};
