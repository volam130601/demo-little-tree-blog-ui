import React from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import Navbar from "~/layouts/components/Navbar";
import Image from "~/components/Image";
import Search from "../Search";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header-top")}>
          <Image className={cx("logo")} src={images.logo} alt="" />
          {/* Toggle dark/light theme */}
          {/* Combobox language */}
        </div>
        <div className={cx("header-bottom")}>
          <div className={cx("inner")}>
            <Navbar />
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
