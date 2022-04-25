import ReactModal from "react-modal";

export function Modal({ isModalOpen, movieModal, setIsModalOpen }) {
  return (
    <div className="movie-modal">
      <button onClick={() => setIsModalOpen(false)}>X</button>
      <div>{movieModal.Title}</div>
      <div>{movieModal.Year}</div>
      <div>{movieModal.Rated}</div>
      <div>{movieModal.Released}</div>
      <div>{movieModal.Runtime}</div>
      <div>{movieModal.imdbRating}</div>
    </div>
  );
}
