import styled from 'styled-components';

const IdBookmark = styled.p`
  height: 42px;
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.8rem;
  font-weight: bold;
  border-radius: 50px;
  color: #b4bf5e;
  background-color: #242614;

  @media (min-width: 720px) {
    height: 57px;
    width: 57px;
    margin-left: 15px;
    font-size: 3.3rem;
  }

  @media (min-width: 1600px) {
    height: 72px;
    width: 72px;
    margin-left: 75px;
    font-size: 3.8rem;
  }
`;

export default IdBookmark;
