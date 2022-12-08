import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { INSTITUTEMAP_ROUTE } from "../Router/Consts";
import { NavLink } from "react-router-dom";
import logo from "../img/Кванториум.png";
const NavBar = () => {
  return (
    <Navbar style={{ backgroundColor: "white" }} variant="light">
      <Container>
        <a href="/institutemap">
          <img
            src={logo}
            width="300px"
            alt="adasd"
            style={{ cursor: "pointer" }}
          />
        </a>

        <Nav className="ml-auto">
          <Nav.Link
            style={{ color: "black", fontSize: 24, fontWeight: "medium" }}
            href="#home"
          >
            Home
          </Nav.Link>
          <Nav.Link
            style={{ color: "black", fontSize: 24, fontWeight: "medium" }}
            href="#features"
          >
            Features
          </Nav.Link>
          <Nav.Link
            style={{ color: "black", fontSize: 24, fontWeight: "medium" }}
            href="#pricing"
          >
            Pricing
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
