import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FolderOpen } from '@styled-icons/boxicons-regular/FolderOpen';

const StyledWrapper = styled.div`
  height: 29px;
  width: 100vw;
  padding-left: 17px;
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(FolderOpen)`
  color: #b4bf5e;
`;

const StyledName = styled.p`
  min-width: 30px;
  margin-left: 22px;
  color: white;
`;

const CategoryListItem = ({ name }) => (
  <StyledWrapper>
    <StyledIcon size="20" />
    <StyledName>{name}</StyledName>
  </StyledWrapper>
);

export default CategoryListItem;

CategoryListItem.propTypes = {
  name: PropTypes.string.isRequired,
};
