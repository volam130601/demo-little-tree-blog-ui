import styles from "./MainLayout.module.scss";
import classNames from "classnames/bind";
import Sidebar from "./Sidebar";
import Header from "../components/Header";
import Footer from "./Footer";
const cx = classNames.bind(styles);

function MainLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;
