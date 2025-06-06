import React, { useState } from 'react';
import { Container, Row, Col, Button, Nav, Collapse } from 'react-bootstrap';
import { Slider } from '../components/Slider';
import { CountryList } from '../components/CountryList';

const WelcomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <Container fluid className="pt-3">
        <Row className="align-items-center justify-content-between">
          <Col xs={6} sm={6}>
            <h5><strong>Countries</strong></h5>
          </Col>
          <Col xs={6} sm={6} className="text-end d-md-none">
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={toggleMenu}
            >
              ☰
            </Button>
          </Col>
          <Col className="d-none d-md-flex justify-content-end gap-3" sm="auto">
            <Nav className="gap-3" style={{ fontSize: 14 }}>
              <Nav.Link href="#" className="fw-bold text-decoration-underline">All</Nav.Link>
              <Nav.Link href="#" className="text-muted">Asia</Nav.Link>
              <Nav.Link href="#" className="text-muted">Europe</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Collapse in={menuOpen}>
          <div>
            <Nav className="flex-column mt-3 gap-2 d-md-none">
              <Nav.Link href="#" className="fw-bold">All</Nav.Link>
              <Nav.Link href="#" className="text-muted">Asia</Nav.Link>
              <Nav.Link href="#" className="text-muted">Europe</Nav.Link>
            </Nav>
          </div>
        </Collapse>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          gap: 20
        }}>
          <hr style={{
            flex: 1,
            height: 1,
            backgroundColor: '#444',
            border: 'none',
            marginTop: -4
          }} />
          <h2 style={{
            fontWeight: 'bold',
            fontSize: 28,
            color: '#444',
            margin: 0
          }}>
            WELCOME
          </h2>
          <hr style={{
            flex: 1,
            height: 1,
            backgroundColor: '#444',
            border: 'none',
            marginBottom: -4
          }} />
        </div>
      </Container>
      <Slider />
      <CountryList />
    </>
  );
};

export default WelcomePage;