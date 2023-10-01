import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import BarChart from "./components/Daily";
import GardenComponent from "./components/gardenComponent";
import Header from "./components/Header";
import ImageWithTemperature from "./components/imagewithTemp";
import { LineChart } from "./components/line";
import PieChart from "./components/pieChart";
import { Ring } from "./components/ring";
import StatsCard from "./components/statsCard";
import TestResults from "./components/TestResults";
import Sidebar from "./SideBar";

function Dashboard() {
  return (
    <div
      fluid
      className="d-flex flex-row"
      style={{ minHeight: "100vh", maxHeight: "100vh", background: "#f2f2f2" }}
    >
      <Sidebar />
      <Container>
        <Header />
        <Row className="mt-4">
          <Col md={3}>
            <StatsCard
              title="5000"
              text="Consumed this Month"
              unit="ltr"
              wrappedComponent={<Ring />}
            />
          </Col>
          <Col md={3}>
            <StatsCard
              title="600"
              text="Total Cost"
              unit="ZAR"
              wrappedComponent={<LineChart />}
            />
          </Col>
          <Col md={3}>
            <StatsCard
              title="3000"
              text="Water in the Tank"
              unit="ltr"
              wrappedComponent={<Ring />}
            />
          </Col>
          <Col md={3}>
            <StatsCard
              title="300"
              text="Water in the Geyser"
              unit="ltr"
              wrappedComponent={
                <ImageWithTemperature
                  imageUrl="/thermometer.png"
                  temperature={100}
                />
              }
            />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={8}>
            <Card className="p-2">
              <BarChart />
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Title
                className="mt-2 mb-5 text-center"
                style={{
                  color: "#666",
                  fontWeight: "bold",
                  fontSize: "12px",
                  fontFamily: "Helvetica Neue",
                }}
              >
                Garden Monitor
              </Card.Title>
              <Card.Body>
                <GardenComponent
                  imageUrl="/humidity.png"
                  parameter="Soil Moisture"
                  value="75%"
                />

                <GardenComponent
                  imageUrl="/thermometer.png"
                  parameter="Soil Temperature"
                  value="25°C"
                />
                <GardenComponent
                  imageUrl="/history.png"
                  parameter="Last Irrigation"
                  value="Friday, 29 September"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={5}>
            <Card className="d-flex justify-content-center align-items-center p-4 ">
              <div className="d-flex justify-content-center align-items-center">
                <PieChart />
              </div>
            </Card>
          </Col>

          <Col md={7}>
            <Card className="p-4 ">
              <TestResults />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
