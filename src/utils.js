// Declare variable for the search input and create a function to get the movie details
export const getMoviesByName = async (name) => {
  let apiKey = "8e16e290";
  // accessing the API
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${name}`;
  // Get an object of detailed information about the specified movie
  const response = await fetch(url);
  // return an array of movies with a matching title from OMDb API
  const data = await response.json();
  console.log(data);
};
getMoviesByName("Jacob's Ladder");
// Declare variable for the search input and create a function to get the movie details
export const getMoviesDetailsById = async (id) => {
  let apiKey = "8e16e290";
  // accessing the API
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
  // Get an array of movies with a matching id from OMDb API
  const response = await fetch(url);
  // get an object of detailed information about the specified movie
  const data = await response.json();
  // console.log("movie by ID data: ", data);
  return data;
};
// getMoviesDetailsById("tt0046754");
