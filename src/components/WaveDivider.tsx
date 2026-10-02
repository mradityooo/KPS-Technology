import React from 'react';

interface WaveDividerProps {
  color: string;
  flip?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  color,
  flip = false,
}) => {
  return (
    <div
      className={`w-full h-10 sm:h-14 overflow-hidden ${
        flip ? 'rotate-180' : ''
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <path
          d="M0,35 C180,75 360,75 540,35 C720,-5 900,-5 1080,35 C1260,75 1350,60 1440,35 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
};