import styled from "styled-components";

export const Container = styled.header`
  background-color: #efefef;
  > div {
    max-width: 75rem;
    margin: 0 auto;
    height: 6rem;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;

    @media (max-width: 680px) {
      gap: 0.5rem;
    }

    img {
      width: 240px;
      margin: 0 1rem;

      @media (max-width: 680px) {
        width: 100px;
      }
    }

    > input {
      flex: 1;
      padding: 0.8rem 1rem;
      border-radius: 0.3rem;
      background-color: #ffffff;
    }

    span {
      margin: 0 1rem;
      a {
        color: #000000;
      }
    }
  }
`;
