import React from "react";
import { Row, Col } from "react-bootstrap";
import Images from "./imageSet";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Footer = () => {
  return (
    <section
      className="section-5 footer mt-5"
      style={{ backgroundColor: "#000", height: "300px", position: "relative" }}
    >
      <Row className="">
        <Col xs={12} md={6} xl={10}></Col>
        <Col xs={12} md={6} xl={2}>
          <div className="footer-content">
            <LazyLoadImage
              className="brand-logo"
              src={Images.logo}
              alt="Brand-logo"
              effect="blur"
            />
            <div>
              <p className="mt-2" style={{ color: "#fff" }}>
                Avadhesh India Advisory
              </p>
              <p className="mt-2" style={{ color: "#fff" }}>
                Hear about challenges faced, solutions implemented, and the
                impact on data accuracy and reporting in financial planning at
                Rapid.
              </p>
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={12}
          xl={12}
          style={{
            color: "white",
            display: "flex",
            borderTop: "2px solid #ddd",
            height: "60px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
          }}
        >
          @Copyright Avadhesh India Adivisory
        </Col>
      </Row>
    </section>
  );
};
