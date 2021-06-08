import React from "react";
import { Container } from "./styles";

const RadioButton = ({ checked, onChange, label }) => {
  return (
    <Container>
      <input type="radio" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </Container>
  );
};

export default RadioButton;
