import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCopyrightCircle,
  AiOutlineEye,
  AiOutlineGoogle,
} from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

import CardItem from "~/components/CardItem";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Player } from "video-react";
import images from "~/assets/images";
import Image from "~/components/Image";

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

              <button className={cx("button")}>
                <AiOutlineEye className={cx("icon")} /> watch
              </button>
            </CardItem>
          </Col>
          <Col xs={3}>
            <CardItem borderInfo className={cx("footer-card")}>
              <Link to={"/"} className={cx("link")}>
                <AiFillGithub className={cx("icon")} />
                <span>java-all</span>
              </Link>
              <p>Toàn bộ code về java từ cơ bản đến nâng cao bằng tiếng việt</p>
              <p>Tặng tôi 1 sao nếu rảnh nhé :3</p>

              <button className={cx("button")}>
                <AiOutlineEye className={cx("icon")} /> watch
              </button>
            </CardItem>
          </Col>
          <Col xs={4}>
            <CardItem borderInfo className={cx("footer-card")}>
              <div className={cx("footer-title")}>
                <BsYoutube className={cx("icon")} />
                <span>Video instructions setting Intellij on Linus</span>
              </div>
              <Player
                playsInline
                poster={images.image_one}
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              />
            </CardItem>
          </Col>
        </Row>
      </Container>
      <div className={cx("line")}></div>
      <Container className="mt-3">
        <Row>
          <Col xs={2}>
            <h4 className={cx("support-title")}># Nani</h4>
            <ul className={cx("support-list")}>
              <li>
                <Link to={"/"} className={cx("link")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/"} className={cx("link")}>
                  Java
                </Link>
              </li>
              <li>
                <Link to={"/"} className={cx("link")}>
                  Spring
                </Link>
              </li>
              <li>
                <Link to={"/"} className={cx("link")}>
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={2}>
            <h4 className={cx("support-title")}># Moew</h4>
            <ul className={cx("support-list")}>
              <li>
                <Link to={"/"} className={cx("link")}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={"/"} className={cx("link")}>
                  Terms
                </Link>
              </li>
              <li>
                <Link to={"/"} className={cx("link")}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link to={"/"} className={cx("link")}>
                  Support
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={3}>
            <h4 className={cx("support-title")}># Little.Tree</h4>
            <p className={cx("support-text")}>
              Chia sẻ, hướng dẫn lập trình miễn phí và chất lượng nhất...
            </p>
          </Col>
          <Col xs={1}>
            <Image className={cx("support-image")} src={images.image_three} />
          </Col>
          <Col xs={4}>
            <h4 className={cx("support-title")}># Moew</h4>
            <p className={cx("support-text")}>
              Tôi đang tạm dừng để chuẩn bị cho các dự án cá nhân, nhưng sẽ quay
              lại sớm thôi
            </p>
            <p className={(cx("support-text"), "mb-3 mt-3")}>
              Bạn có thể theo dõi, góp ý hay hỏi đáp qua các kênh sau
            </p>
            <p className={cx("support-text")}><AiFillFacebook/> nam.tehee</p>
            <p className={cx("support-text")}><AiFillLinkedin/> loda-nam-hoang</p>
            <p className={cx("support-text")}><AiOutlineGoogle/> loda.namnh@gmail.com</p>
          </Col>
        </Row>
        <Row>
          <div className={cx("support-footer")}>
            <p className={cx("support-text")}>
              Copyright <AiOutlineCopyrightCircle /> 2023 little-tree.com{" "}
            </p>
            <p className={cx("support-text")}>Theme by Tabler and images was designed by Levi</p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
