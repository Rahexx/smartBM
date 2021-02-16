import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const MainTemplate = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
