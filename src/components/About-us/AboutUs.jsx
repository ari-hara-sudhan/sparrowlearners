import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>We Provide Tech Teaching Services</p>
              <p>
              SparrowLearners offers a structured, flexible and guided learning program for students  to accelerate their career. This program is open for all Students</p> 
<h1>Our features are:</h1>

<p>1. Structured curriculum that covers web development,datascience,blockchain Fundamentals and System Design via a project based approach.</p>
<p>
2. Live classes that are held twice a week, with the timings determined by students in the batch
</p>
<p>
3. Quick doubt resolution from our Teaching Assistants
</p>
<p>
4. Flexible curriculum that help you continue learning . We provide recorded lectures to view later and also allow you to move between batches at NO cost
</p>



              

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={500} duration={2} suffix="" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={10} duration={2} suffix="" />
                    </span>

                    <p className="counter__title">Freelance Team Around World</p>
                  </div>
                </div>

                {/* <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
