import { movieData } from "./movieData";

const getMoviesById = async (id) => {
  const url = `https://www.omdbapi.com/?apikey=8e16e290&i=${id}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

getMoviesById("tt0848228");
export default getMoviesById;
