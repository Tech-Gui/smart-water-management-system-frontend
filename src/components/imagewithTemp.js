import React from "react";

function ImageWithTemperature({ imageUrl, temperature }) {
  return (
    <div>
      <img src={imageUrl} alt="Weather" style={{ maxWidth: "45%" }} />
      <p> {temperature}°C</p>
    </div>
  );
}

export default ImageWithTemperature;
