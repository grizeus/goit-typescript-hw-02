import Button from "../Button/Button";

import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  handleLoadMore: () => void;
};

const LoadMoreBtn = ({ handleLoadMore } : LoadMoreBtnProps) => {
  return <Button className={css["load-more-btn"]} handleClick={handleLoadMore}>Load More</Button>;
};

export default LoadMoreBtn;
