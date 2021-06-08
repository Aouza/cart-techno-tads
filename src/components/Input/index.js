import React from "react";
import { Container } from "./styles";

const Input = ({ type, label, id, name, placeholder, value, onChange }) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default Input;
