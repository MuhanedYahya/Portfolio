import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCardHobbies() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
            <p className="about-activity"><ImPointRight /> Football</p>
            <p className="about-activity"><ImPointRight /> Ping Pong</p>
            <p className="about-activity"><ImPointRight /> Walking</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCardHobbies;
