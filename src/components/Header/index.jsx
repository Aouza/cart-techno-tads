import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import { MdShoppingCart, MdPerson } from "react-icons/md";

import Logo from "../../assets/images/logo/logo.png";
const Header = () => {
  return (
    <Container>
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo Techno Tads" />
        </Link>

        <input type="text" placeholder="aqui tem de tudo" />
        <span>
          <Link to="/cart">
            <MdShoppingCart size={25} />
          </Link>
        </span>
        <span>
          <MdPerson size={30} />
        </span>
      </div>
    </Container>
  );
};

export default Header;
