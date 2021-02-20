import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  width: 96px;
  height: 29px;
  border: none;
  font-size: 1.4rem;
  font-family: 'Lato', 'sans-serif';
  background-color: #818f41;
  color: white;
  border-radius: 10px;

  ${({ addBookMark }) =>
    addBookMark &&
    css`
      height: 31px;
      width: 123px;
      font-size: 1.6rem;
      font-weight: bold;
      background-color: #485922;
      border-radius: ${({ form }) => (form ? '12px' : '5px')};
      text-transform: uppercase;

      @media (min-width: 400px) {
        width: 150px;
        font-size: 1.4rem;
      }
    `}
`;

export default Button;
