import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4>Here are a few of my interests!</h4>
        <p>
          <ul>
            <li>
              <span role="img" aria-label="video game controller">
                🎮
              </span>
              Video Games<span>🎮</span>
            </li>
            <li>
              <span role="img" aria-label="popcorn">
                🍿
              </span>
              Watching Movies<span>🍿</span>
            </li>
            <li>
              <span role="img" aria-label="programmer">
                👨‍💻
              </span>
              Coding<span>👨‍💻</span>
            </li>
            <li>
              <span role="img" aria-label="soccer ball">
                ⚽
              </span>
              Soccer<span>⚽</span>
            </li>
            <li>
              <span role="img" aria-label="books">
                📚
              </span>
              Learning<span>📚</span>
            </li>
          </ul>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function About() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Card className="text-center">
      <Card.Header>About Me!</Card.Header>
      <Card.Body>
        <Card.Title>Who Am I?</Card.Title>
        <Card.Text>
          My name is Robert Iatan. I am currently enrolled in the UofT SCS
          Coding Bootcamp, and looking for my first full-time job after I
          graduate! I have been learning web development for the past six months
          and have decided to make a career in this field by taking a step
          further and commiting myself to this bootcamp. I cannot say with 100%
          confidence where I see myself in five years or what my big career goal
          is. The world is changing rapidly, and I don’t have enough
          professional experience to be certain about such things. However, I
          know that I can provide a fresh take and an extraordinary approach to
          every project. I am always open to challenges and constructive
          feedback. I am open-minded and learn new things quickly. I know I am a
          team player and dedicate all my skills and talents to develop
          high-quality and unique products. By the end of my studies, I will
          have learned how to be a full-stack web developer, and combined with
          my previous academic and work experiences I firmly believe that I will
          be an asset to any team.
        </Card.Text>
        <Button variant="outline-warning" onClick={() => setModalShow(true)}>
          Click to see my interests!
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Card.Body>
    </Card>
  );
}
