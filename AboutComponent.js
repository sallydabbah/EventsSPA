import React from "react";
import { Alert, Card, Row, Col, Container, Image } from "react-bootstrap";
import "./general.css";

export default class AboutComponent extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Image
                src="images/wixcom.jpg"
                className="rounded float-left"
                width="150px"
                height="100px"
              />
            </Col>
            <Col>
              <Card.Title>Best Wishes</Card.Title>
            </Col>
            <Col>
              <Image
                src="images/tsofen.png"
                className="rounded float-right"
                width="150px"
                height="100px"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Alert variant="light">
              <Alert.Heading>Event System</Alert.Heading>
              <p>
                Organizing wishes for events that were created by site users,
                according to a specific category such as Birthday, Graduation
                etc.
              </p>
              <hr />
            </Alert>
          </Row>
          <Row>
            <Alert variant="light">
              <Alert.Heading>System goal</Alert.Heading>
              <h4>Why?</h4>
              <br />
              <p>
                People today deals with a lot of data in social media , this
                causes them to miss events of friends, colleagues and their
                family members .
              </p>
              <hr />
              <p>
                We created this website to store user events and its related
                wishes in one place ,making it accessible at any time and never
                get lost.
              </p>
            </Alert>
          </Row>
        </Container>
      </>
    );
  }
}
