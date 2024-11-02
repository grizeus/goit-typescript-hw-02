import clsx from "clsx";

import type { URL, User } from "../../types";
import styles from "./ImageCard.module.css";

export type ImageCardProps = {
  id: string;
  alt: string;
  created: string;
  likes: number;
  user: User;
  urls: URL;
  modalHandler: (arg: string) => (e: React.MouseEvent<HTMLImageElement>) => void;
};

const ImageCard = ({ id, alt, created, likes, user, urls, modalHandler } : ImageCardProps) => {
  const dateObj = new Date(created);
  const date = dateObj.toLocaleDateString();
  return (
    <div className={styles["gallery-item"]}>
      <div className={styles["img-wrapper"]}>
        <img
          id={id}
          className={styles["gallery-image"]}
          src={urls.small}
          alt={alt}
          loading="lazy"
          onClick={modalHandler(urls.regular)}
        />
      </div>
      <ul className={styles["gallery-item-info"]}>
        <li>
          <b>Likes</b>
          <p className={styles["gallery-item-descr"]}>{likes}</p>
        </li>
        <li>
          <b>Author</b>
          <p className={clsx(styles["gallery-item-descr"], styles["name"])}>
            {user.name}
          </p>
        </li>
        <li>
          <b>Created</b>
          <p className={styles["gallery-item-descr"]}>{date}</p>
        </li>
      </ul>
    </div>
  );
};

export default ImageCard;
