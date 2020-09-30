import React, { useState } from "react";

import { ModalContext } from "app/shared/contexts";
import { Modal } from "app/shared/components";

function ModalProvider({ children }) {
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        setModalContent,
        modalContent,
        setShowModal,
        showModal,
      }}
    >
      {children}
      <Modal />
    </ModalContext.Provider>
  );
}

export default ModalProvider;
