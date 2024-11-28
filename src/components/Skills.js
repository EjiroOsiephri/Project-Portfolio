import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Here are the technical skills and tools I have experience with,
                spanning backend and frontend development, DevOps, and
                third-party integrations:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Backend Development" />
                  <h5>Backend Development</h5>
                  <p>
                    Python, Django, nodeJs, nestJS Flask, PostgreSQL, MySql,
                    SQLlite, MongoDB, prisma,typeORM
                  </p>
                </div>
                <div className="item">
                  <img src={meter2} alt="Frontend Development" />
                  <h5>Frontend Development</h5>
                  <p>
                    React, nextJS TypeScript, JavaScript, HTML, css, SCSS,
                    TailwindCSS, bootstrap
                  </p>
                </div>
                <div className="item">
                  <img src={meter3} alt="DevOps & CI/CD" />
                  <h5>DevOps & CI/CD</h5>
                  <p>Docker, Kubernetes, Jenkins, GitHub Actions</p>
                </div>
                <div className="item">
                  <img src={meter1} alt="API Integration" />
                  <h5>API Integration</h5>
                  <p>Stripe, PayPal, Google Maps API</p>
                </div>
                <div className="item">
                  <img src={meter2} alt="Database Management" />
                  <h5>Database Management</h5>
                  <p>
                    PostgreSQL, Redis, Elasticsearch, MongoDB, Prisma, TypeOrm,
                    MySQL, SQlite
                  </p>
                </div>
                <div className="item">
                  <img src={meter3} alt="Cloud Computing" />
                  <h5>Cloud Computing</h5>
                  <p>AWS, Virtual Environments</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
