import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { DiJava, DiReact } from "react-icons/di";
import { AiFillHome } from "react-icons/ai";

import styles from "./Navbar.module.scss";
import config from "~/config";
const cx = classNames.bind(styles);

function Navbar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("navbar-list")}>
        <Link to={config.routes.home} className={cx("navbar-item")}>
          <span>
            <AiFillHome className={cx("navbar-icon")} />
            Home
          </span>
        </Link>
        <Link to={config.routes.java} className={cx("navbar-item")}>
          <span>
            <DiJava className={cx("navbar-icon")} />
            Java
          </span>
        </Link>
        <Link to={config.routes.reactjs} className={cx("navbar-item")}>
          <span>
              <DiReact className={cx("navbar-icon")} />
            ReactJs
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
