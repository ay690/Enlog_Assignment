import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../store';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const hatchStyle: React.CSSProperties = {
  backgroundImage:
    'repeating-linear-gradient(45deg, #e5e7eb 0, #e5e7eb 2px, transparent 2px, transparent 4px)',
  backgroundSize: '6px 6px',
};

const NewCustomersChart: React.FC = () => {
  const { previousCustomers = [], newCustomers = [] } = useAppSelector(
    (state) => state.dashboard.stats
  );

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimated(true), 100); // slight delay for animation trigger
    return () => clearTimeout(timeout);
  }, []);

  const prev = previousCustomers.length === newCustomers.length
    ? previousCustomers
    : newCustomers.map(() => 7);

  const maxValue = Math.max(...newCustomers, ...prev, 1);
  const ySteps = 5;
  const stepValue = Math.ceil(maxValue / ySteps);

  return (
    <div className="p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">New customers</h3>

      <div className="flex">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between h-32 mr-4">
          {Array.from({ length: ySteps + 1 }).map((_, idx) => (
            <span key={idx} className="text-xs text-gray-400">
              {stepValue * (ySteps - idx)}
            </span>
          ))}
        </div>

        {/* Bars */}
        <div className="flex items-end justify-between flex-1 h-32">
          {days.map((day, i) => {
            const prevH = (prev[i] / maxValue) * 100;
            const currH = (newCustomers[i] / maxValue) * 100;

            return (
              <div key={day} className="flex flex-col items-center space-y-1">
                <div className="flex items-end space-x-1 h-24">
                  <div
                    className={`w-4 rounded-t transition-all duration-700 ease-out`}
                    style={{
                      ...hatchStyle,
                      height: animated ? `${prevH}%` : `0%`,
                    }}
                  />
                  <div
                    className="w-4 bg-gray-900 rounded-t transition-all duration-700 ease-out"
                    style={{ height: animated ? `${currH}%` : `0%` }}
                  />
                </div>
                <div className="text-xs text-gray-400">{day}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewCustomersChart;
