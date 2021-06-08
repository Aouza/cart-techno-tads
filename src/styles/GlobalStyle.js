import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body, html{
    height: 100%;
    background-color: #f4f4f4;
}

input, button{
    border: 0;
    outline: none;
    background: none;
    display: block;
}

button{
    cursor: pointer;
}

ul {
    list-style: none;
}

`;
