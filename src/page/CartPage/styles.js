import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 12rem);
  > div {
    max-width: 75rem;
    height: 100%;
    margin: 0 auto;
    padding: 0 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 1160px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const AddressSide = styled.div`
  padding: 2rem;

  form {
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      width: 100%;

      > div {
        flex: 1;
      }

      > & + div {
        margin-top: 20px;
      }

      input {
        background-color: #ffffff;
        padding: 0.8rem 1rem;
        flex: 1;
        border-radius: 0.3rem;
      }
    }
  }
`;

export const PaymentWrapper = styled.div`
  display: block !important;

  > h2 {
    margin: 2rem 0;
  }

  > div {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const CartSide = styled.div`
  background: #fafafa;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  border-radius: 1rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6rem;
  }

  > main {
    background: #f4f4f4;
    height: 30rem;
    padding: 2rem;
    border-radius: 30px 30px 0 0;
    overflow-y: auto;
  }

  > div {
    background-color: #f4f4f4;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;

    button {
      background-color: #000000;
      padding: 0.6rem 1.6rem;
      border-radius: 0.3rem;
      color: #ffffff;
    }
  }
`;
export const CartList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    border-radius: 20px;
    gap: 3rem;
    background-color: #ffffff;
    overflow: hidden;
    padding: 1rem;
    box-shadow: 2px 2px 20px rgba(206, 206, 206, 0.1);

    > img {
      width: 80px;
    }

    > aside {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      > button {
        font-size: 0.8rem;
        color: tomato;
      }
    }

    > div {
      h2 {
        font-size: 0.8rem;
      }
    }
  }
`;
