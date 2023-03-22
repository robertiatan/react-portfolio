import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Contact() {
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
        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}
