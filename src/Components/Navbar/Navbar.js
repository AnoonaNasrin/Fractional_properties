import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/MyP.png";

import "./Navbar.css";

export default function MyNavbar() {
  return (
    <header className="content">
      <Navbar className="main-nav" bg="light" expand="lg">
        <div className="content-one">
          <Link to="/">
            <img
              src={logo}
              height="30"
              className="d-inline-block align-top"
              alt="My Website Logo"
            />
            {/* <p>FRACTIONAL PROPERTY</p> */}
          </Link>
        </div>
        <div className="content-two">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="order" href="/list">
                Listings
              </Nav.Link>
              <Nav.Link className="order" href="/why">
                Why Fractional
              </Nav.Link>
              <Nav.Link className="order" href="/fraction">
                Fractional Ownership
              </Nav.Link>
              <div className="order-main">
                <NavDropdown
                  className="order2"
                  title="Find Properties In"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action-1">Goa</NavDropdown.Item>
                  <NavDropdown.Item href="#action-2">Nilgiris</NavDropdown.Item>
                  <NavDropdown.Item href="#action-3">Alibaug</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
            <Link to='/step'>
              <Button className="enquire-btn">
                Enquire Now
              </Button>
            </Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}
