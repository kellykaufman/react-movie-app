import ReactModal from "react-modal";

export function Modal({ isModalOpen, movieModal, setIsModalOpen }) {
  return (
    <div className="movie-modal">
      {movieModal.Title}
      {movieModal.Rating}
      {movieModal.Runtime}
      {movieModal.Genre}
      {movieModal.Plot}
      {movieModal.Actors}
    </div>
  );
}
