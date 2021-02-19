import styled, { css } from 'styled-components';

const Input = styled.input`
  width: 137px;
  padding: 5px 19px;
  border-radius: 5px;
  border: none;

  @media (min-width: 400px) {
    width: 162px;
  }

  ${({ form }) =>
    form &&
    css`
      width: 75vw;
      border: 2px solid black;

      :focus {
        border: 2px solid #485922;
        outline: none;
      }

      @media (min-width: 400px) {
        width: 100%;
      }
    `}

  ${({ search }) =>
    search &&
    css`
      height: 35px;
      width: 60vw;
      border-radius: 25px;

      :focus {
        outline: none;
      }

      @media (min-width: 400px) {
        width: 55vw;
      }

      @media (min-width: 540px) {
        width: 43vw;
      }

      @media (min-width: 960px) {
        width: 20vw;
      }

      @media (min-width: 1600px) {
        width: 12vw;
      }
    `}
`;

export default Input;
