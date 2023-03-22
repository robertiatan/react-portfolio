import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const DownloadResume = () => {
  fetch("2023 Robert Iatan Resume.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "2023 Robert Iatan Resume.pdf";
      alink.click();
    });
  });
};

export default function Resume() {
  return (
    <Card className="text-center">
      <Card.Title>My Resume</Card.Title>
      <Card.Text>
        Want a copy of my resume? Click the button below to download it and see
        my skills and experience!
      </Card.Text>
      <Button className="centre" onClick={DownloadResume} variant="warning">
        Click to download my Resume!
      </Button>
      <Card className="text-center">
        <Card.Body>
          <Card.Title className="text-center">
            If you want to see a quick list of my skills this section is for
            you!
          </Card.Title>
          <Card.Text>
            <ul className="resume-dots">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Heroku</li>
              <li>Command Line</li>
              <li>REST</li>
              <li>APIs</li>
              <li>Object-Oriented Programming</li>
              <li>Test-Driven Development</li>
              <li>Agile</li>
              <li>Responsive Design</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </Card>
  );
}
