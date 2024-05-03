import React from 'react';
import './ChartBar.css';

const ChartBar = ({ label, currentValue, totalValue }) => {
  let barFillHeight = '0%';

  if (totalValue > 0) {
    // 한 번도 지출하지 않았을 경우 totalValue가 0이기 때문에 에러가 날 수 있음.
    const percentage = (currentValue / totalValue) * 100;
    barFillHeight = percentage + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
