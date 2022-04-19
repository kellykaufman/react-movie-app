// import logo from "./logo.svg";
// import "./App.scss";
// import {GetMovieId from} "./components/GetMoviesById";
import { GetMoviesByName } from "./utils";
import { MovieDetails } from "./components/MovieDetails";
import { movieData } from "./components/movieData";
import React from "react";
import { getMoviesByName } from "./utils";
// import { useState, useEffect } from "react";

function App() {
  // const [searchTerm, setSearchTerm] = useState("Zola");
  // const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = React.useState("");
  // const [error, setError] = useState(null);
  React.useEffect(() => {
    const getMoviesByName = async (name) => {
      let apiKey = "8e16e290";
      // accessing the API
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${name}`;
      // Get an object of detailed information about the specified movie
      const response = await fetch(url);
      // return an array of movies with a matching title from OMDb API
      const data = await response.json();
      console.log(data);
      setMovie(data);
    };
    getMoviesByName("batman");
  }, []);

  return (
    <div>
      {/* <GetMovieId /> */}
      {/* <GetMoviesByName /> */}
      <MovieDetails movieData={movieData} movie={movie} />
    </div>
  );
}

export default App;
