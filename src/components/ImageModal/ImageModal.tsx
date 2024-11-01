import ReactModal from "react-modal";

import styles from "./ImageModal.module.css";

type ImageModalProps = {
  props: any;
  isModalOpen: boolean;
  setIsModalOpen: (arg0: boolean) => void;
};

const ImageModal = ({ props, isModalOpen, setIsModalOpen } : ImageModalProps) => {

  const afterOpenModal = () => {
    document.body.style.overflow = "hidden";
  };

  const afterCloseModal = () => {
    document.body.style.overflow = "auto";
  };

  const handleModalClose = () => {
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
