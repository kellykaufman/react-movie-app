const getMoviesById = async (id) => {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

getMoviesById(2);
export default getMoviesById;
