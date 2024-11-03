import ImageCard from "../ImageCard/ImageCard";

import type { Image } from "../../types";
import styles from "./ImageGallery.module.css";


type ImageGalleryProps = {
  images: Array<Image>;
  modalHandler: (arg: string) => (e: React.MouseEvent<HTMLImageElement>) => void;
};

const ImageGallery = ({ images, modalHandler } : ImageGalleryProps) => {
  return (
    <section>
      <ul className={styles["gallery-list"]}>
        {images.map(
          ({ id, alt_description, created_at, likes, user, urls } : Image) => (
            <li key={id}>
              <ImageCard
                id={id + "1"}
                alt={alt_description}
                created={created_at}
                likes={likes}
                user={user}
                urls={urls}
                modalHandler={modalHandler}
              />
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default ImageGallery;
