// import logo from "./logo.svg";
// import "./App.css";
// import GetMovieId from "./components/GetMoviesById";
// import { GetMoviesByName } from "./components/GetMoviesByName";
import { MovieDetails } from "./components/MovieDetails";
import { movieData } from "./components/movieData";
import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      {/* <GetMovieId /> */}
      {/* <GetMoviesByName /> */}
      <MovieDetails movieData={movieData} />
    </div>
  );
}

export default App;
