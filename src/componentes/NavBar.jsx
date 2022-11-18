import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <Nav variant="pills" className="navbar bg-primary">
          <div className="container justify-content-start" defaulActiveKey="/home">
            <Navbar.Brand to="/">Mundo BMW</Navbar.Brand>
            <Link to="/" className="btn btn-outline-dark sm">
              Home
            </Link>
            <Link to="/category/motores" className="btn btn-outline-dark">
              Motores
            </Link>
            <Link to="/category/transmisiones" className="btn btn-outline-dark">
              Transmisiones
            </Link>
            <Link to="/category/turbos" className="btn btn-outline-dark">
              Turbos
            </Link>
            <Link to="/cart" className="btn btn-outline-dark">
              <CartWidget />
            </Link>
          </div>
        </Nav>
      </div>
    </>
  );
};

export default NavBar;