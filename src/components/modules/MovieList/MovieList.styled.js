import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ol`
  position: relative;
  display: block;
  overflow: overlay;
  box-sizing: border-box;
  margin: 0 auto;

  list-style: none;
  text-align: start;
  height: 100%;
  background-color: rgb(211, 4, 4);
  color: rgb(211, 4, 4);
  margin-bottom: 30px;
  border: 1px dashed rgb(255, 166, 0);

  @media (max-width: 767px) {
    width: 75%;
    padding: 10px;
  }
  @media (min-width: 768px) {
    width: 65%;
    padding: 30px;
  }
  @media (min-width: 1020px) {
    width: 55%;
    padding: 40px;
  }
`;

export const StyledLink = styled(Link)`
  margin-bottom: 6px;
  padding-left: 10%;
  padding-right: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: white;
  font-size: 13px;

  @media (max-width: 419px) {
    font-size: 13px;
  }
  @media (min-width: 420px) {
    font-size: medium;
  }
  @media (min-width: 768px) {
    font-size: large;
  }
  @media (min-width: 1020) {
    font-size: larger;
  }
  // /* font-weight: bold; */
`;
// .link {
//   margin-bottom: 6px;
//   padding-left: 10%;
//   padding-right: 10%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   text-decoration: none;
//   color: white;

//   font-size: larger;
//   /* font-weight: bold; */
// }

// .link:hover {
//   color: rgb(255, 166, 0);
// }
