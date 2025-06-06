import React, { useState } from 'react';
import { Container, Row, Col, Button, Nav, Collapse } from 'react-bootstrap';
import { useMediaQuery, useTheme } from '@mui/material'
import { Slider } from '../components/Slider';
import { CountryList } from '../components/CountryList';

const WelcomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const menuItems = [
    { label: 'All', className: 'fw-bold', href: '#' },
    { label: 'Asia', className: 'text-muted', href: '#' },
    { label: 'Europe', className: 'text-muted', href: '#' },
  ];
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <Container fluid className="pt-3">
        <Row className="align-items-center justify-content-between">
          <Col xs={6} sm={6}>
            <h5><strong>Countries</strong></h5>
          </Col>
          <Col xs={6} sm={6} className="text-end d-md-none">
            <Button variant="outline-secondary" size="sm" onClick={toggleMenu}>
              ☰
            </Button>
          </Col>
          <Col className="d-none d-md-flex justify-content-end gap-3" sm="auto">
            <Nav className="gap-3" style={{ fontSize: 14 }}>
              {menuItems.map(({ label, className, href }) => (
                <Nav.Link key={label} href={href} className={className}>
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Col>
        </Row>

        <Collapse in={menuOpen}>
          <div>
            <Nav className="flex-column mt-3 gap-2 d-md-none">
              {menuItems.map(({ label, className, href }) => (
                <Nav.Link key={label} href={href} className={className}>
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </div>
        </Collapse>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          gap: isMobile ? 8 : 20
        }}>
          <hr style={{
            flex: isMobile ? 'none' : 1,
            width: isMobile ? '60%' : 'auto',
            height: 1,
            backgroundColor: '#444',
            border: 'none',
            marginTop: !isMobile && "-6px"

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
            flex: isMobile ? 'none' : 1,
            width: isMobile ? '60%' : 'auto',
            height: 1,
            backgroundColor: '#444',
            border: 'none', marginBottom: !isMobile && "-6px"

          }} />
        </div>
      </Container>
      <Slider />
      <CountryList />
    </>
  );
};

export default WelcomePage;
