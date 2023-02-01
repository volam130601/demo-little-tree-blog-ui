import * as React from "react";
import classNames from "classnames/bind";
import { Col, Container, Row, Carousel } from "react-bootstrap";

import styles from "./Home.module.scss";
import Item from "~/components/Item";
import Image from "~/components/Image";
import images from "~/assets/images";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Home() {
  return (
    <Container className={cx("wrapper")}>
      <Row>
        <h2 className={cx("page-title")}>Home</h2>
      </Row>
      <Row>
        <Col xs={4}>
          <Item>
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
          </Item>
        </Col>

        <Col xs={8}>
          <Item borderPrimary>
            <div className={cx("card-list")}>
              <h2 className={cx("card-title")}>New updated</h2>
              <div className={cx("card-item")}>
                <Row>
                  <Col xs={8}>
                    <Link to={"/"} className={cx("card-link")}>
                      [Spring Boot] Instructions for creating Validation
                    </Link>
                  </Col>
                  <Col xs={4}>
                    <span className="float-end text-muted fs-4">19 December, 2019</span>
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
                    <span className="float-end text-muted fs-4">19 December, 2019</span>
                  </Col>
                </Row>
              </div>
            </div>
          </Item>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
