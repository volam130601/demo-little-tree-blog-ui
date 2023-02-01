import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./SearchItem.module.scss";
import Image from "~/components/Image";
const cx = classNames.bind(styles);

function SearchItem({data}) {
  return (
    <Link to={`/${data.code}`} className={cx("wrapper")}>
      <Image
        className={cx("blog-image")}
        src={data.blog_image}
        alt={data.title}
      />
      <h4 className={cx("blog-title")}>{data.title}</h4>
    </Link>
  );
}

export default SearchItem;
