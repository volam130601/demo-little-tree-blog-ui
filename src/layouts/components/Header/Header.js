import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("logo")} src={images.logo} alt="" />

      <div className={cx("category-list")}>
        <div className={cx("category-item")}>Home</div>
        <div className={cx("category-item")}>Java</div>
        <div className={cx("category-item")}>React JS</div>
      </div>

      <div className={cx("search")}>
        <input type="text" name="" id=" " />
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}

export default Header;
