import React, { PropTypes } from 'react';

const GenderDistributionChart = ({ cycle }) => (
  <div>
    <h2>Cycle details</h2>
    <p><strong>Date opened:</strong> {cycle.opened_at}</p>
    <p><strong>Date closed:</strong> {cycle.closed_at || 'N/A'}</p>
    <p><strong>Residency country:</strong> {cycle.location}</p>
    <p><strong>Status:</strong> {cycle.status}</p>
  </div>
);

GenderDistributionChart.propTypes = {
  cycle: PropTypes.object.isRequired,
};

export default GenderDistributionChart;
