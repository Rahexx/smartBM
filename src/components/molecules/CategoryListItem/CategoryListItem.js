import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FolderOpen } from '@styled-icons/boxicons-regular/FolderOpen';

const StyledWrapper = styled.div`
  height: 29px;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: transparent;

  ${({ active }) =>
    active &&
    css`
      background-color: #b4bf5e;
    `}
`;

const StyledIcon = styled(FolderOpen)`
  color: #b4bf5e;

  ${({ active }) =>
    active &&
    css`
      color: white;
    `}
`;

const StyledName = styled.p`
  min-width: 30px;
  margin-left: 22px;
  color: white;
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
