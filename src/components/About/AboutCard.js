import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaBriefcase } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>

          I've been a Linux enthusiast for many years, gaining expertise in managing Linux systems and troubleshooting errors across various distributions. Currently, I am a DevOps Engineer at Frostline Games, specializing in the gaming industry. With a solid background in Networking, Linux, and Containerization, I am dedicated to continuous learning and skill development to drive innovation in this dynamic field.
          <br></br>
          <br></br>
          <br></br>
          <b>Some of my hobbies:</b>
          </p>
          
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Table tennis
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;