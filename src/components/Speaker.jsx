import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Images from "./imageSet";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import Countdown from "./CountDown";
import VideoPlayer from "./VideoPlayer";

export const Speaker = () => {
  return (
    <section className="section-3 speaker">
      <Container className="speaker-container">
        
        <Row className="speaker-wrapper">
          <Col xs={12} md={12} xl={7}>
            <div className="speaker-about">
            <h1 className="text-bold section-heading mb-3">Who Is Speaker ?</h1>
        <div className="line"></div>
            Meet Shruti Garyali, your trusted guide on the path to personal transformation. With years of experience as a dedicated life coach, Shruti Garyali is committed to helping you unlock your true potential and live a life of purpose and fulfillment. Join her empowering webinars to gain valuable insights, practical tools, and actionable strategies for growth and success. Get ready to embark on a journey of self-discovery and empowerment with Shruti Garyali as your mentor. Start your transformational journey today!
            </div>
          </Col>
          <Col xs={12} md={12} xl={5}>
            <div className="section-image">
              {/* <LazyLoadImage
              src={Images.speakerImage}
              alt="Speaker Image"
              effect="blur"
            /> */}
            <VideoPlayer srcLink={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"}/>
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
