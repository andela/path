import React, { PropTypes } from 'react';
import { Line } from 'react-chartjs-2';

const ApplicantsChart = ({ cycles }) => {
  const chartData = {
    labels: cycles.map(c => c.name),
    datasets: [{
      label: 'Applicants',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: '#FF6384',
      hoverBackgroundColor: '#36A2EB',
      data: cycles.map(c => c.candidates.length),
    }]
  };

  return (
    <div>
      <h2>Applicants per cycle</h2>
      <Line data={chartData} />
    </div>
  );
};

ApplicantsChart.propTypes = {
  cycles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ApplicantsChart;
