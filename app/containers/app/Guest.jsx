import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';

class Guest extends React.Component {

  componentWillMount() {
    const token = cookie.load('jwt-token');
    if (token) {
      browserHistory.replace('/');
    }
  }

  render() {
    return this.props.children;
  }
}

Guest.propTypes = {
  children: PropTypes.node
};

export default Guest;
