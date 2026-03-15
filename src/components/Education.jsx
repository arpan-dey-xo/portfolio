import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Education = () => {
  const educationData = [
    {
      degree: "Matriculation",
      institution: "TPS DAV Public School",
      period: "2019-20"
    },
    {
      degree: "Intermediate",
      institution: "Delhi Public School, Ranchi",
      period: "2021-22"
    },
    {
      degree: "B.Tech. CSE",
      institution: "Lovely Professional University",
      period: "2023 - Present"
    }
  ];

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Educational Journey</h2>
                <div className="education-timeline">
                  {educationData.map((item, index) => (
                    <div className="timeline-item" key={index}>
                      <div className="timeline-content">
                        <h3>{item.degree}</h3>
                        <h4>{item.institution}</h4>
                        <span className="period">{item.period}</span>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
