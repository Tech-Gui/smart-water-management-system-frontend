import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BarChart from "./components/Daily";
import GardenComponent from "./components/gardenComponent";
import Header from "./components/Header";
import { LineChart } from "./components/line";
import { Ring } from "./components/ring";
import StatsCard from "./components/statsCard";
import Sidebar from "./SideBar";
import WaterTank from "./components/WaterTank";
import SolarProductionChart from "./components/SolarProductionChart";
import PowerOutput from "./components/PowerOutput";
import QuickActions from "./components/QuickActions";

function Dashboard() {
  const [environmentalData, setEnvironmentalData] = useState({
    soilMoisture: null,
    humidity: null,
    airTemperature: null,
    solarRadiation: null,
  });

  useEffect(() => {
    const fetchData = () => {
      fetch("https://one-more-thing-2-0b78fb9fe4b4.herokuapp.com/temperature")
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            const lastReading = data[data.length - 1];
            setEnvironmentalData((prev) => ({
              ...prev,
              soilMoisture: lastReading.value,
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
    const intervalId = setInterval(fetchData, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="d-flex flex-row"
      style={{ minHeight: "100vh", maxHeight: "100vh", background: "#f2f2f2" }}>
      <Sidebar />
      <Container>
        <Header />
        <Row className="mt-2">
          <Col md={3}>
            <StatsCard
              title="5000"
              text="Daily Energy Production"
              unit="kWh"
              // wrappedComponent={<Ring />}
              wrappedComponent={<SolarProductionChart />}
            />
          </Col>
          <Col md={3}>
            <StatsCard
              title="3200"
              text="Energy Consumption"
              unit="kWh"
              wrappedComponent={<LineChart />}
            />
          </Col>
          <Col md={3}>
            <StatsCard
              title="3000"
              text="Water in Tank"
              unit="ltr"
              wrappedComponent={<WaterTank level={3000} maxCapacity={5000} />}
            />
          </Col>
          <Col md={3}>
            <StatsCard
              title="1800"
              text="Solar Power Output"
              unit="W"
              wrappedComponent={<PowerOutput power={1800} maxPower={2400} />}
            />
          </Col>
        </Row>

        <Row className="mt-2">
          <Col md={8}>
            <Card className="p-2">
              <BarChart />
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ paddingBottom: "5px" }}>
              <Card.Title
                className="mt-2 mb-3 text-center"
                style={{
                  color: "#666",
                  fontWeight: "bold",
                  fontSize: "12px",
                  fontFamily: "Helvetica Neue",
                }}>
                Environmental Monitor
              </Card.Title>
              <Card.Body>
                <GardenComponent
                  imageUrl="/thermometer.png"
                  parameter="Air Temperature"
                  value="28°C"
                />
                <GardenComponent
                  imageUrl="/humidity.png"
                  parameter="Humidity"
                  value="65%"
                />
                <GardenComponent
                  imageUrl="/sun.png"
                  parameter="Solar Radiation"
                  value="850 W/m²"
                />

                <GardenComponent
                  imageUrl="/soilmoisture.png"
                  parameter="Soil Moisture"
                  value={
                    environmentalData.soilMoisture !== null
                      ? `${environmentalData.soilMoisture}%`
                      : "Loading..."
                  }
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Quick Actions Section */}
        <Row className="mt-2">
          <Col>
            <QuickActions />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
