import ReactModal from "react-modal";

export function Modal({ isModalOpen, detailsInModal, setIsModalOpen }) {
  return (
    <div className="movie-modal">
      <button onClick={() => setIsModalOpen(false)}>X</button>
      <div>{detailsInModal.Title}</div>
      <div>{detailsInModal.Rating}</div>
      <div>{detailsInModal.Runtime}</div>
      <div>{detailsInModal.Genre}</div>
      <div>{detailsInModal.Plot}</div>
      <div>{detailsInModal.Actors}</div>
      <div>{detailsInModal.imdbRating}</div>
    </div>
  );
}
