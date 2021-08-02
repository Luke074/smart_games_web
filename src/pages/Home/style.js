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
  height: 80vh;
  padding: 10px;
  overflow: auto;
  background-color: gray;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const FormCardGame = styled.form`
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
    width: 65%;
    height: 240px;
    border-radius: 4px;
    margin-bottom: 7px;
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

export const Overlay = styled.div`
  position: absolute;
  overflow-x: hidden;

  width: 100%;
  height: 100%;
  z-index: 9;

  background-color: #333C;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.section`
  min-width: 500px;
  max-width: 70vw;
  min-height: 500px;
  max-height: calc(100vh - 20px);
  overflow: hidden;

  padding: 20px;
  z-index: 19;
  overflow-y: auto;

  background-color: var(--light);
  box-shadow: 0px 0px 10px black;
  border-radius: 5px;
  position: relative;

  >span{
    position: absolute;
    top: 15px;
    right: 20px;
    color: red;

    font-size: 30px;
    cursor: pointer;
    transition: 0.3s;

    :hover{
      color: var(--dark);
    }
  }

  >header{
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin: 0px 15px;
  }
`;

export const ImageContainer = styled.div`
  width: inherit;
  height: 250px;
  padding: 10px;
  margin-bottom: 10px;
  
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img{
    width: 25%;
    height: inherit;
  }
  div{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    width: 70%;
    height: inherit;
    padding: 15px;
    >h2{
      margin-bottom: 10px;
    }
  }
`;

export const Information = styled.section`
  width: inherit;
  height: 100px;
  margin-top: 5px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;

  section{
    width: 20%;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    >img{
      width: 80%;
      height: 100%;
    }
  }
  div{
    width: 70%;
    height: inherit;
    padding: 10px;
    display: flex;
    flex-direction: column;

    > article{
      width: inherit;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;
      padding-top: 5px;
      margin: 5px;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: inherit;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
