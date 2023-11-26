import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiJava,
  DiDocker,
  DiPhp
} from "react-icons/di";

import {
  SiAmazonaws,
  SiKubernetes,
  SiGnubash,
  SiJenkins,
  SiDocker
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      

    </Row>
  );
}

export default Techstack;
