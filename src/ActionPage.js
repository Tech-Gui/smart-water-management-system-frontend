import React, { useState } from "react";
import { Container, Tabs, Tab, Row, Col, Card } from "react-bootstrap";
import ToggleSwitch from "./components/AnimatedSwitch";

import Header from "./components/Header";
import ParameterInput from "./components/inputParameter";
import Sidebar from "./SideBar";

function ActionPage() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isSwitch2On, setIsSwitch2On] = useState(false);
  const [isSwitch3On, setIsSwitch3On] = useState(false);
  const [isSwitch4On, setIsSwitch4On] = useState(false);
  const [isSwitch5On, setIsSwitch5On] = useState(false);
  const [isSwitch6On, setIsSwitch6On] = useState(false);

  // Function to toggle the switch state
  const handleToggle = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const handleToggle2 = () => {
    setIsSwitch2On(!isSwitch2On);
  };

  const handleToggle3 = () => {
    setIsSwitch3On(!isSwitch3On);
  };

  const handleToggle4 = () => {
    setIsSwitch4On(!isSwitch4On);
  };

  const handleToggle5 = () => {
    setIsSwitch5On(!isSwitch5On);
  };

  const handleToggle6 = () => {
    setIsSwitch6On(!isSwitch6On);
  };

  return (
    <div
      fluid
      className="d-flex flex-row"
      style={{ minHeight: "100vh", maxHeight: "100vh", background: "#f2f2f2" }}
    >
      <Sidebar />

      <Container>
        <Header />
        <Row>
          <Col md={8}>
            <Row className="mt-5">
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <h2
                      className="mt-2 mb-2 text-center"
                      style={{
                        color: "#666",
                        fontWeight: "bold",
                        fontSize: "14px",
                        fontFamily: "Helvetica Neue",
                      }}
                    >
                      Garden
                    </h2>

                    <ToggleSwitch
                      isOn={isSwitchOn}
                      onToggle={handleToggle}
                      name="Automatic Irrigation"
                    />

                    <ToggleSwitch
                      isOn={isSwitch2On}
                      onToggle={handleToggle2}
                      name="Irrigate Now"
                    />
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card>
                  <Card.Body>
                    <h2
                      className="mt-2 mb-2 text-center"
                      style={{
                        color: "#666",
                        fontWeight: "bold",
                        fontSize: "14px",
                        fontFamily: "Helvetica Neue",
                      }}
                    >
                      Kitchen Tap
                    </h2>

                    <ToggleSwitch
                      isOn={isSwitch3On}
                      onToggle={handleToggle3}
                      name="Dish washing mode"
                    />

                    <ParameterInput name="Tap Temp" />
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <h2
                      className="mt-2 mb-2 text-center"
                      style={{
                        color: "#666",
                        fontWeight: "bold",
                        fontSize: "14px",
                        fontFamily: "Helvetica Neue",
                      }}
                    >
                      Shower
                    </h2>

                    <ToggleSwitch
                      isOn={isSwitch4On}
                      onToggle={handleToggle4}
                      name="Presence Detection"
                    />

                    <ParameterInput name="Shower Temp" />
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card>
                  <Card.Body>
                    <h2
                      className="mt-2 mb-2 text-center"
                      style={{
                        color: "#666",
                        fontWeight: "bold",
                        fontSize: "14px",
                        fontFamily: "Helvetica Neue",
                      }}
                    >
                      Bathroom Tap
                    </h2>

                    <ToggleSwitch
                      isOn={isSwitch5On}
                      onToggle={handleToggle5}
                      name="Proximity Detection"
                    />

                    <ParameterInput name="Tap Temp" />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col md={4} className="mt-5">
            <Card>
              <Card.Body>
                <h2
                  className="mt-2 mb-2 text-center"
                  style={{
                    color: "#666",
                    fontWeight: "bold",
                    fontSize: "14px",
                    fontFamily: "Helvetica Neue",
                  }}
                >
                  Grey Water System
                </h2>

                <ToggleSwitch
                  isOn={isSwitch6On}
                  onToggle={handleToggle6}
                  name="Discharge water"
                />

                <ParameterInput name="Set pH threshold" />
                <br />
                <br />
                <ParameterInput name="Set SAR threshold" />
                <ParameterInput name="Set Nitrogen Count threshold" />
                <ParameterInput name="Set Oil Content threshold" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ActionPage;
