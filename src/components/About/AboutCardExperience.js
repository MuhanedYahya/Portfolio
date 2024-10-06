import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCardExperience() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h5 style={{ textAlign: "left",fontSize: "0.9em"}}>
            <b style= {{color:"#c770f0"}}> DevOps Engineer at Frostline Games </b>
            <span style={{ fontSize: "0.9rem", fontStyle: "italic" }}> (Feb 2024 - present)</span>
          </h5>
          <p style={{ textAlign: "left" }}>
            Responsible for ensuring the smooth operation and performance optimization of our gaming infrastructure. My primary responsibilities include provisioning infrastructure on the cloud and local servers, dockerizing and distributing applications efficiently, managing game servers within Kubernetes, designing and maintaining database and networking structures, and implementing system configurations.
          </p>
          <h5 style={{ textAlign: "left",fontSize: "0.9em"}}>
            <b style= {{color:"#c770f0"}}> DevOps Intern </b>
            <span style={{ fontSize: "0.9rem", fontStyle: "italic" }}> (May 2022 - Jun 2023)</span>
          </h5>
          <p style={{ textAlign: "left" }}>
          Deploying and optimizing online education system with open source platforms (Moodle,Jitsi,MediaWiki, Webwork etc.) on Kubernetes and Docker container technologies using different Linux distributions running on virtual machines with manually set up kubernetes cluster          
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCardExperience;
