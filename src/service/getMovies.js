import { get } from "./http";

const getMovies = async () => {
  try {
    return await get(``);
  } catch (err) {
    return err;
  }
};

export { getMovies };
