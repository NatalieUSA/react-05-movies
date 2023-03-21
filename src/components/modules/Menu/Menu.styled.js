import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  background-color: rgb(211, 4, 4);
  padding: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  text-align: center;
  padding: 10px 30px;
  width: 180px;
  font-size: large;
  border: 1px solid rgb(255, 166, 0);
  margin-right: 8px;
  padding: 10px 30px;
  transition-duration: 0.4s;
  transition-timing-function: ease;
  font-size: 15px;
  letter-spacing: 2px;
  font-family: 'futura-demic-reg', Arial, sans-serif;

  @media (min-width: 768px) {
    display: inline-block;

    font-size: 15px;
    padding: 10px 30px;
    width: 180px;
  }

  $:global(.active) {
    text-transform: uppercase;
    font-weight: 700;
    color: rgb(211, 4, 4);

    background-color: rgb(255, 166, 0);
  }

  // &:global(.active) {
  //   text-transform: uppercase;
  //   font-weight: 700;
  //   color: rgb(211, 4, 4);

  //   background-color: rgb(255, 166, 0);
  // }
`;

// export const YellowNavLink = styled(StyledNavLink)`
//   &:global(.active) {
//     text-transform: uppercase;
//     font-weight: 700;
//     color: rgb(211, 4, 4);
//     background-color: rgb(255, 166, 0);
//   }
// `;

// export const ActiveNavLink = StyledNavLink`

// `;
