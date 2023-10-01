import React from "react";
import { motion } from "framer-motion";
import "./AnimatedSwitch.css"; // Import your CSS file

const ToggleSwitch = ({ isOn, onToggle, name }) => {
  // Define variants for animations
  const switchVariants = {
    on: { backgroundColor: "#68E7FD", justifyContent: "flex-end" },
    off: { backgroundColor: "#ffbaba", justifyContent: "flex-start" },
  };

  const containerVariants = {
    on: { scale: 1 },
    off: { scale: 1 },
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundImage: "linear-gradient(to left, #ffffff, #68E7FD)", // Linear background gradient
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "10px",
        justifyContent: "space-between",
      }}
    >
      <h3
        style={{
          color: "#666",
          fontWeight: "bold",
          fontSize: "14px",
          fontFamily: "Helvetica Neue",
          marginRight: "2rem",
        }}
      >
        {name}
      </h3>
      <motion.div
        className={`toggleSwitch ${isOn ? "on" : "off"}`}
        onClick={onToggle}
        variants={switchVariants}
        initial={isOn ? "on" : "off"}
        animate={isOn ? "on" : "off"}
      >
        <motion.div className="switch-container" variants={containerVariants}>
          <div>
            <img src={"turn-off.png"} alt="" className="switch-img" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ToggleSwitch;
