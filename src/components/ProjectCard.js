import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubLink,
  liveLink,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-links">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
