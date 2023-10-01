import React, { useState } from "react";
import "./ParameterInput.css"; // Import your CSS file

function ParameterInput({ name }) {
  const [inputValue, setInputValue] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const inputStyle2 = {
    width: "110px", // Updated width
    height: "40px", // Updated height
    background: "#68E7FD", // Updated background color
    textAlign: "center",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    backgroundImage: "linear-gradient(to left, #ffffff, #68E7FD)", // Linear background gradient
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    justifyContent: "space-between",
  };

  return (
    <div style={containerStyle}>
      <label
        htmlFor={`parameter-${name}`}
        style={{
          color: "#666",
          fontWeight: "bold",
          fontSize: "14px",
          fontFamily: "Helvetica Neue",
          marginRight: "2rem",
        }}
      >
        {name}
      </label>
      <input
        type="number"
        id={`parameter-${name}`}
        value={inputValue}
        onChange={handleChange}
        style={inputStyle2}
      />
    </div>
  );
}

export default ParameterInput;
