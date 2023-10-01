import React from "react";
import { ProgressBar } from "react-bootstrap";
import "../index.css";
function TestResults() {
  // Define your test results here (values between 0 and 100)
  const test1Result = 40;
  const test2Result = 60;
  const test3Result = 90;
  const test4Result = 75;

  return (
    <div style={{ paddingBottom: "1rem" }}>
      <h2
        className="mt-2 mb-2 text-center"
        style={{
          color: "#666",
          fontWeight: "bold",
          fontSize: "14px",
          fontFamily: "Helvetica Neue",
        }}
      >
        Water Quality from last test
      </h2>

      {/* Test 1 Progress Bar */}
      <div
        className="d-flex flex-row justify-content-between"
        style={{
          color: "#666",
          fontWeight: "bold",
          fontSize: "12px",
          fontFamily: "Helvetica Neue",
        }}
      >
        <span>pH Level</span> <span>7.5</span>
      </div>
      <ProgressBar
        variant="info"
        now={test1Result} // Set the progress value
      />

      {/* Test 2 Progress Bar */}
      <div
        className="d-flex flex-row justify-content-between mt-3"
        style={{
          color: "#666",
          fontWeight: "bold",
          fontSize: "12px",
          fontFamily: "Helvetica Neue",
        }}
      >
        <span>Sodium Absorption Ratio</span> <span>2.5</span>
      </div>
      <ProgressBar
        variant="info"
        now={test2Result} // Set the progress value
      />

      {/* Test 3 Progress Bar */}
      <div
        className="d-flex flex-row justify-content-between mt-3"
        style={{
          color: "#666",
          fontWeight: "bold",
          fontSize: "12px",
          fontFamily: "Helvetica Neue",
        }}
      >
        <span>Nitrogen Count</span> <span>10mg/l</span>
      </div>
      <ProgressBar
        variant="info"
        now={test3Result} // Set the progress value
      />

      {/* Test 4 Progress Bar */}
      <div
        className="d-flex flex-row justify-content-between mt-3 "
        style={{
          color: "#666",
          fontWeight: "bold",
          fontSize: "12px",
          fontFamily: "Helvetica Neue",
        }}
      >
        <span>Oil content</span> <span>6%</span>
      </div>
      <ProgressBar
        variant="info"
        now={test4Result} // Set the progress value
      />
    </div>
  );
}

export default TestResults;
