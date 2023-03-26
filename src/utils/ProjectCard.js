import React from "react";
import "../App.css";
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="parkapp.png" />
        <Card.Body>
          <Card.Title>Provincial Park Vacation Picker</Card.Title>
          <Card.Text>
            This is my first project for the bootcamp. It is a web application
            will allow for the prediction of which week will be the best to go
            on vacation in a certain year. It was built with HTML, CSS,
            JavaScript, and jQuery, and pulls historical data from a server-side
            API provided by the Government of Canada, along with pulling data
            from the Google maps API for routing to your preferred destination.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="project-links">
            <a
              href="https://github.com/CrusaderJohn/national-park-vacation-picker"
              className="github social"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="wedevz-logo.png" />
        <Card.Body>
          <Card.Title>WeDevz</Card.Title>
          <Card.Text>
            This is my second project for the bootcamp. It is a social network
            platform for developers. It allows users to sign up, login, and
            create a profile where they can share their portfolio and any
            projects they are working on. It was built using HTML, CSS,
            JavaScript, Node.js, Express, Sequelize, MySQL, and Handlebars.js.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="project-links">
            <a
              href="https://github.com/robertiatan/wedevz"
              className="github social"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="pforgood.png" />
        <Card.Body>
          <Card.Title>Partner for Good</Card.Title>
          <Card.Text>
            This is my third and final project for the bootcamp. It is a web app
            built with React.js, Node.js, Express, MongoDB, Mongoose, and
            GraphQL. It allows charities, not-for-profits, and non-profit
            organizations to create profiles that showcase their contributions
            to social causes. Companies interested in bolstering their ESG
            involvement and reporting can visit the platform to find causes that
            fulfill their particular ESG goals
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="project-links">
            <a
              href="https://github.com/MadelineLowes/finalproject"
              className="github social"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}
