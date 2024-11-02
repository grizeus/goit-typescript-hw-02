import ReactModal from "react-modal";

import type { ImageModalProps } from "../../types";
import styles from "./ImageModal.module.css";


const ImageModal = ({ props, isModalOpen, setIsModalOpen } : ImageModalProps) => {

  const afterOpenModal = () : void => {
    document.body.style.overflow = "hidden";
  };

  const afterCloseModal = () : void => {
    document.body.style.overflow = "auto";
  };

  const handleModalClose = () : void => {
    setIsModalOpen(false);
  };
  return (
    <ReactModal
      isOpen={isModalOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={handleModalClose}
      onAfterClose={afterCloseModal}
      style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" } }}
      contentLabel="Image Modal"
      closeTimeoutMS={200}>
      <img className={styles.modal} src={props.src} alt={props.alt} />;
    </ReactModal>
  );
};

export default ImageModal;
