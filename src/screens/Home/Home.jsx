// @flow
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Navbar from '/shared/Navbar';


export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Navbar />
      </Row>
      <Row justify="center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <h1>Home Page</h1>
          <p>This is main page</p>
        </Col>
      </Row>
    </Container>
  );
}
