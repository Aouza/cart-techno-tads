import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-space-around;

  button {
    font-weight: bold;
    &:first-child {
      background-color: #fafafa;
      width: 25px;
      height: 25px;
      border-radius: 100%;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    }
    &:last-child {
      background-color: #000000;
      width: 25px;
      height: 25px;
      border-radius: 100%;
      color: #fafafa;
    }
  }

  > input {
    width: 50px;
    text-align: center;
    height: 40px;
    background-color: #f4f4f4;
    border-radius: 0.5rem;
    margin: 0.2rem;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      display: none;
      --webkit-appearance: none;
      margin: 0;
    }
  }
`;
