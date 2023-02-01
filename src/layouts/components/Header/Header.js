import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import NavbarList from "~/layouts/components/Navbar";
import Image from "~/components/Image";
import Search from "../Search";

const cx = classNames.bind(styles);

function Header() {
  const [scrollTop, setScrollTop] = useState(0);
  const [hideHeaderTop, setHideHeaderTop] = useState(false);
  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    if (scrollTop < 60) {
      setHideHeaderTop(false);
    } else {
      setHideHeaderTop(true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);

  return (
    <div className={cx("wrapper")}>
      <div
        className={hideHeaderTop ? styles.headerHeight1 : styles.headerHeight2}
      >
        <div
          // className={
          //   (cx("header-top"),
          //   (hideHeaderTop ? "d-none" : ""))  
          // }
          className={cx('header-top' , (hideHeaderTop ? "d-none" : ""))}
        >
          <Image className={cx("logo")} src={images.logo} alt="" />
          {/* Toggle dark/light theme */}
          {/* Combobox language */}
        </div>
        <div className={cx("header-bottom")}>
          <div className={cx("inner")}>
            <NavbarList />
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
