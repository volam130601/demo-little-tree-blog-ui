import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./CardItem.module.scss";
const cx = classNames.bind(styles);

function CardItem({
  className,
  children,
  borderPrimary = false,
  borderInfo = false,
  borderWarning = false,
}) {
  const classes = cx("wrapper", {
    [className]: className,
    "border-primary": borderPrimary,
    "border-info": borderInfo,
    "border-warning": borderWarning,
  });

  return <div className={classes}>{children}</div>;
}

CardItem.propTypes = {
  borderPrimary: PropTypes.bool,
  borderInfo: PropTypes.bool,
  borderWarning: PropTypes.bool,
};

export default CardItem;
