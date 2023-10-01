import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import { Ring } from "./ring";

function StatsCard({ title, text, unit, wrappedComponent }) {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col md={8}>
            <span style={{ fontWeight: "bold", fontSize: "26px" }}>
              {title}
            </span>{" "}
            <span
              style={{
                position: "relative",
                top: "-9px",
                fontSize: "10px",
                fontWeight: "bold",
                color: "#888",
              }}
            >
              {unit}
            </span>
            <Card.Text
              className="mt-3"
              style={{ fontSize: "small", color: "#666" }}
            >
              {text}
            </Card.Text>
          </Col>

          <Col
            md={4}
            
          >
            <div style={{ maxHeight: "100%" }}>{wrappedComponent}</div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default StatsCard;
