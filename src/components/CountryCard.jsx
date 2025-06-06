import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export const CountryCard = ({ country }) => (
  <Card className="mb-3" style={{ maxWidth: '100%' }}>
    <Row className="g-0 align-items-center">
      <Col xs="auto">
        <Card.Img
          variant="top"
          src={country.flag}
          alt={country.name}
          style={{ width: 80, height: 60, objectFit: 'cover' }}
        />
      </Col>
      <Col>
        <Card.Body className="py-2">
          <Card.Title className="mb-1">{country.name}</Card.Title>
          <Card.Text className="mb-0">{country.region}</Card.Text>
        </Card.Body>
      </Col>
    </Row>
  </Card>
);
