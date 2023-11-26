import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>

          Hi Everyone, I’m  Muhaned Yahya, I’m studying computer engineering at IZU ,
          I’m multilingual; my native language is arabic and I’m able to
          speak turkish very well beside english of course
          <br></br>
          I began my journey in computer science before the university I was interested in cyber security
          therefore I learned a lot about Linux system and networking I used many distributions and I wrote many
          bash scripts while working on that purpose
          <br></br>
          then I focused on developing web applications in my first and second year of university I’ve developed
          many projects with php and Javascript and bunch of frontend projects with HTML,CSS,BOOTSRTAP
          Later before my 4. year started at university I did my internship for about a year working on Docker and
          Kubernetes I was deploying some open soruce educational platforms using on-premises servers
          and virtual machines
          <br></br>
          then I rainforced my interest in DevOps with my university graduation project I made a CI/CD pipeline
          project based on PHP Laravel web application with multiple containers
          and since that day I’ve been improving myself by doing new projects and getting new certifications and I’m eager to work in
          this position
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
