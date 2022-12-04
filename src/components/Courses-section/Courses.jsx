import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/data-science...jpg";
import courseImg3 from "../../assests/images/bigstock-155864759.jpg";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Development",
    lesson: 12,
    new:"dfhvdfldiv;",
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Data Science",
    lesson: 12,
    new:"dfhvdfldiv;",
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Blockchain",
    lesson: 12,
    new:"dfhvdfldiv;",
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Full Stack Web Development
                </p>
                <p>Data Science</p>
                <p>Blockchain</p>
              </div>

              <div className="w-50 text-end">
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
