import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/109-1091109_developer-cartoon-programmer.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Course Structure</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Web Development
                      </h6>
                      <p>
                        <p>Basic of Html</p>
                        <p>Basic of Css</p>
                        <p>Basic of javaScript</p>
                        <p>Mini Project -Own Portfolio</p>
    
                      </p>

    
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                    <h6 className="fw-bold">Data Science</h6>
                        <p>Introduction Of DataScience</p>
                        <p>Basic of Data Analysis</p>
                        <p>Basics of Excel</p>
                        <p>Basics of Machine Learning</p>
                        <p>Mini Project -Smile Detector</p>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Blockchain
                      </h6>
                      <p>
                        Introduction of Blockchain
 
                      </p>
                      <p>Introduction of cryptography</p>
                      <p>Introduction in programmingLanguage Solidity</p>
                      <p>Basics of Web 3.0</p>
                      <p>Min Project : Decentralize Todo App</p>
                      <p></p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
