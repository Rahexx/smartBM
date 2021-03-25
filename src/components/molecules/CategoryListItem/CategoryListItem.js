import React from 'react';
import AppContext from 'context';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FolderOpen } from '@styled-icons/boxicons-regular/FolderOpen';

const StyledWrapper = styled.div`
  height: 29px;
  width: 98%;
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

  ${StyledWrapper}:hover & {
    color: white;
  }

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

const CategoryListItem = ({ name, id }) => {
  const handlingChangeActive = (context, e) => {
    const { target } = e;
    const tag = target.tagName;

    switch (tag) {
      case 'P': {
        const parent = target.parentElement;
        const idCategory = parent.dataset.id;

        context.changeActive(idCategory);
        break;
      }
      case 'DIV': {
        const idCategory = target.dataset.id;
        context.changeActive(idCategory);
        break;
      }
      case 'svg': {
        const parent = target.parentElement;
        const idCategory = parent.dataset.id;
        context.changeActive(idCategory);
        break;
      }
      default: {
        const parent = e.target.parentNode;
        const sibling = parent.nextSibling;
        const idCategory = sibling.dataset.id;
        context.changeActive(idCategory);
      }
    }
  };

  return (
    <AppContext.Consumer>
      {(context) => (
        <StyledWrapper
          data-testid="CategoryListItem-element"
          data-id={id}
          active={Number(context.active) === Number(id)}
          onClick={(e) => handlingChangeActive(context, e)}
        >
          <StyledIcon size="20" active={Number(context.active) === Number(id)} />
          <StyledName className="categoryItem" data-testid="CategoryListItem-name">
            {name}
          </StyledName>
        </StyledWrapper>
      )}
    </AppContext.Consumer>
  );
};

export default CategoryListItem;

CategoryListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
