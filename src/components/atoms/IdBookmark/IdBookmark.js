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
    font-size: 3.3rem;
    margin-left: 15px;
  }
`;

export default IdBookmark;
