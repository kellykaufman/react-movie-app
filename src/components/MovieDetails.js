import React from "react";

export const MovieDetails = ({ movieData }) => {
  console.log(movieData);
  return (
    <div>
      <div className="Poster">
        <b>Poster: </b>
        {movieData.Poster}
      </div>
      <div className="Title">
        <b>Title: </b>
        {movieData.Title}
      </div>
      <div className="Rated">
        <b>Rated: </b>
        {movieData.Rated}
      </div>
      <div className="Runtime">
        <b>Runtime: </b>
        {movieData.Runtime}
      </div>
      <div className="Genre">
        <b>Genre: </b>
        {movieData.Genre}
      </div>
      <div className="Plot">
        <b>Plot: </b>
        {movieData.Plot}
      </div>
      <div className="Actors">
        <b>Actors: </b>
        {movieData.Actors}
      </div>
      <div className="Rating">
        <b>Rating: </b>
        {movieData.Rating}
      </div>
    </div>
  );
};
