import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --dark: #000000;
        --light: #ffffff;
        --redLight: #f72323;
        --roxy: #a63ce8;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;

    }
    body{
        font-family: Arial, Helvetica, sans-serif;
    }
    button{
        width: 120px;
        height: 40px;
        background-color: var(--dark);
        color: white;
        font-size: 1.2em;
        border-radius: 10px;
        margin-bottom: 5px;

        :hover{
            background-color: red;
            cursor: pointer;
        }
    }

`;
