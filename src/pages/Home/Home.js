import * as React from "react";
import classNames from "classnames/bind";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import { TbGitFork } from "react-icons/tb";
import { AiFillGithub, AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";

import styles from "./Home.module.scss";
import Image from "~/components/Image";
import images from "~/assets/images";
import { Link } from "react-router-dom";
import CardItem from "~/components/CardItem";
import Tippy from "@tippyjs/react/headless";
const cx = classNames.bind(styles);

function Home() {
  const newUpdatedList = [
    {
      id: 1,
      code: "blog-1",
      title: `[Spring Boot] Instructions for creating Validation yourself
      to check Model & Entity`,
      createDate: "19 December, 2019",
    },
    {
      id: 2,
      code: "blog-1",
      title: `[Spring Boot] Instructions for creating Validation yourself
      to check Model & Entity`,
      createDate: "19 December, 2019",
    },
    {
      id: 3,
      code: "blog-1",
      title: `[Spring Boot] Instructions for creating Validation yourself
      to check Model & Entity`,
      createDate: "19 December, 2019",
    },
    {
      id: 4,
      code: "blog-1",
      title: `[Spring Boot] Instructions for creating Validation yourself
      to check Model & Entity`,
      createDate: "19 December, 2019",
    },
    {
      id: 5,
      code: "blog-1",
      title: `[Spring Boot] Instructions for creating Validation yourself
      to check Model & Entity`,
      createDate: "19 December, 2019",
    },
  ];

  const topViewsList = [
    {
      id: 1,
      code: "blog-1",
      title: `[Spring Boot] Instructions for creating Validation yourself
      to check Model & Entity`,
    },
    {
      id: 2,
      code: "blog-1",
      title: `[Spring Boot] Instructions for creating Validation yourself
      to check Model & Entity`,
    },
    {
      id: 3,
      code: "blog-1",
      title: `[Spring Boot] Instructions for creating Validation yourself
      to check Model & Entity`,
    },
    {
      id: 4,
      code: "blog-1",
      title: `[Spring Boot] Instructions for creating Validation yourself
      to check Model & Entity`,
    },
    {
      id: 5,
      code: "blog-1",
      title: `[Spring Boot] Instructions for creating Validation yourself
      to check Model & Entity`,
    },
    {
      id: 6,
      code: "blog-1",
      title: `[Spring Boot] Instructions for creating Validation yourself
      to check Model & Entity`,
    },
    {
      id: 7,
      code: "blog-1",
      title: `[Spring Boot] Instructions for creating Validation yourself
      to check Model & Entity`,
    },
    {
      id: 8,
      code: "blog-1",
      title: `[Spring Boot] Instructions for creating Validation yourself
      to check Model & Entity`,
    },
    {
      id: 9,
      code: "blog-1",
      title: `[Spring Boot] Instructions for creating Validation yourself
      to check Model & Entity`,
    },
  ];

  return (
    <div>
      <Container className={cx("wrapper")}>
        <Row>
          <h2 className={cx("page-title")}>Home</h2>
        </Row>
        <Row>
          <Col xs={4}>
            <CardItem>
              <Carousel>
                <Carousel.Item interval={3000}>
                  <Image
                    className={cx("slider-image")}
                    src={images.image_one}
                  />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <Image
                    className={cx("slider-image")}
                    src={images.image_two}
                  />
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
                {topViewsList.map((item) => {
                  return (
                    <div key={item.id} className={cx("card-item")}>
                      <Row>
                        <Link to={`/${item.code}`} className={cx("card-link")}>
                          {item.title}
                        </Link>
                      </Row>
                    </div>
                  );
                })}
              </div>
            </CardItem>
          </Col>

          <Col xs={8}>
            <CardItem borderPrimary>
              <div className={cx("card-list")}>
                <h2 className={cx("card-title")}>New updated</h2>
                {newUpdatedList.map((item) => {
                  return (
                    <div key={item.id} className={cx("card-item")}>
                      <Row>
                        <Col xs={8}>
                          <Link
                            to={`/${item.code}`}
                            className={cx("card-link")}
                          >
                            {item.title}
                          </Link>
                        </Col>
                        <Col xs={4}>
                          <span className="float-end text-muted fs-4">
                            {item.createDate}
                          </span>
                        </Col>
                      </Row>
                    </div>
                  );
                })}
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
                    <TbGitFork className={cx("content-icon")} /> Fork để theo
                    dõi.
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

        <Row className="mt-5">
          <h2 className={cx("page-title")}>Spring Boot</h2>
        </Row>

        <Row>
          <Col xs={11}>
            <Row>
              <Col>
                <Link to={"/"} className={cx("blog-card")}>
                  <Image
                    className={cx("blog-image", "rounded-top")}
                    src={images.image_one}
                  />
                  <h4 className={cx("blog-title")}>
                    [Spring Boot] RESTful API Document with Spring Boot +
                    OpenAPI 3.0
                  </h4>
                </Link>
              </Col>
              <Col>
                <Link to={"/"} className={cx("blog-card")}>
                  <Image
                    className={cx("blog-image", "rounded-top")}
                    src={images.image_one}
                  />
                  <h4 className={cx("blog-title")}>
                    [Spring Boot] RESTful API Document with Spring Boot +
                    OpenAPI 3.0
                  </h4>
                </Link>
              </Col>
              <Col>
                <Link to={"/"} className={cx("blog-card")}>
                  <Image
                    className={cx("blog-image", "rounded-top")}
                    src={images.image_one}
                  />
                  <h4 className={cx("blog-title")}>
                    [Spring Boot] RESTful API Document with Spring Boot +
                    OpenAPI 3.0
                  </h4>
                </Link>
              </Col>
              <Col>
                <Link to={"/"} className={cx("blog-card")}>
                  <Image
                    className={cx("blog-image", "rounded-top")}
                    src={images.image_one}
                  />
                  <h4 className={cx("blog-title")}>
                    [Spring Boot] RESTful API Document with Spring Boot +
                    OpenAPI 3.0
                  </h4>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col>
            <Link to={"/blog-more"} className={cx("blog-more")}>
              <RiArrowRightSLine className={cx("icon")} />
              <span>More</span>
            </Link>
          </Col>
        </Row>
        <Row className="mt-5">
          <h2 className={cx("page-title")}>Java</h2>
        </Row>

        <Row>
          <Col xs={11}>
            <Row>
              <Col>
                <Link to={"/"} className={cx("blog-card")}>
                  <Image
                    className={cx("blog-image", "rounded-top")}
                    src={images.image_one}
                  />
                  <h4 className={cx("blog-title")}>
                    [Spring Boot] RESTful API Document with Spring Boot +
                    OpenAPI 3.0
                  </h4>
                </Link>
              </Col>
              <Col>
                <Link to={"/"} className={cx("blog-card")}>
                  <Image
                    className={cx("blog-image", "rounded-top")}
                    src={images.image_one}
                  />
                  <h4 className={cx("blog-title")}>
                    [Spring Boot] RESTful API Document with Spring Boot +
                    OpenAPI 3.0
                  </h4>
                </Link>
              </Col>
              <Col>
                <Link to={"/"} className={cx("blog-card")}>
                  <Image
                    className={cx("blog-image", "rounded-top")}
                    src={images.image_one}
                  />
                  <h4 className={cx("blog-title")}>
                    [Spring Boot] RESTful API Document with Spring Boot +
                    OpenAPI 3.0
                  </h4>
                </Link>
              </Col>
              <Col>
                <Link to={"/"} className={cx("blog-card")}>
                  <Image
                    className={cx("blog-image", "rounded-top")}
                    src={images.image_one}
                  />
                  <h4 className={cx("blog-title")}>
                    [Spring Boot] RESTful API Document with Spring Boot +
                    OpenAPI 3.0
                  </h4>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col>
            <Link to={"/blog-more"} className={cx("blog-more")}>
              <RiArrowRightSLine className={cx("icon")} />
              <span>More</span>
            </Link>
          </Col>
        </Row>
      </Container>

      
    </div>
  );
}

export default Home;
