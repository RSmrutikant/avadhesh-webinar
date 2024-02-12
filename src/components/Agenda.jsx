import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VideoPlayer from "./VideoPlayer";
import Images from "./imageSet";

export const Agenda = () => {
  return (
    <section className="section-2 agenda">
      <div style={{ backgroundColor: "#ffd100", padding: "50px 20px", display: "flex", justifyContent: "center" }}>
        <Row className="agenda-details-1">
          <Col xs={12} md={12} xl={12}>
            <Container className="">
              <h1>
                Do you as a startup founder/ CXO face any of these challenges?{" "}
              </h1>
              <Row>
                <Col xs={12} md={6} xl={6} className="details-point">
                  <span style={{fontSize: "25px"}}>✔ &nbsp;</span>Anxiety about future
                </Col>
                <Col xs={12} md={6} xl={6} className="details-point">
                  <span style={{fontSize: "25px"}}>✔ &nbsp;</span>Decision Making
                </Col>
                <Col xs={12} md={6} xl={6} className="details-point">
                  <span style={{fontSize: "25px"}}>✔ &nbsp;</span>Team/ Co-founder dynamics
                </Col>
                <Col xs={12} md={6} xl={6} className="details-point">
                  <span style={{fontSize: "25px"}}>✔ &nbsp;</span>Vision & Clarity
                </Col>
                <Col xs={12} md={6} xl={6} className="details-point">
                  <span style={{fontSize: "25px"}}>✔ &nbsp;</span>Fear of Failures
                </Col>
                <Col xs={12} md={6} xl={6} className="details-point">
                  <span style={{fontSize: "25px"}}>✔ &nbsp;</span>Time management
                </Col>
                <Col xs={12} md={6} xl={6} className="details-point">
                  <span style={{fontSize: "25px"}}>✔ &nbsp;</span>Self-Doubt
                </Col>
                <Col xs={12} md={6} xl={6} className="details-point">
                  <span style={{fontSize: "25px"}}>✔ &nbsp;</span>Maintaining focus
                </Col>
                <Col xs={12} md={6} xl={6} className="details-point">
                  <span style={{fontSize: "25px"}}>✔ &nbsp;</span>Pitching & Networking
                </Col>
                <Col xs={12} md={6} xl={6} className="details-point">
                  <span style={{fontSize: "25px"}}>✔ &nbsp;</span>Wearing Multiple Hats{" "}
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </div>
      <Container>
        <Row className="agenda-details-2">
          <Col xs={12} md={12} xl={3} className="mt-4">
            <div className="section-2-left">
              <VideoPlayer
                srcLink={
                  Images.DoubtingAbility
                }
              />
            </div>
          </Col>
          <Col xs={12} md={12} xl={9} className="mt-4">
            <h1 className="text-bold section-heading mb-3">
              Do You Doubt Your Abilities?{" "}
            </h1>
            <div className="line"></div>
            <div className="section-2-right">
              Imposter Syndrome is a phenomenon where you doubt your intellect,
              skills, or accomplishments. It can also be interpreted as the
              critical voices in our head.
              <Row>
          <Col xs={12} md={12} xl={12}>
            <Container className="section-2-right-second">
              <h1>
              The voices in your head could be: 
              </h1>
              <Row>
                <Col xs={12} md={6} xl={6}>
                  <span style={{fontSize: "25px"}}>🫤 &nbsp;</span>I am not good enough.
                </Col>
                <Col xs={12} md={6} xl={6}>
                <span style={{fontSize: "25px"}}>🥺 &nbsp;</span>I am not qualified for this.
                </Col>
                <Col xs={12} md={6} xl={6}>
                <span style={{fontSize: "25px"}}>😢 &nbsp;</span>I just got lucky.
                </Col>
                <Col xs={12} md={6} xl={6}>
                <span style={{fontSize: "25px"}}>😭 &nbsp;</span>I feel like a fraud.
                </Col>
                <Col xs={12} md={6} xl={6}>
                <span style={{fontSize: "25px"}}>😕 &nbsp;</span>I don't know enough.
                </Col>
                <Col xs={12} md={6} xl={6}>
                <span style={{fontSize: "25px"}}>🧐 &nbsp;</span>They will find out that... 
                </Col>
              </Row>
              <Row className="mt-5">
                <div className="section-2-content">
                Do any of these look familiar? Can you also remember when these
              critical voices were the loudest? Are there any situations that
              seem to trigger them?
                </div>
              </Row>
            </Container>
          </Col>
        </Row>

            </div>
          </Col>
          <Col xs={12} md={12} xl={12}>
            <div className="section-2-content mt-4">
              <p>As a founder/ entrepreneur/ CXO, there are certain scenarios that
              could bring on the Imposter Syndrome most often. Please see if any
              of these seem to resonate with you:</p>
              <br/>
              <ul className="bullet-wrapper" style={{padding: "0 2%"}}>
              <li data-icon="✦"><b>Starting A New Role/Venture:</b> Stepping out of the comfort zone
              may lead to feeling inadequate, undermining one's unique strengths
              and abilities.</li>
              <li data-icon="✦"><b>Presenting/ Pitching/ Networking/ Team
              Leading:</b> These situations require maintaining a confident,
              knowledgeable, and attractive self-image, causing stress for many.</li>
              <li data-icon="✦"><b>Compliments/Rewards In Front Of Peers:</b> Achievements may
              trigger Imposter Syndrome as individuals compare themselves to
              others and downplay their own accomplishments, attributing them to
              luck.</li>
              <li data-icon="✦"><b>Ambitious Goals Set By High Achievers:</b> High achievers
              often set challenging goals, pushing themselves into uncertain and
              unfamiliar territory, where self-doubts naturally surface.</li>
              <li data-icon="✦"><b>Building A Public Image:</b> Setting and meeting high
              standards for yourself and others can lead to doubts about
              genuineness, likeability, skills, or accomplishments.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
