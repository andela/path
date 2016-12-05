import React, { PropTypes } from 'react';
import GenderDistributionChart from './GenderDistributionChart';
import CycleDetails from './CycleDetails';

const CycleView = ({ cycle }) => (
  <div style={{ maxWidth: '1024px', margin: 'auto' }} >
    <h1>{cycle.name}</h1>
    <CycleDetails cycle={cycle} />
    <GenderDistributionChart cycle={cycle} />
  </div>
);

CycleView.propTypes = {
  cycle: PropTypes.object.isRequired,
};

export default CycleView;
