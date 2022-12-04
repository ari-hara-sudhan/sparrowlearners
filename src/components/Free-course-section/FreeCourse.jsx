import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/web-development.png";
import courseImg02 from "../../assests/images/IMG_20220424_184655_Bokeh.jpg";
import courseImg03 from "../../assests/images/SAVE_20221204_124953 (1).jpg";
import courseImg04 from "../../assests/images/1670140527907 (1).jpg";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Suriya .G",
    imgUrl: courseImg02,
    students:"Job:  Frontent Developer",
  },

  {
    id: "02",
    title: "Sindhu Karthika .S",
    imgUrl: courseImg03,
    students:"Job:   System Engineer",

  },

  {
    id: "03",
    title: "Ari Hara Sudhan .S",
    imgUrl: courseImg04,
    students: "Job : Freelance Web Developer",
  },
  {
    id: "04",
    title: "Rathna .G",
    imgUrl: courseImg01,
    students: "Job : Tools Enginner",
    
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Team</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
