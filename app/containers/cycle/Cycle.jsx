import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import CycleView from 'components/cycle/CycleView';
import { fetchCycles } from 'actions/cycles';

class Dashboard extends React.Component {

  componentDidMount() {
    if (!this.props.loaded) {
      this.props.fetchCycles();
    }
  }

  renderGenderPieChart() {
    /* eslint-disable no-param-reassign */
    const findGender = (c) => {
      if (c.applications.length && c.applications[0].answers.length) {
        const gender = c.applications[0].answers.find(a => a.question === 'What is your gender?');
        if (gender) {
          return gender.answer;
        }
      }
      return 'Unknown';
    };

    const data = this.state.candidates.reduce((accum, current) => {
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
        <Pie data={pieChartData} />
      </div>
    );
  }

  render() {
    if (!this.props.loaded) {
      return <div> Loading... </div>;
    }

    if (this.props.error) {
      return <div> Error! </div>;
    }

    return (
      <div>
        <CycleView cycle={this.props.cycle} />
        {/* <h2>Gender distribution</h2>
        {this.renderGenderPieChart()} */}
      </div>
    );
  }
}

Dashboard.propTypes = {
  cycle: PropTypes.object.isRequired,
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  fetchCycles: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  const cycle = state.cycles.data.find(
    c => c.id.toString() === ownProps.params.cycleId
  );
  return { cycle, loaded: state.cycles.loaded };
}

export default connect(mapStateToProps, { fetchCycles })(Dashboard);
