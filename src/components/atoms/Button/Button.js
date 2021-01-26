import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  width: 96px;
  height: 29px;
  border: none;
  font-size: 1.4rem;
  background-color: #818f41;
  color: white;
  border-radius: 10px;

  ${({ addBookMark }) =>
    addBookMark &&
    css`
      width: 120px;
      font-size: 1.2rem;
      background-color: #485922;
      border-radius: ${({ form }) => (form ? '12px' : '5px')};
      @media (min-width: 400px) {
        width: 150px;
        font-size: 1.4rem;
      }
    `}
`;

export default Button;
