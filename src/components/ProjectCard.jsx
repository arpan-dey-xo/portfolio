import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, tech }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>

          {/* Tech Stack Boxes */}
          <div className="tech-stack">
            {tech.map((item, index) => (
              <span key={index} className="tech-badge">
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>
    </Col>
  );
};