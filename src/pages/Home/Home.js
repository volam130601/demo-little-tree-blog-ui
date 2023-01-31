import * as React from "react";
import classNames from "classnames/bind";
import { Col, Container, Row, Carousel } from "react-bootstrap";

import styles from "./Home.module.scss";
import Item from "~/components/Item";
import Image from "~/components/Image";
import images from "~/assets/images";
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
            <Item>
                <h4>2</h4>

            </Item>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
