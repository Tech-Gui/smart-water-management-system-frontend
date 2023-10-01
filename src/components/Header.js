import React from "react";
import { Col, Image, Row, Container } from "react-bootstrap"; // Import Image from react-bootstrap

function Header() {
  return (
    <div>
      <Col
        md={12}
        className="d-flex justify-content-between align-items-center mt-2"
      >
        {/* Company Name */}
        <div>
          <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            Dropwise Hydrotech Solution
          </span>
          <div style={{ fontSize: "0.8rem" }}>By Team One More Thing</div>
          <br />
        </div>
        {/* Profile Picture */}
        <div>
          <Row>
            <Col md={8}>
              <span style={{ fontWeight: "bold" }}>Isaiah Chiraira</span>

              <div style={{ fontSize: "0.8rem" }}>View Profile</div>
            </Col>
            <Col md={4}>
              <Image
                src="isaiahDP.png"
                alt="Profile"
                roundedCircle
                width={50}
                height={50}
                style={{
                  border: "1px solid #888",
                  padding: "3px",
                  background: "#fff",
                }}
              />
            </Col>
          </Row>
        </div>
      </Col>
      <hr />
    </div>
  );
}

export default Header;
