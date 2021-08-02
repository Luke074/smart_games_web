import {
  ButtonContainer,
  Container,
  FormCardGame,
  GamesBuy,
  Header,
  ImageContainer,
  Information,
  ModalContainer,
  Overlay,
} from "./style";
import logotipo from "../../assets/smart_games.png";
import imgQRcode from "../../assets/qrcode.png";
import { useEffect, useState } from "react";
import Tag from "../../components/tag";
import { api } from "../../service/api";
// import QRCode from "qrcode.react";

function Home() {
  const [games, setGames] = useState([]);
  const [gamesId, setGamesId] = useState([]);
  const [show, setShow] = useState(false);

  const loadGames = async () => {
    const response = await api.get("/games");
    setGames(response.data);
  };

  const openModal = async (e) => {
    setShow(true);
    setGamesId(e);
  };

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <>
      {show && (
        <Overlay>
          <ModalContainer>
            <span onClick={() => setShow(false)}>&times;</span>
            <header>{gamesId.name}</header>
            <ImageContainer>
              <img src={gamesId.image} alt="Game" />
              <div>
                <h2>R${gamesId.price.toFixed(2)}</h2>
                {gamesId.description}
              </div>
            </ImageContainer>
            <Information>
              <div>
                <article>
                  <Tag info="PS4" />
                  <Tag info="PC" />
                  <Tag info="XBox" />
                  {gamesId.Plataforms.map((plataforms) => {
                    <Tag info={plataforms.name} />;
                  })}
                </article>
                <article>
                  <Tag info="União" />
                  <Tag info="Tamboré" />
                  <Tag info="Iguatemi" />
                  {gamesId.Stores.map((store) => {
                    <Tag info={store.name} />;
                  })}
                </article>
              </div>
              <section>
                {/* <QRCode valeu={gamesId.id} /> */}
                <img src={imgQRcode} alt="qrcode" />
              </section>
            </Information>
            <ButtonContainer>
              <button>Comprar</button>
            </ButtonContainer>
          </ModalContainer>
        </Overlay>
      )}

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
                <Tag info="PS4" />
                {games.Plataforms.map((plataforms) => {
                  <Tag info={plataforms.name} />;
                })}
              </div>
              <div>
                <h3>Preço: R$ {games.price.toFixed(2)}</h3>
              </div>
              <button onClick={() => openModal(games)}>Detalhes</button>
            </FormCardGame>
          ))}
        </GamesBuy>
      </Container>
    </>
  );
}

export default Home;
