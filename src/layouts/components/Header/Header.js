import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import config from "~/config";
import Search from "../Search";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img className={cx("logo")} src={images.logo} alt="" />

        <div className={cx("navbar-list")}>
          <Link to={config.routes.home} className={cx("navbar-item")}>
            <span>Home</span>
          </Link>
          <Link to={config.routes.java} className={cx("navbar-item")}>
            <span>Java</span>
          </Link>
          <Link to={config.routes.reactjs} className={cx("navbar-item")}>
            <span>ReactJs</span>
          </Link>
        </div>
        <Search/>
        
      </div>
    </div>
  );
}

export default Header;
