import { getMovies } from "../../service/getMovies";
import { store } from "../../store";
import { setAllmovies } from "../reducers/movies";

const getMoviesAction = async () => {
  const result = await getMovies();
  if (result.status === 200) {
    store.dispatch(setAllmovies(result.data));
  }
  return result;
};

export { getMoviesAction };
