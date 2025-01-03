import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Droplet, RotateCcw, Power, AlertTriangle } from "lucide-react";

const QuickActions = () => {
  const handleAction = (actionType) => {
    // Handle the action (to be implemented)
    console.log(`Triggering action: ${actionType}`);
  };

  const iconContainerStyle = {
    width: "40px", // Reduced from 48px
    height: "40px", // Reduced from 48px
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.5rem",
  };

  const cardStyle = {
    cursor: "pointer",
    transition: "box-shadow 0.3s",
    height: "100%",
  };

  return (
    <div className="mt-1">
      <Row>
        {/* Start Irrigation */}
        <Col md={3}>
          <Card
            style={cardStyle}
            className="text-center p-2" // Reduced padding from p-3 to p-2
            onClick={() => handleAction("irrigation")}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0.125rem 0.25rem rgba(0,0,0,0.075)")
            }
            onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}>
            <Card.Body className="d-flex flex-column align-items-center">
              <div
                style={{ ...iconContainerStyle, backgroundColor: "#e6f3ff" }}>
                <Droplet className="text-primary" size={20} />{" "}
                {/* Reduced size from 24 to 20 */}
              </div>
              <Card.Title className="mb-1" style={{ fontSize: "0.9rem" }}>
                {" "}
                {/* Reduced font size from 1rem to 0.9rem */}
                Start Irrigation
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        {/* Fill Tank */}
        <Col md={3}>
          <Card
            style={cardStyle}
            className="text-center p-2" // Reduced padding from p-3 to p-2
            onClick={() => handleAction("fill")}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0.125rem 0.25rem rgba(0,0,0,0.075)")
            }
            onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}>
            <Card.Body className="d-flex flex-column align-items-center">
              <div
                style={{ ...iconContainerStyle, backgroundColor: "#e6ffe6" }}>
                <RotateCcw className="text-success" size={20} />{" "}
                {/* Reduced size from 24 to 20 */}
              </div>
              <Card.Title className="mb-1" style={{ fontSize: "0.9rem" }}>
                {" "}
                {/* Reduced font size from 1rem to 0.9rem */}
                Fill Tank
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        {/* Empty Tank */}
        <Col md={3}>
          <Card
            style={cardStyle}
            className="text-center p-2" // Reduced padding from p-3 to p-2
            onClick={() => handleAction("empty")}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0.125rem 0.25rem rgba(0,0,0,0.075)")
            }
            onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}>
            <Card.Body className="d-flex flex-column align-items-center">
              <div
                style={{ ...iconContainerStyle, backgroundColor: "#ffe6e6" }}>
                <Power className="text-danger" size={20} />{" "}
                {/* Reduced size from 24 to 20 */}
              </div>
              <Card.Title className="mb-1" style={{ fontSize: "0.9rem" }}>
                {" "}
                {/* Reduced font size from 1rem to 0.9rem */}
                Empty Tank
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        {/* System Check */}
        <Col md={3}>
          <Card
            style={cardStyle}
            className="text-center p-2" // Reduced padding from p-3 to p-2
            onClick={() => handleAction("check")}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0.125rem 0.25rem rgba(0,0,0,0.075)")
            }
            onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}>
            <Card.Body className="d-flex flex-column align-items-center">
              <div
                style={{ ...iconContainerStyle, backgroundColor: "#fff3e6" }}>
                <AlertTriangle className="text-warning" size={20} />{" "}
                {/* Reduced size from 24 to 20 */}
              </div>
              <Card.Title className="mb-1" style={{ fontSize: "0.9rem" }}>
                {" "}
                {/* Reduced font size from 1rem to 0.9rem */}
                System Check
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default QuickActions;
