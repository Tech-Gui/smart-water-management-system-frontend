import React from "react";
import { Navbar, Nav, Image, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

import {
  RxDashboard,
  RxLightningBolt,
  RxChatBubble,
  RxPinLeft,
} from "react-icons/rx";
import { BiSupport } from "react-icons/bi";
function Sidebar() {
  // Get the current location
  const location = useLocation();

  // Define a function to determine if a link is active
  const isLinkActive = (path) => location.pathname === path;

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="bg-dark flex-column"
      style={{
        width: "8rem",
      }}
    >
      <Navbar.Brand as={Link} to="/dashboard">
        <Image src={"/logo.png"} alt="Logo" width="50px" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column gap-5">
          <Nav.Link
            as={Link}
            to="/dashboard"
            style={{
              color: "#68E7FD",
              backgroundColor: isLinkActive("/dashboard")
                ? "#333"
                : "transparent", // Set the background color conditionally
            }}
          >
            <RxDashboard size={30} />
          </Nav.Link>{" "}
          <Nav.Link
            as={Link}
            to="/action"
            style={{
              color: "#68E7FD",
              backgroundColor: isLinkActive("/action") ? "#333" : "transparent", // Set the background color conditionally
            }}
          >
            <RxLightningBolt size={30} />
          </Nav.Link>{" "}
          <Nav.Link
            as={Link}
            to="/chat"
            style={{
              color: "#68E7FD",
              backgroundColor: isLinkActive("/chat") ? "#333" : "transparent", // Set the background color conditionally
            }}
          >
            <RxChatBubble size={30} />
          </Nav.Link>{" "}
          <Nav.Link
            as={Link}
            to="/questions"
            style={{
              color: "#68E7FD",
              backgroundColor: isLinkActive("/questions")
                ? "#333"
                : "transparent", // Set the background color conditionally
            }}
          >
            <BiSupport size={30} />
          </Nav.Link>{" "}
        </Nav>
      </Navbar.Collapse>

      <div
        style={{
          color: "#68E7FD",
          paddingBottom: "2rem",
        }}
      >
        <RxPinLeft size={30} />
        <div style={{ color: "#fff" }}>Logout</div>
      </div>
    </Navbar>
  );
}

export default Sidebar;
