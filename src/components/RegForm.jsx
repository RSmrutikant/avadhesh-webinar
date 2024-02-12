import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HubspotForm from "react-hubspot-form";
import Images from "./imageSet";
import VideoPlayer from "./VideoPlayer";
// import { LazyLoadImage } from "react-lazy-load-image-component";


export const RegForm = () => {
  return (
    <section className="section-4 registration" id="registration">
      <Container className="registration-container">
        <Row className="reg-row">
          <Col xs={12} md={6} xl={4}>
            <div className="reg-form-image">
            <VideoPlayer
                srcLink={
                  Images.RoleOfCoach
                }
              />
            </div>
          </Col>
          <Col xs={12} md={6} xl={4}>
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
        </Row>
      </Container>
    </section>
  );
};
