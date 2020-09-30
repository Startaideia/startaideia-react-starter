import React from "react";
import { MdClose } from "react-icons/md";

import { useModal } from "app/shared/hooks";
import { Container, Card, Close } from "./styles";

function Modal() {
  const { isOpen, closeModal, modalContent } = useModal();

  /**
   * Close the modal if the user click on the backdrop
   *
   */
  function handleBackDropClick(e) {
    closeModal();
  }

  /**
   * Prevent the modal to close if the click is in the body
   *
   */
  function handleModalBodyClick(e) {
    e.stopPropagation();
  }

  return (
    <Container onClick={handleBackDropClick} className={isOpen && `is-visible`}>
      <Card onClick={handleModalBodyClick} className={isOpen && `is-visible`}>
        <Card.Header>
          <Close onClick={handleBackDropClick}>
            <MdClose />
          </Close>
        </Card.Header>
        {modalContent}
      </Card>
    </Container>
  );
}

export default Modal;
