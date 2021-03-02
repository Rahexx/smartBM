import React from 'react';
import AppContext from 'context';
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

const CategoryListItem = ({ name }) => {
  const handlingChangeActive = (context, e) => {
    const tag = e.target.tagName;

    switch (tag) {
      case 'P': {
        const text = e.target.textContent;
        context.changeActive(text);
        break;
      }
      case 'DIV': {
        const child = e.target.childNodes[1];
        const text = child.textContent;
        context.changeActive(text);
        break;
      }
      case 'svg': {
        const sibling = e.target.nextSibling;
        const text = sibling.textContent;
        context.changeActive(text);
        break;
      }
      default: {
        const parent = e.target.parentNode;
        const sibling = parent.nextSibling;
        const text = sibling.textContent;
        context.changeActive(text);
      }
    }
  };

  return (
    <AppContext.Consumer>
      {(context) => (
        <StyledWrapper
          data-testid="CategoryListItem-element"
          active={context.active === name}
          onClick={(e) => handlingChangeActive(context, e)}
        >
          <StyledIcon size="20" active={context.active === name} />
          <StyledName data-testid="CategoryListItem-name">{name}</StyledName>
        </StyledWrapper>
      )}
    </AppContext.Consumer>
  );
};

export default CategoryListItem;

CategoryListItem.propTypes = {
  name: PropTypes.string.isRequired,
};
