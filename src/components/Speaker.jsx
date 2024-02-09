import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "./imageSet";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Speaker = () => {
  return (
    <section className="section-3 speaker">
      <Container className="speaker-container">
        
        <Row className="speaker-wrapper">
          <Col xs={12} md={12} xl={8}>
            <div className="speaker-about">
            <h1 className="text-bold section-heading mb-3">Who is Speaker ?</h1>
        <div className="line"></div>
            Meet Shruti Garyali, your trusted guide on the path to personal transformation. With years of experience as a dedicated life coach, Shruti Garyali is committed to helping you unlock your true potential and live a life of purpose and fulfillment. Join her empowering webinars to gain valuable insights, practical tools, and actionable strategies for growth and success. Get ready to embark on a journey of self-discovery and empowerment with Shruti Garyali as your mentor. Start your transformational journey today!
            </div>
          </Col>
          <Col xs={12} md={12} xl={4}>
            <div className="section-image">
              <LazyLoadImage
              src={Images.speakerImage}
              alt="Speaker Image"
              effect="blur"
            />
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="speaker-banner-long">
        <Col xs={12} md={12} xl={9}>
          <div>
          <h1>Transform Your Business With Us</h1>
          <p>Discover our plans and grow faster than others</p>
          </div>
        </Col>
        <Col xs={12} md={12} xl={3} className="d-flex" style={{justifyContent: "flex-end"}}>
          <div className="button-wrapper">
          <a href="#reg-form" className="section-button btn outline-dark" style={{border: "1px solid #000"}}>Contact Us</a>
          <a href="https://avadhesh.co/" target="_blank" className="section-button btn btn-dark">Visit Site</a>
          </div>
        </Col>
      </Row>
    </section>
  );
};
