import React from "react";
import classNames from "classnames";

import styles from "./Card.module.scss";

// size options
type CardSize = "large" | "medium" | "small";

// color options
type Color = "purple";

interface BaseCard {
  className?: string;
  size?: CardSize;
  outlined?: boolean;
  title?: string;
  subtitle?: string;
  subcolor?: string;
  content?: string;
  color?: Color;
}

const Card: React.FunctionComponent<BaseCard> = ({
  className,
  size,
  outlined,
  title,
  subtitle,
  subcolor,
  content,
  color,
}) => {
  const classes = classNames(styles.Container, className, {
    [styles[size]]: size,
    [styles.outlined]: outlined,
    [styles[color]]: color,
  });
  const subtitleclass = classNames(styles.SubTitle, className, {
    [styles[subcolor]]: subcolor,
  });
  return (
    <div className={classes}>
      {title && <h2 className={styles.Title}>{title}</h2>}
      <h4 className={styles.Content}>{content}</h4>

      {subtitle && (
        <React.Fragment>
          <span />
          <p className={subtitleclass}>{subtitle}</p>
        </React.Fragment>
      )}
    </div>
  );
};
export default Card;
