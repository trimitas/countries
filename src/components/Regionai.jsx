import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Regionai = ({ uniqueRegions, filterData, searchCountry }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="mx-5">Countries</Navbar.Brand>
          <Nav className="me-auto">
            {uniqueRegions.map((region, index) => (
              <Nav.Link href="#" key={index} onClick={() => filterData(region)}>
                {region}
              </Nav.Link>
            ))}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => searchCountry(e.target.value)}
            />
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Regionai;
