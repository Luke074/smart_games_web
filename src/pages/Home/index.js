import { Body, Container, FormCardGame, Header } from "./style";

function CardGame() {
  return (
    <FormCardGame>
      <header>Name</header>
      <div>
          <img src="" alt="" />
      </div>
      <body></body>
      <footer></footer>
    </FormCardGame>
  );
}

function Login() {
  return (
    <Container>
      <Header></Header>
      <Body>
        <CardGame />
        <CardGame />
        <CardGame />
      </Body>
    </Container>
  );
}

export default Login;
