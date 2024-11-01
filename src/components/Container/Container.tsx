import { ReactNode } from "react";
import styles from "./Container.module.css";

import clsx from "clsx";

type ContainerProps = {
  children?: ReactNode;
  isSearch?: boolean;
};

const Container = ({ children, isSearch=false }: ContainerProps) => {
  return <div className={clsx(styles.container, isSearch && styles.search)}>{children}</div>;
};

export default Container;