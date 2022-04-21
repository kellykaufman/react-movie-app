import React, { useState } from "react";

function SearchBar({ searchTerm, setSearchTerm, setMovieList }) {
  const getMoviesByName = async (name) => {
    let apiKey = "8e16e290";
    // accessing the API
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${name}`;
    // Get an object of detailed information about the specified movie
    const response = await fetch(url);
    // return an array of movies with a matching title from OMDb API
    const data = await response.json();
    setMovieList(data.Search);
    console.log(data);
  };

  function handleSubmit(e) {
    e.preventDefault();
    // const payload = { searchTerm };
    // console.log("This is the payload: ", payload);
    getMoviesByName(searchTerm);
    console.log("Search Term: ", searchTerm);
  }
  return (
    <>
      <form className="Movie-Form" onSubmit={handleSubmit}>
        <input
          className="Movie-Input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchBar;
