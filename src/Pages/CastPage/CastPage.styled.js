import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
  padding: 0;
  @media (max-width: 767px) {
    gap: 10px;
  } ;
`;

export const Total = styled.h2`
  color: white;
  padding: 0 5% 1% 1%;
  margin: 0 5%;
  width: 100%;

  @media (min-width: 1024px) {
    color: white;
    padding: 0 10% 10% 6%;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  // object-fit: cover;

  @media (max-width: 1023px) {
    width: calc((100% - 30px) / 6);
  }
  @media (min-width: 1024px) {
    width: calc((100% - 30px) / 8);
  }
`;

// .info {
//   font-size: large;
//   color: white;
//   text-align: center;
//   padding: 0 10% 10% 6%;
// }
