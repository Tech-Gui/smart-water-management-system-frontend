import React from "react";

const WaterTank = ({ level = 75, maxCapacity = 3000 }) => {
  // Calculate percentage filled
  const percentage = Math.min(Math.max((level / maxCapacity) * 100, 0), 100);

  return (
    <div className="relative w-24 h-24">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Tank outline */}
        <rect
          x="20"
          y="10"
          width="60"
          height="80"
          fill="none"
          stroke="#666"
          strokeWidth="2"
          rx="3"
        />

        {/* Water fill - animated */}
        <rect
          x="22"
          y={90 - percentage * 0.8}
          width="56"
          height={percentage * 0.8}
          fill="#68E7FD"
          opacity="0.8">
          <animate
            attributeName="y"
            from={90}
            to={90 - percentage * 0.8}
            dur="1s"
            fill="freeze"
          />
          {/* Water wave animation */}
          <animate
            attributeName="opacity"
            values="0.8;0.6;0.8"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Level markers */}
        {[25, 50, 75].map((mark) => (
          <line
            key={mark}
            x1="20"
            y1={90 - mark * 0.8}
            x2="25"
            y2={90 - mark * 0.8}
            stroke="#666"
            strokeWidth="1"
          />
        ))}

        {/* Capacity text */}
        <text
          x="85"
          y="50"
          fontSize="10"
          fill="#666"
          transform="rotate(90, 85, 50)">
          {maxCapacity}L
        </text>

        {/* Current level text */}
        <text
          x="50"
          y="55"
          fontSize="12"
          fill="#666"
          textAnchor="middle"
          className="font-bold">
          {`${Math.round(percentage)}%`}
        </text>
      </svg>
    </div>
  );
};

export default WaterTank;
