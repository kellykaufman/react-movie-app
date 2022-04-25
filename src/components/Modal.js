import { useState, useEffect } from "react";
import ReactModal from "react-modal";

export function Modal(isModalOpen, setIsModalOpen) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);
  return (
    <>
      <button></button>
    </>
  );
}
