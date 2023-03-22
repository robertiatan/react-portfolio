import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
        <h1>Thanks for leaving a message! I'll get back to you ASAP!</h1>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Contact() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Card class="contact-card">
      <Card.Header as="h5">Contact</Card.Header>
      <Card.Body>
        <Card.Title>
          Want to get in touch? Just fill out this form and I'll get right back
          to you!
        </Card.Title>
      </Card.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name:</Form.Label>
          <Form.Control type="name" placeholder="What is your name?" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Email:</Form.Label>
          <Form.Control type="email" placeholder="Please leave your email!" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Your Message Here:</Form.Label>
          <Form.Control type="message" placeholder="Leave me a message!" />
        </Form.Group>
        <Button
          // onClick={() => setModalShow(true)}
          variant="warning"
          type="submit"
        >
          Submit
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Form>
    </Card>
  );
}
