import { Container, FormCardGame, GamesBuy, Header } from "./style";
import logotipo from "../../assets/smart_games.png";
import { useEffect, useState } from "react";
import Tag from "../../components/tag";
import { api } from "../../service/api";
import Modal from "../../components/modal";

function Home() {
  const [games, setGames] = useState([]);
  const [show, setShow] = useState();

  const loadGames = async () => {
    const response = await api.get("/games");
    setGames(response.data);
  };

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <>
      {show && <Modal title="Jogo" handleClose={() => setShow(false)}></Modal>}
      <Container>
        <Header>
          <img src={logotipo} alt="logo" />
        </Header>
        <GamesBuy>
          {games.map((games) => (
            <FormCardGame>
              <header>{games.name}</header>
              <img src={games.image} alt="Game" />
              <h4>Plataformas</h4>
              <div>
                <Tag info={games.Plataforms.name} />
              </div>
              <div>
                <h3>Preço: {games.price}</h3>
              </div>
              <button onClick={() => setShow(true)}>Detalhes</button>
            </FormCardGame>
          ))}
        </GamesBuy>
      </Container>
    </>
  );
}

export default Home;
