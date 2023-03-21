import styled from 'styled-components';

export const Wrap = styled.div`
  background-color: rgb(211, 4, 4);
  opacity: 90%;
  text-align: center;
  padding: 5% 0;
  color: rgb(255, 166, 0);
  margin: 5%;

  @media (min-width: 768px) {
    margin: 5% 10% 10% 10%;
  }
  @media (min-width: 1024px) {
    margin: 5% 10% 10% 10%;
    padding: 10px;
  }
`;
export const Title = styled.h3`
  @media (max-width: 420px) {
    font-size: small;
  }
  @media (min-width: 768px) {
    font-size: large;
  }
  @media (min-width: 1024px) {
    font-size: x-large;
  }
`;
