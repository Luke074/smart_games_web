import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 300px;
    height: auto;
    background-color: aqua;

    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Header = styled.header`
    width: inherit;
    height: 120px;
    background-color: khaki;
`;

export const Body = styled.body`
    width: inherit;
    min-height: 500px;
    height: auto;
    background-color: lightblue;
    padding: 10px;
    margin-top: 10px;

    display: flex;
    justify-content: space-evenly;
`;

export const FormCardGame = styled.div`
    width: 350px;
    height: 300px;
    border: solid 1px #000;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    header{
        width: 100%;
        height: 10%;
        background-color: lawngreen;
        padding: 7px;

        display: flex;
        justify-content: center;
    }

    div{
        width: 100%;
        height: 30%;
    }

    body{
        width: inherit;
        height: 30%;
    }
    footer{
        width: inherit;
        height: 30%;
    }

`;