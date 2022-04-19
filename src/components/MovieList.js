import React from "react";
import MovieCard from "./MovieCard";

function movieList(props) {
  console.log(props.movieList);
  return (
    <div className="movie-list">
      {props.movieList.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}

export default movieList;
