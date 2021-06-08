import React from "react";
import { Container } from "./styles";
const Header = () => {
  return (
    <Container>
      <div>
        <span>LOGO</span>
        <input type="text" placeholder="aqui tem de tudo" />
        <span>icone</span>
        <span>cart</span>
      </div>
    </Container>
  );
};

export default Header;
