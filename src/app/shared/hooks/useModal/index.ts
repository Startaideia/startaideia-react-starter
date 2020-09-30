import { ModalContext } from "app/shared/contexts";
import { useCallback, useContext, useMemo } from "react";

export default function (content: any = null) {
  const params = useContext(ModalContext);
  const { setModalContent } = params;
  const { setShowModal } = params;
  const { modalContent } = params;
  const { showModal } = params;

  /**
   * Open the modal
   *
   */
  const openModal = useCallback(
    function (customModalcontent: any = null) {
      setModalContent(customModalcontent || content);
      setShowModal(true);
    },
    [setModalContent, setShowModal, content]
  );

  /**
   * Close the modal
   *
   */
  const closeModal = useCallback(
    function () {
      setModalContent(null);
      setShowModal(false);
    },
    [setModalContent, setShowModal]
  );

  /**
   * Check if the modal is open
   *
   */
  const isOpen = useMemo(
    function () {
      return showModal;
    },
    [showModal]
  );

  return {
    modalContent,
    openModal,
    closeModal,
    isOpen,
  };
}
