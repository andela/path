import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CyclesView from 'components/dashboard/CyclesView';
import { fetchCycles } from 'actions/cycles';

class Dashboard extends React.Component {

  componentDidMount() {
    if (!this.props.loaded) {
      this.props.fetchCycles();
    }
  }

  render() {
    if (!this.props.loaded) {
      return <div> Loading... </div>;
    }

    if (this.props.error) {
      return <div> Error! </div>;
    }

    return (
      <CyclesView cycles={this.props.data} />
    );
  }
}

Dashboard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  fetchCycles: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { data, loaded, error } = state.cycles;
  return { data, loaded, error };
}

export default connect(mapStateToProps, { fetchCycles })(Dashboard);
