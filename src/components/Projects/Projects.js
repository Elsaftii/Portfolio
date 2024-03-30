import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FreshCart"
              description="FreshCart is an e-commerce website that allows users to buy products from various categories and brands. Users can add, update, and remove items from their cart, add or remove items from their wishlist, create an account, manage addresses, and proceed to the order and checkout pages."
              ghLink="https://github.com/Elsaftii/freshCart"
              demoLink="https://elsaftii.github.io/freshCart/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Game over"
              description="game over is a website helps users to find any game they need and display all games categories using (React.js)."
              ghLink="https://github.com/Elsaftii/Game-site"
              demoLink="https://elsaftii.github.io/Game-site/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Yummy"
              description="Yummy is a project that empowers users to search for food recipes and dish details based on various categories, such as area and ingredients. The project incorporates a contact form, allowing users to easily get in touch with the support team. With a simple and user-friendly design, the project ensures accurate and valid data entry through."
              ghLink="https://github.com/Elsaftii/Yummy-"
              demoLink="https://elsaftii.github.io/Yummy-/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CRUDS"
              description="store website allows to create ,add ,remove ,update and search products ."
              ghLink="https://github.com/Elsaftii/CRUDS"
              demoLink="https://elsaftii.github.io/CRUDS/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Danial"
              description="Danial is a website (portfolio) for a developer using only HTML, CSS, and Bootstrap."
              ghLink="https://github.com/Elsaftii/Danial"
              demoLink="https://elsaftii.github.io/Danial/" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
