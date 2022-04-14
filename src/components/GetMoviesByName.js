import { MovieData } from "./movieData";

export const getMoviesByName = async (name) => {
  const url = `https://www.omdbapi.com/?apikey=8e16e290&s=${name}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

getMoviesByName("Call Me By Your Name");
