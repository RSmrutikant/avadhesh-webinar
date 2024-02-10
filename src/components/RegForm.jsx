import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HubspotForm from "react-hubspot-form";
import Images from "./imageSet";
import { LazyLoadImage } from "react-lazy-load-image-component";


export const RegForm = () => {
  return (
    <section className="section-4 registration" id="registration">
      <Container style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <Row style={{width: "fit-content"}}>
          <Col xs={12} md={5} xl={4}>
            <div className="registration-form">
            <h1>Register</h1>
            <div className="line"></div>
              <HubspotForm
                portalId="39918206"
                formId="60033f24-d57b-40d7-b17f-2c4e1c29aae1"
                onSubmit={() => console.log("Submit!")}
                onReady={(form) => console.log("Form ready!")}
                loading={<div>Loading...</div>}
              />
            </div>
          </Col>
          <Col xs={12} md={7} xl={8}>
            <div className="reg-form-image">
              <LazyLoadImage
              className="reg-poster"
              src={Images.regImage}
              alt="banner Abstract Icon"
              effect="blur"
            />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
