import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Images from "./imageSet";
// import { LazyLoadImage } from "react-lazy-load-image-component";
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
            </div>
          </Col>
          <Col xs={12} md={12} xl={3}>
            <div className="section-image">
              {/* <LazyLoadImage
              src={Images.speakerImage}
              alt="Speaker Image"
              effect="blur"
            /> */}
            <VideoPlayer srcLink={Images.AboutShruti}/>
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="speaker-banner-long">
        <Col xs={12} md={12} xl={12} style={{display: "flex", justifyContent: "center"}}>
          <Countdown/>
        </Col>
      </Row>
    </section>
  );
};
