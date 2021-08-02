import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 300px;
  height: auto;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.header`
  width: inherit;
  height: 20vh;
  background-color: rebeccapurple;
  padding: 10px;

  display: flex;
  align-items: center;

  img {
    width: 160px;
    height: 90px;
    border-radius: 7px;
  }
`;

export const GamesBuy = styled.div`
  width: inherit;
  min-height: 400px;
  height: auto;
  padding: 10px;
  background-color: gray;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const FormCardGame = styled.div`
  width: 300px;
  min-height: 300px;
  height: auto;
  border: solid 1px #000;
  border-radius: 12px;
  background-color: white;
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  header {
    width: inherit;
    height: 50px;
    padding: 5px 0px;

    font-size: 1.2em;
    text-align-last: center;
  }

  img {
    width: 60%;
    height: 230px;
    border-radius: 4px;
    margin-bottom: 5px;
  }

  div {
    width: inherit;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;
