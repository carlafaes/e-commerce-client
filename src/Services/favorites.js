import axios from "axios";

const setFavorite = async (productId, userId) => {
  return (
    await axios.post(`/api/favorite`, {
      productId,
      userId,
    })
  ).data;
};

const favoritesService = {
  setFavorite,
};

export default favoritesService;
