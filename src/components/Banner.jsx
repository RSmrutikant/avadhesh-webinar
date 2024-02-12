import React from "react";
import { Row, Col } from "react-bootstrap";
import Images from "./imageSet";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Banner = () => {
  return (
    <section
      className="section-1 banner"
      style={{ backgroundColor: "#f3f3f3" }}
    >
      <Row>
        <Col xs={12} md={12} xl={5}>
          <div className="section-1-left">
            <div className="d-flex me-auto gap-2">
              <LazyLoadImage
                className="brand-logo"
                src={Images.logo}
                alt="Brand-logo"
                effect="blur"
              />
              <div className="logo-addon">
                Powered by
                <br />
                Avadhesh.co
              </div>
            </div>
            <h5 className="section-context">CXO HACKS</h5>
            <h1 className="section-heading">
            Managing{" "}
              <span style={{ fontWeight: "bold", color: "orange" }}>
              Imposter Syndrome
              </span>
            </h1>
            <div className="line"></div>
            <p className="section-detail">
            Whether you are a Startup Founder or a CXO in a startup… Your health, mindset & mental fitness have a direct impact on the company & the team. Let's learn to deal with it.<br/>Welcome to the “Founders First” - A digital meetup series by <b>Shruti Garyali</b>. 
            </p>
            <div className="agenda">
              <p>January 21, 2024</p>
              <p>11:00 a.m. - 12:00 noon IST | Virtual</p>
            </div>
            <a
              href="#registration"
              className="section-button btn btn-dark rounded-pill py-3 px-5 me-3 mt-3"
            >
              Register Now
            </a>
          </div>
        </Col>
        <Col xs={12} md={12} xl={7}>
          <div className="section-1-right">
            <LazyLoadImage
              className="banner-img"
              src={Images.section1Banner}
              placeholderSrc={Images.section1BannerPh}
              alt="banner Abstract Icon"
              effect="blur"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};
