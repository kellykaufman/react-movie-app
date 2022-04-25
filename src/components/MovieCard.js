import { useState } from "react";
import { Modal } from "./Modal";

export default function MovieCard(props) {
  console.log(props.movie);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="movie-card">
      <div>{props.movie.Title}</div>
      <div>{props.movie.Year}</div>
      <div>{props.movie.Rated}</div>
      <div>{props.movie.Released}</div>
      <div>{props.movie.Runtime}</div>
      <div>{props.movie.Genre}</div>
      <div>{props.movie.Director}</div>
      <div>{props.movie.Writer}</div>
      <div>{props.movie.Actors}</div>
      <div>{props.movie.Plot}</div>
      <div>{props.movie.Language}</div>
      <div>{props.movie.Country}</div>
      <div>{props.movie.Awards}</div>
      <div>{props.movie.Ratings}</div>
      <div>{props.movie.Metascore}</div>
      <div>{props.movie.imdbRating}</div>
      <div>{props.movie.imdbVotes}</div>
      <div>{props.movie.imdbID}</div>
      <img src={props.movie.Poster} onClick={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <Modal
          isModelOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          movieModal={props.movie}
        />
      )}
    </div>
  );
}
