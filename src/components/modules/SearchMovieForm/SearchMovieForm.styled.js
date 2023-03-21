import styled from 'styled-components';

export const Wrap = styled.div`
  background-color: white;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 50px;
  opacity: 80%;

  @media (max-width: 768px) {
    width: 90%;
    padding: 7px 7px;
  } ;
`;

export const Form = styled.form`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const Input = styled.input`
  background: transparent;
  text-align: center;
  border: none;
  outline: none;
  color: rgb(211, 4, 4);
  border-bottom: 1px solid rgb(255, 166, 0);
  width: 100%;

  @media (min-width: 768px) {
    width: 200%;
    margin-right: 10px;
    font-size: large;
    margin-bottom: 0px;
  }
`;

export const Button = styled.button`
  border: 1px solid rgb(211, 4, 4);
  background: transparent;
  padding: 5px 5px;
  color: rgb(211, 4, 4);
  cursor: pointer;
  transition: all 0.5s ease;
  letter-spacing: 2px;
  font-size: 12px;
  font-family: 'futura-demic-reg', Arial, sans-serif;

  @media (min-width: 768px) {
   font-size: 15px;
     padding: 10px 50px;
  }

  :hover {
  font-weight: 700;
  color: rgb(211, 4, 4);
  border: 1px solid rgb(255, 166, 0);
  background-color: rgb(255, 166, 0);
`;
