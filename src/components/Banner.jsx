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
                Avadhesh India
                <br />
                Advisory
              </div>
            </div>
            <h5 className="section-context">Webinar</h5>
            <h1 className="section-heading">
              Simple{" "}
              <span style={{ fontWeight: "bold", color: "orange" }}>
                Growth
              </span>{" "}
              Hacks{" "}
              <span style={{ fontWeight: "bold" }}>
                For
                <br />
                Your
              </span>{" "}
              Online{" "}
              <span style={{ fontWeight: "bold", color: "orange" }}>
                Business
              </span>
              .
            </h1>
            <div className="line"></div>
            <p className="section-detail">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock.
            </p>
            <div className="agenda">
              <p>January 21, 2024</p>
              <p>10:00 a.m. - 11:00 a.m. IST | Virtual</p>
            </div>
            <a
              href="#registration"
              className="section-button btn btn-dark rounded-pill py-3 px-5 me-3 mt-3"
            >
              Book Your Seat
            </a>
          </div>
        </Col>
        <Col xs={12} md={12} xl={7}>
          <div className="section-1-right">
            <LazyLoadImage
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
