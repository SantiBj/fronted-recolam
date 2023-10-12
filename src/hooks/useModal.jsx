import { useState } from "react";

export function useModal() {
  const [modal, setModal] = useState(false);

  function closeModal() {
    document.body.classList.remove("disable-modal");
    setModal(false);
  }

  function openModal() {
    document.body.classList.add("disable-modal");
    setModal(true);
  }

  return {
    modal,
    openModal,
    closeModal,
  };
}
