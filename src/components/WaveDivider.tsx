import React from 'react';

interface WaveDividerProps {
  fromColor: string;
  toColor: string;
  flip?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  fromColor,
  toColor,
  flip = false,
}) => {
  return (
    <div
      className="absolute left-0 bottom-0 w-full h-14 sm:h-16 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ backgroundColor: toColor }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <path
          d={
            flip
              ? 'M0,50 C180,18 360,18 540,50 C720,82 900,82 1080,50 C1260,18 1350,28 1440,50 L1440,0 L0,0 Z'
              : 'M0,30 C180,62 360,62 540,30 C720,-2 900,-2 1080,30 C1260,62 1350,52 1440,30 L1440,80 L0,80 Z'
          }
          fill={fromColor}
        />
      </svg>
    </div>
  );
};