import classNames from "classnames/bind";
import styles from "./Item.module.scss";
const cx = classNames.bind(styles);

function Item({children}) {
  return <div className={cx('wrapper')}>{children}</div>;
}

export default Item;
