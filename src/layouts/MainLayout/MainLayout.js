import Header from "../components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";

import styles from "./MainLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function MainLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
