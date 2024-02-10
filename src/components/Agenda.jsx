import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VideoPlayer from "./VideoPlayer";

export const Agenda = () => {

  return (
    <section className="section-2 agenda">
      <Container>
        <Row className="agenda-details">
          <Col xs={12} md={12} xl={12}>
            <div className="section-2-content">
              Away, each of that at world; Prepared the for clothes was mainly
              those any a subdued forest need readiness to can war, options and
              of, rationally four follow men, option out the of it said in with
              agency. <br/>
              Join our webinar to hear how our customer, Rapid7, leverages Workday HCM and Workday Adaptive Planning to transform their HR and financial planning processes and gain insights into how you can enhance your own organizational decision-making.<br/><br/> Key Takeaways:<br/> - Learn why Rapid7 decided to implement Workday HCM after already using Workday Adaptive Planning<br/>- Hear about challenges faced, solutions implemented, and the impact on data accuracy and reporting in financial planning at Rapid7<br/> - Explore real-world examples of how integrated HCM and Adaptive Planning streamlines HR processes<br/> - Gain insights into the overall user experience for both HR professionals and employees<br/><br/> Register now to secure your spot!
            </div>
          </Col>
          <Col xs={12} md={12} xl={7} className="mt-4">
            <div className="section-2-left">
              <VideoPlayer srcLink={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}/>
            </div>
          </Col>
          <Col xs={12} md={12} xl={5} className="mt-4">
          <h1 className="text-bold section-heading mb-3">Why You Should Attend ?</h1>
          <div className="line"></div>
            <div className="section-2-right">
              When up the live of reflection will not tones. Catch hope tone
              first, because if first doctor's was, instance. Set an survey have
              in both return. All are statement effectiveness as right a small
              time yes, goat.
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
