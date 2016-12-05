import React, { PropTypes } from 'react';
import { Pie } from 'react-chartjs-2';

const findGender = (c) => {
  if (c.applications.length && c.applications[0].answers.length) {
    const gender = c.applications[0].answers.find(a => a.question === 'What is your gender?');
    if (gender) {
      return gender.answer;
    }
  }
  return 'Unknown';
};

const GenderDistributionChart = ({ cycle }) => {
  /* eslint-disable no-param-reassign */
  const data = cycle.candidates.reduce((accum, current) => {
    const gender = findGender(current);
    if (!accum[gender]) {
      accum[gender] = 0;
    }
    accum[gender] += 1;
    return accum;
  }, {});

  const labels = Object.keys(data);

  const colors = ['#FF6384', '#36A2EB', '#FFCE56'];

  const pieChartData = {
    labels,
    datasets: [{
      data: labels.map(i => data[i]),
      backgroundColor: colors,
      hoverBackgroundColor: colors,
    }]
  };

  return (
    <div>
      <h2>Applicants by gender</h2>
      <Pie data={pieChartData} />
    </div>
  );
};

GenderDistributionChart.propTypes = {
  cycle: PropTypes.object.isRequired,
};

export default GenderDistributionChart;
