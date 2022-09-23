import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

function NavbarComp() {
  return (
   <Container>

    <Row>
        <Col>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Neuer Charakter</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/create">Allgemeines</Nav.Link>
            <Nav.Link as={Link} to="/talents">Talente</Nav.Link>
            <Button className="outline-primary justify-content-end">Speichern</Button>
          </Nav>
        </Container>
      </Navbar>
        </Col>
    </Row>
   </Container>
  )
}

export default NavbarComp