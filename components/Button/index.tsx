import React from "react";
import classNames from "classnames";

import Spinner from "../Spinner";
import styles from "./Button.module.scss";

type ButtonSize = "small" | "medium";
interface BaseButton {
  children?: React.ReactNode;
  className?: string;
  size?: ButtonSize;
  outlined?: boolean;
  loading?: boolean;
  noStyle?: boolean;
}

type ButtonProps =
  | (BaseButton & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | (BaseButton & React.AnchorHTMLAttributes<HTMLAnchorElement>);

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  className,
  size = "",
  loading = false,
  outlined = false,
  noStyle = false,
  ...rest
}) => {
  const classes = classNames(styles.Button, className, {
    [styles[size]]: size,
    [styles.outlined]: outlined,
    [styles.noStyle]: noStyle,
  });
  return (
    <button
      type="button"
      disabled={loading}
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {loading ? <Spinner size={20} color={`#fff`} /> : <span>{children}</span>}
    </button>
  );
};

export default Button;
