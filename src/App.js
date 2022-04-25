// import {GetMovieId from} "./components/GetMoviesById";
import { GetMoviesByName } from "./utils";
import { MovieDetails } from "./components/MovieDetails";
import { movieData } from "./components/movieData";
import React from "react";
import { getMoviesByName } from "./utils";
import MovieList from "./components/MovieList";
import SearchForm from "./components/SearchForm";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import MovieCard from "./components/MovieCard";
import Modal from "./components/Modal";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Zola");

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
      setMovieList(data.Search);
    };
    getMoviesByName(searchTerm);
  }, []);

  return (
    <div>
      {/* <GetMovieId /> */}
      {/* <GetMoviesByName /> */}
      {/* <MovieDetails movieData={movieData} movieList={movieList} /> */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setMovieList={setMovieList}
      />
      <MovieCard />
      <MovieList movieList={movieList} />
      <SearchForm />
      <Modal isModelOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default App;
