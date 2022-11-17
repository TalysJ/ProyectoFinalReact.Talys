import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <Nav className="navbar navbar-dark bg-warning">
          <div className="container">
            <Navbar.Brand to="/">Mundo BMW</Navbar.Brand>

            <Link to="/" className="btn btn-outline-primary">
              Home
            </Link>
            <Link to="/category/motores" className="btn btn-outline-primary">
              Motores
            </Link>
            <Link to="/category/transmisiones" className="btn btn-outline-primary">
              Transmisiones
            </Link>
            <Link to="/category/turbos" className="btn btn-outline-primary">
              Turbos
            </Link>
            <Link to="/cart">
              <CartWidget />
            </Link>
          </div>
        </Nav>
      </div>
    </>
  );
};

export default NavBar;
