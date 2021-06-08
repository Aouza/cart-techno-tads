import styled from "styled-components";

export const Container = styled.footer`
  background-color: #000000;

  > div {
    max-width: 75rem;
    margin: 0 auto;
    height: 6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    > p {
      color: #ffffff;
      font-size: 0.9rem;
    }
  }
`;
