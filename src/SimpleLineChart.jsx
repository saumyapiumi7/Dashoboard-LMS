import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip
} from 'recharts';

const data = [
  { name: 'Sep 01', value: 200 },
  { name: 'Sep 02', value: 800 },
  { name: 'Sep 03', value: 400 },
  { name: 'Sep 04', value: 1000 },
  { name: 'Sep 05', value: 200 },
  { name: 'Sep 06', value: 600 },
];

// Custom Tick for X-Axis (to show Sep and number in 2 lines)
const renderCustomTick = ({ x, y, payload }) => {
  if (!payload.value || payload.value.trim() === '') return null;
  const [month, day] = payload.value.split(' ');
  return (
    <text
      x={x}
      y={y + 10}
      textAnchor="middle"
      fill="#000"
      fontSize={14}
      fontFamily="Inter"
      fontWeight={400}
    >
      <tspan x={x} dy="0">{month}</tspan>
      <tspan x={x} dy="16">{day}</tspan>
    </text>
  );
};

const SimpleLineChart = () => {
  return (
    <div style={{ width: '405px', height: '250px' }}>
      <LineChart
        width={450}
        height={300}
        data={data}
        margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
      >
        <XAxis
          dataKey="name"
          stroke="#000"
          interval={0}
          padding={{ left: 30, right: 40 }}
          tick={renderCustomTick}
          
        />
        <YAxis
          domain={[0, 1200]}
          tickCount={7}
          stroke="#000"
          tick={{
            fill: '#000',
            fontSize: 14,
            fontFamily: 'Inter',
            fontWeight: 400,
          }}
        />
        <Tooltip />
        <Line
          type="linear"
          dataKey="value"
          stroke="#FE764B"
          strokeWidth={2.5}
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default SimpleLineChart;
