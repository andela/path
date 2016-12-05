import React, { PropTypes } from 'react';
import ApplicantsChart from './ApplicantsChart';
import CyclesTable from './CyclesTable';

const CyclesView = ({ cycles }) => {
  return (
    <div style={{ maxWidth: '1024px', margin: 'auto' }}>
      <ApplicantsChart cycles={cycles} />
      <CyclesTable cycles={cycles} />
    </div>
  );
};

CyclesView.propTypes = {
  cycles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CyclesView;
