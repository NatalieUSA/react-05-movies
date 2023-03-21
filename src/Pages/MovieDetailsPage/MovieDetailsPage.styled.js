import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wraper = styled.div`
  background-color: rgb(211, 4, 4);
  margin: 7%;
  padding: 3% 0;
  color: white;
  position: relative;
  @media (min-width: 1024px) {
    margin: 10%;
  } ;
`;

export const Wrap = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: inline-block;

  @media (min-width: 1024px) {
    display: flex;
    gap: 10px;
    padding: 50px;
  }
`;
export const PosterLinkWrap = styled.div`
  position: relative;
  display: flex;

  @media (min-width: 1024px) {
    gap: 10px;
    height: 500px;
  } ;
`;

export const StyledLink = styled(Link)`
  background-color: rgb(255, 166, 0);
  border: none;
  cursor: pointer;
  margin-left: 10px;

  @media (min-width: 1024px) {
    margin: 50px, 200px, 0, 10px;

    padding: 230px 5px;
    margin-left: -40px;
  }

  span {
    width: 35px;
    display: inline-block;
    color: red;
    transform: rotate(-90deg);
    text-align: center;

    @media (min-width: 420px) {
      font-size: 15px;
      text-align: center;
    }

    @media (min-width: 1024px) {
      margin-top: auto;
      margin-bottom: auto;
      width: 40px;
      font-size: 15px;
    }
  }
`;

export const Poster = styled.img`
  height: 400px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 420px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    height: 500px;
    margin-left: 10px;
  }
`;

export const Text = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;

  @media (min-width: 1024px) {
    height: 500px;
    border-right: 1px dashed white;
  }
`;

export const Genres = styled.p`
  display: flex;
  flex-direction: column;
`;

export const Overview = styled.div`
  padding: 0 40px;
  @media (min-width: 1024px) {
    width: 30%;
    padding: 0;
  } ;
`;

export const MovieDetails = styled.ul`
  padding: 0;
  width: 50%;
  height: 100px;
  margin-left: 30px;
`;

export const StyledLinkInfo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: rgb(211, 4, 4);
  font-weight: bold;
  font-size: large;
  text-transform: uppercase;
  margin-bottom: 10px;
  padding: 0 11%;
  background-color: rgb(247, 141, 3);

  :hover {
    color: rgb(255, 196, 0);
  }
`;
