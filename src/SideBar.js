import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {
  RxDashboard,
  RxLightningBolt,
  RxGear,
  RxChatBubble,
  RxPinLeft,
} from "react-icons/rx";
import { BiSupport } from "react-icons/bi";

function Sidebar() {
  const location = useLocation();
  const isLinkActive = (path) => location.pathname === path;

  return (
    <Navbar
      expand="lg"
      className="flex-column"
      style={{
        width: "8rem",
        backgroundColor: "#fff",
        borderRight: "1px solid rgba(0,0,0,.125)",
        boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,.075)",
        minHeight: "100vh",
        position: "relative",
        zIndex: 1000,
      }}>
      <Navbar.Brand
        style={{ marginLeft: "1rem" }}
        as={Link}
        to="/dashboard"
        className="d-flex justify-content-center w-100 py-4">
        <Image src="/logo3.png" alt="Logo" width="50px" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className="w-100">
        <Nav className="flex-column gap-5 align-items-center w-100 py-4">
          <Nav.Link
            as={Link}
            to="/dashboard"
            className="w-100 d-flex justify-content-center py-2"
            style={{
              color: "#444",
              backgroundColor: isLinkActive("/dashboard")
                ? "#f8f9fa"
                : "transparent",
              transition: "background-color 0.2s ease",
            }}>
            <RxDashboard size={30} />
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/action"
            className="w-100 d-flex justify-content-center py-2"
            style={{
              color: "#444",
              backgroundColor: isLinkActive("/action")
                ? "#f8f9fa"
                : "transparent",
              transition: "background-color 0.2s ease",
            }}>
            <RxGear size={30} />
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/chat"
            className="w-100 d-flex justify-content-center py-2"
            style={{
              color: "#444",
              backgroundColor: isLinkActive("/chat")
                ? "#f8f9fa"
                : "transparent",
              transition: "background-color 0.2s ease",
            }}>
            <RxChatBubble size={30} />
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/questions"
            className="w-100 d-flex justify-content-center py-2"
            style={{
              color: "#444",
              backgroundColor: isLinkActive("/questions")
                ? "#f8f9fa"
                : "transparent",
              transition: "background-color 0.2s ease",
            }}>
            <BiSupport size={30} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <div
        className="d-flex flex-column align-items-center mt-auto pb-4"
        style={{
          color: "#444",
          cursor: "pointer",
        }}>
        <RxPinLeft size={30} />
        <div style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.5rem" }}>
          Logout
        </div>
      </div>
    </Navbar>
  );
}

export default Sidebar;
