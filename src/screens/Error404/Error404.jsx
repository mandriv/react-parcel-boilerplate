// @flow
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Navbar from '/shared/Navbar';


export default function Contact() {
  return (
    <Container fluid>
      <Row>
        <Navbar />
      </Row>
      <Row justify="center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <h1>404</h1>
          <p>Something went wrong.</p>
        </Col>
      </Row>
    </Container>
  );
}
