import clsx from "clsx";

import styles from "./Button.module.css";
import { ReactElement } from "react";

type ButtonProps = {
  children: ReactElement;
  className: string;
  type?: "button" | "submit" | "reset";
  isSearch?: boolean;
  handleClick?: () => void;
};

const Button = ({
  children,
  className,
  type = "button",
  isSearch = false,
  handleClick,
} : ButtonProps) => {
  const classes = clsx(styles.btn, isSearch && styles["search"], className);
  return (
    <button className={classes} type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
