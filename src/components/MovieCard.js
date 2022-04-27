import { useState } from "react";
import { Modal } from "./Modal";
import { getMoviesDetailsById } from "../utils";

export default function MovieCard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailsInModal, setDetailsInModal] = useState({});
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
      <img
        alt="Movie Poster"
        src={props.movie.Poster}
        onClick={() => {
          setIsModalOpen(true);
          getMoviesDetailsById(props.movie.imdbID).then((result) =>
            setDetailsInModal(result)
          );
        }}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          detailsInModal={detailsInModal}
        />
      )}
    </div>
  );
}
