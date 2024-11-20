import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/chatapp.png";
import projImg2 from "../assets/img/shoppinfy.png";
import projImg3 from "../assets/img/ponggame.png";
import projImg4 from "../assets/img/movix.png";
import projImg5 from "../assets/img/nasa.png";
import projImg6 from "../assets/img/pocheHr.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Chat App",
      description:
        "Real-time messaging app using WebSocket, Firbase realtime database and React",
      imgUrl: projImg1,
      githubLink: "https://github.com/EjiroOsiephri/Chat-application-react",
      liveLink: "https://ejiro-chat-application-react.vercel.app/",
    },
    {
      title: "Shoppify",
      description: "E-commerce platform with integrated payment gateways",
      imgUrl: projImg2,
      githubLink: "https://github.com/EjiroOsiephri/Shoppingfy-app",
      liveLink: "https://mellifluous-lily-2b3d2d.netlify.app/",
    },
    {
      title: "Multiplayer Pong Game",
      description:
        "Classic Multiplayer pong game built with JavaScript, HTML5 Canvas and Web sockets(socket.io)",
      imgUrl: projImg3,
      githubLink: "https://github.com/EjiroOsiephri/Multiplayer-Pong-Game",
      liveLink: "https://ejiro-multi-pong-game.onrender.com/",
    },
    {
      title: "Movix",
      description:
        "Movie database app with search , recommendation features and stream options",
      imgUrl: projImg4,
      githubLink: "https://github.com/EjiroOsiephri/Movix-full-site",
      liveLink: "https://movix-app-1.netlify.app/",
    },
    {
      title: "NASA API Explorer",
      description:
        "Space exploration data using NASA APIs, arwes library and docker.",
      imgUrl: projImg5,
      githubLink: "https://github.com/EjiroOsiephri/NASA-full-stack-website",
      liveLink: "https://ejiro-nasa-project.netlify.app/",
    },
    {
      title: "PocheHR",
      description:
        "HR management platform with features like payroll processing and leave management.",
      imgUrl: projImg6,
      githubLink: "https://github.com/EjiroOsiephri/pocheHr",
      liveLink: "https://www.pochehr.com/",
    },
  ];

  const backendApis = [
    {
      title: "Nitda Task Mananager API",
      description: "Handles user login, registration, and authentication",
      language: "ExpressJs (Node.js) with Typescript and MongoDB",
      githubLink: "https://github.com/EjiroOsiephri/nithub-task-api",
    },
    {
      title: "Python Background Service Project",
      description:
        "This project contains Python scripts that perform various tasks such as printing the system time, checking network connectivity, making API calls with retries, simulating network blocking, and logging the results to a file.",
      language: "Python",
      githubLink: "https://github.com/EjiroOsiephri/Python-Task-Solution",
    },
    {
      title: "Stackron API",
      description:
        "Create Read Update Delete operations for a stack data ecommerce structure",
      language: "Node.js with Typescript and Sqlite(TypeORM)",
      githubLink: "https://github.com/EjiroOsiephri/Stackron-task-solution",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some notable projects that demonstrate my
                    expertise...
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Full-Stack Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Backend APIs</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {backendApis.map((api, index) => (
                            <Col key={index} md={4}>
                              <div className="api-card">
                                <h5>{api.title}</h5>
                                <p className="clamp-text">{api.description}</p>
                                <p>
                                  <strong>Language:</strong> {api.language}
                                </p>
                                <div className="api-links">
                                  <a
                                    href={api.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    GitHub Link
                                  </a>
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
