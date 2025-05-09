import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const pieData = [
  { name: 'Staff', value: 151 },
  { name: 'Students', value: 400 },
  { name: 'Others', value: 200 },
];

const COLORS = ['#3EC6B9', '#B367F9', '#4A90E2'];

const DailyActivePieChart = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '0px 0px 0px 40px' }}>
      <PieChart width={150} height={150}>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          outerRadius={60} // Increased from 60 to 70
          dataKey="value"
          stroke="#fff"
          strokeWidth={2}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginLeft: -10 }}>
        {pieData.map((entry, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems:'center',
              fontSize: 12,
              fontWeight: 500,
              color: '#1C1C1E',
              backgroundColor: '#F8F8F8',
              padding: '4px 5px',
              borderRadius: 4,
              width: 'max-content',
                              marginRight: 20,

            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                backgroundColor: COLORS[index],
                marginRight: 5,
                
                borderRadius: 2,
              }}
            />
            {entry.name} - {entry.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyActivePieChart;
