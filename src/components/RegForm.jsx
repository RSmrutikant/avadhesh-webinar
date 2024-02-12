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
          <Col xs={12} md={6} xl={3}>
            <div className="reg-form-image">
            <h2>✦ Why Even A Coach is needed?</h2>
            <VideoPlayer
                srcLink={
                  Images.RoleOfCoach
                }
              />
              <i>❝ The one thing people are never good at is seeing themselves as others see them. A coach really helps.<br/><b> - Eric Shmidt</b> ❞</i>
            </div>
          </Col>
          <Col xs={12} md={6} xl={4} style={{display: "flex", alignItems: "center"}}>
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
