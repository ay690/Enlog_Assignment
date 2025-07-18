import React, { useEffect, useState } from 'react';

interface CircularProgressProps {
  percentage: number;
  title: string;
  subtitle: string;
  size?: number;
  strokeWidth?: number;
  tickCount?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  title,
  subtitle,
  size = 200,
  strokeWidth = 4,
  tickCount = 40,
}) => {
  const center = size / 2;
  const radius = center - strokeWidth * 2;
  const startAngle = -190;
  const endAngle = 10;
  const angleStep = (endAngle - startAngle) / tickCount;
  const finalActiveTicks = Math.round((percentage / 100) * tickCount);

  const [animatedTicks, setAnimatedTicks] = useState(0);

  useEffect(() => {
    setAnimatedTicks(0); 
    const interval = setInterval(() => {
      setAnimatedTicks((prev) => {
        if (prev >= finalActiveTicks) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 15); // adjust speed here
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percentage, tickCount]);

  const deg2rad = (deg: number) => (deg * Math.PI) / 180;

  const ticks = [];
  for (let i = 0; i <= tickCount; i++) {
    const angle = startAngle + angleStep * i;
    const rad = deg2rad(angle);
    const x1 = center + (radius - strokeWidth) * Math.cos(rad);
    const y1 = center + (radius - strokeWidth) * Math.sin(rad);
    const x2 = center + radius * Math.cos(rad);
    const y2 = center + radius * Math.sin(rad);
    const isActive = i <= animatedTicks;

    ticks.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={isActive ? '#374151' : '#e5e7eb'}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <svg width={size} height={size}>
        {ticks}
      </svg>
      <div className="-mt-32 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-gray-900">{percentage}%</span>
        <span className="text-lg text-gray-700">{title}</span>
        <span className="text-sm text-gray-500">{subtitle}</span>
      </div>
    </div>
  );
};

export default CircularProgress;
