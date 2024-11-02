import { ReactNode } from "react";
import clsx from "clsx";

import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  className?: string;
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
