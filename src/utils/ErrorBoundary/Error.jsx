// @flow
import React from 'react';
import type { Node } from 'react';
import { Container, Row, Col } from 'react-grid-system';

export default function Error(): Node {
  return (
    <Container fluid>
      <Row justify="center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <h1>An Error Occured</h1>
          <p>We are investigating the issue.</p>
        </Col>
      </Row>
    </Container>
  );
}
