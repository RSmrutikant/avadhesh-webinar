import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Countdown from "./CountDown";
import VideoPlayer from "./VideoPlayer";
import Images from "./imageSet";

export const Speaker = () => {
  return (
    <section className="section-3 speaker">
      <Container className="speaker-container">
        
        <Row className="speaker-wrapper">
          <Col xs={12} md={12} xl={9}>
            <div className="speaker-about">
            <h1 className="text-bold section-heading mb-3">Meet, Shruti Garyali</h1>
        <div className="line"></div>
        A certified and internationally credentialed ICF Coach. Empowers entrepreneurs, founders, and leaders to achieve success in their life and business. Shruti collaborates with social development foundations; mentors young adults striving to rise above their challenging socio-economic backgrounds.
              <Row className="mt-4">
                <Col xs={6} md={3} xl={3}>
                <LazyLoadImage
              src={Images.Badge1}
              alt="Speaker Image"
              effect="blur"
            />
                </Col>
                <Col xs={6} md={3} xl={3}>
                <LazyLoadImage
              src={Images.Badge2}
              alt="Speaker Image"
              effect="blur"
            />
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={12} xl={3}>
            <div className="section-image">
            <VideoPlayer srcLink={Images.AboutShruti}/>
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="speaker-banner-long">
        <Col xs={12} md={12} xl={12} style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
          <Countdown/>
        </Col>
      </Row>
    </section>
  );
};
