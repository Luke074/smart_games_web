
export const getGame = () => {
  const { games } = JSON.parse(localStorage.getItem());

  return games;
};
