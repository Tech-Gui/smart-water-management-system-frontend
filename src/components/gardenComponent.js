import React from "react";

function GardenComponent({ imageUrl, parameter, value }) {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    backgroundImage: "linear-gradient(to left, #ffffff, #f2f2f2)", // Linear background gradient
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
  };

  const imageStyle = {
    width: "60px", // Adjust the image width as needed
    marginRight: "40px", // Space between image and text
  };

  const textContainerStyle = {
    flex: 1, // Takes up remaining space
  };

  return (
    <div style={containerStyle}>
      <img src={imageUrl} alt="Garden" style={imageStyle} />
      <div style={textContainerStyle}>
        <div style={{ fontWeight: "bold" }}>{parameter}</div>
        <div>{value}</div>
      </div>
    </div>
  );
}

export default GardenComponent;
