import styled, { css } from 'styled-components';

const Input = styled.input`
  width: 137px;
  padding: 5px 15px;
  border-radius: 5px;
  border: none;

  @media (min-width: 400px) {
    width: 162px;
  }

  ${({ form }) =>
    form &&
    css`
      width: 75vw;

      :focus {
        border: 2px solid #485922;
        outline: none;
      }

      @media (min-width: 400px) {
        width: calc(100vw / 1.5);
      }
    `}

  ${({ search }) =>
    search &&
    css`
      height: 35px;
      width: 60vw;
      border-radius: 50px;

      :focus {
        outline: none;
      }

      @media (min-width: 400px) {
        width: 55vw;
      }
    `}
`;

export default Input;
