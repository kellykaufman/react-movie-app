// import logo from "./logo.svg";
// import "./App.css";
// import GetMovieId from "./components/GetMoviesById";
// import { GetMoviesByName } from "./components/GetMoviesByName";
import { MovieDetails } from "./components/MovieDetails";
import { movieData } from "./components/movieData";
import { useState, useEffect } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("Zola");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() =>
  async function )

  return (
    <div>
      {/* <GetMovieId /> */}
      {/* <GetMoviesByName /> */}
      <MovieDetails movieData={movieData} />
    </div>
  );
}

export default App;
