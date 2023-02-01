import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

import CardItem from "~/components/CardItem";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer")}>
      <Container className="mt-3">
        <Row>
          <Col xs={3}>
            <CardItem borderPrimary className={cx("footer-card")}>
              <Link to={"/"} className={cx("link")}>
                <AiFillGithub className={cx("icon")} />
                <span>java-all</span>
              </Link>
              <p>Toàn bộ code về java từ cơ bản đến nâng cao bằng tiếng việt</p>
              <p>Tặng tôi 1 sao nếu rảnh nhé :3</p>

              <button className={cx('button')}>
                <AiOutlineEye /> watch
              </button>
            </CardItem>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
