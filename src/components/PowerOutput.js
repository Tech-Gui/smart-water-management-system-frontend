import React from "react";
import { Sun } from "lucide-react";

const PowerOutput = ({ power = 1800, maxPower = 2400 }) => {
  // Calculate percentage for scaling animations
  const percentage = Math.min(Math.max((power / maxPower) * 100, 0), 100);

  return (
    <div className="relative w-full h-24 flex items-center justify-center">
      {/* Background with grid effect */}
      {/* <div className="absolute inset-0 bg-gray-50 rounded-lg overflow-hidden">
        <svg width="100%" height="100%" className="opacity-10">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path
              d="M 8 0 L 0 0 0 8"
              fill="none"
              stroke="gray"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div> */}

      {/* Power indicator elements */}
      <div className="relative">
        {/* Sun icon */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <Sun className="w-6 h-6 text-yellow-500" color="#FFB800" />
        </div>

        {/* Voltage bars - animated */}
        <svg width="80" height="40" className="transform translate-y-2">
          {/* Left voltage line */}
          <path
            d="M 10,20 L 25,5 L 40,20 L 55,35"
            stroke="#68E7FD"
            strokeWidth="3"
            fill="none"
            className="opacity-75">
            <animate
              attributeName="stroke-dasharray"
              values="0,100;100,0;0,100"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>

          {/* Right voltage line */}
          <path
            d="M 25,35 L 40,20 L 55,5 L 70,20"
            stroke="#68E7FD"
            strokeWidth="3"
            fill="none"
            className="opacity-75">
            <animate
              attributeName="stroke-dasharray"
              values="100,0;0,100;100,0"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>

          {/* Power pulses */}
          <circle cx="40" cy="20" r="15" fill="#68E7FD" className="opacity-20">
            <animate
              attributeName="r"
              values="15;20;15"
              dur="1.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.2;0.1;0.2"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* Efficiency indicator */}
      </div>
    </div>
  );
};

export default PowerOutput;
