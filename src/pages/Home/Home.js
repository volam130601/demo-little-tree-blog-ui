import * as React from "react";
import classNames from "classnames/bind";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import { TbGitFork } from "react-icons/tb";
import { AiFillGithub, AiOutlineStar } from "react-icons/ai";

import styles from "./Home.module.scss";
import Image from "~/components/Image";
import images from "~/assets/images";
import { Link } from "react-router-dom";
import CardItem from "~/components/CardItem";
const cx = classNames.bind(styles);

function Home() {
  return (
    <Container className={cx("wrapper")}>
      <Row>
        <h2 className={cx("page-title")}>Home</h2>
      </Row>
      <Row>
        <Col xs={4}>
          <CardItem>
            <Carousel>
              <Carousel.Item interval={3000}>
                <Image className={cx("slider-image")} src={images.image_one} />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <Image className={cx("slider-image")} src={images.image_two} />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <Image
                  className={cx("slider-image")}
                  src={images.image_three}
                />
              </Carousel.Item>
            </Carousel>
          </CardItem>

          <CardItem borderWarning>
            <div className={cx("card-list")}>
              <h2 className={cx("card-title")}>Top Views</h2>
              <div className={cx("card-item")}>
                <Row>
                  <Link to={"/"} className={cx("card-link")}>
                    [Spring Boot] Instructions for creating Validation yourself
                    to check Model & Entity
                  </Link>
                </Row>
              </div>
              <div className={cx("card-item")}>
                <Row>
                  <Link to={"/"} className={cx("card-link")}>
                    [Spring Boot] Instructions for creating Validation yourself
                    to check Model & Entity
                  </Link>
                </Row>
              </div>
              <div className={cx("card-item")}>
                <Row>
                  <Link to={"/"} className={cx("card-link")}>
                    [Spring Boot] Instructions for creating Validation yourself
                    to check Model & Entity
                  </Link>
                </Row>
              </div>
              <div className={cx("card-item")}>
                <Row>
                  <Link to={"/"} className={cx("card-link")}>
                    [Spring Boot] Instructions for creating Validation yourself
                    to check Model & Entity
                  </Link>
                </Row>
              </div>
              <div className={cx("card-item")}>
                <Row>
                  <Link to={"/"} className={cx("card-link")}>
                    [Spring Boot] Instructions for creating Validation yourself
                    to check Model & Entity
                  </Link>
                </Row>
              </div>
              <div className={cx("card-item")}>
                <Row>
                  <Link to={"/"} className={cx("card-link")}>
                    [Spring Boot] Instructions for creating Validation yourself
                    to check Model & Entity
                  </Link>
                </Row>
              </div>
              <div className={cx("card-item")}>
                <Row>
                  <Link to={"/"} className={cx("card-link")}>
                    [Spring Boot] Instructions for creating Validation yourself
                    to check Model & Entity
                  </Link>
                </Row>
              </div>
              <div className={cx("card-item")}>
                <Row>
                  <Link to={"/"} className={cx("card-link")}>
                    [Spring Boot] Instructions for creating Validation yourself
                    to check Model & Entity
                  </Link>
                </Row>
              </div>
              <div className={cx("card-item")}>
                <Row>
                  <Link to={"/"} className={cx("card-link")}>
                    [Spring Boot] Instructions for creating Validation yourself
                    to check Model & Entity
                  </Link>
                </Row>
              </div>
            </div>
          </CardItem>
        </Col>

        <Col xs={8}>
          <CardItem borderPrimary>
            <div className={cx("card-list")}>
              <h2 className={cx("card-title")}>New updated</h2>
              <div className={cx("card-item")}>
                <Row>
                  <Col xs={8}>
                    <Link to={"/"} className={cx("card-link")}>
                      [Spring Boot] Instructions for creating Validation
                      yourself to check Model & Entity
                    </Link>
                  </Col>
                  <Col xs={4}>
                    <span className="float-end text-muted fs-4">
                      19 December, 2019
                    </span>
                  </Col>
                </Row>
              </div>
              <div className={cx("card-item")}>
                <Row>
                  <Col xs={8}>
                    <Link to={"/"} className={cx("card-link")}>
                      [Spring Boot] Instructions for creating Validation
                      yourself to check Model & Entity
                    </Link>
                  </Col>
                  <Col xs={4}>
                    <span className="float-end text-muted fs-4">
                      19 December, 2019
                    </span>
                  </Col>
                </Row>
              </div>
              <div className={cx("card-item")}>
                <Row>
                  <Col xs={8}>
                    <Link to={"/"} className={cx("card-link")}>
                      [Spring Boot] Instructions for creating Validation
                      yourself to check Model & Entity
                    </Link>
                  </Col>
                  <Col xs={4}>
                    <span className="float-end text-muted fs-4">
                      19 December, 2019
                    </span>
                  </Col>
                </Row>
              </div>
              <div className={cx("card-item")}>
                <Row>
                  <Col xs={8}>
                    <Link to={"/"} className={cx("card-link")}>
                      [Spring Boot] Instructions for creating Validation
                      yourself to check Model & Entity
                    </Link>
                  </Col>
                  <Col xs={4}>
                    <span className="float-end text-muted fs-4">
                      19 December, 2019
                    </span>
                  </Col>
                </Row>
              </div>
              <div className={cx("card-item")}>
                <Row>
                  <Col xs={8}>
                    <Link to={"/"} className={cx("card-link")}>
                      [Spring Boot] Instructions for creating Validation
                      yourself to check Model & Entity
                    </Link>
                  </Col>
                  <Col xs={4}>
                    <span className="float-end text-muted fs-4">
                      19 December, 2019
                    </span>
                  </Col>
                </Row>
              </div>
            </div>
          </CardItem>

          <CardItem className="rounded">
            <Container fluid className="p-5">
              <Image className={cx("card-image")} src={images.image_test} />
              <Row>
                <h3 className="mt-4">
                  Cảm ơn bạn đã theo dõi blog thời gian qua!
                </h3>
                <div className="mt-4 fs-4">
                  Mình sẽ đưa code và kiến thức mới thường xuyên lên{" "}
                  <Link to={"/"} className={cx("content-link")}>
                    repository
                  </Link>{" "}
                  <Link to={"/"} className={cx("content-button")}>
                    <AiFillGithub className={cx("content-icon")} />
                    spring-boot-learning
                  </Link>{" "}
                  và nó hoàn toàn miễn phí.
                </div>
                <div className="mt-4 fs-4">
                  Nếu các bạn có quan tâm tới Spring bôt và hệ sinh thái quanh
                  nó thì hãy theo dõi mình trên Repository này nhé.
                </div>
                <div className="mt-4 fs-4">
                  Bạn có thể nhấn{" "}
                  <AiOutlineStar className={cx("content-icon")} /> Star hoặc{" "}
                  <TbGitFork className={cx("content-icon")} /> Fork để theo dõi.
                </div>
                <div className="mt-4 fs-4">
                  Sắp tới mình sẽ cập nhật các bài viết liên quan tới
                  Micoservices và Spring Cloud.
                </div>
              </Row>
            </Container>
          </CardItem>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
