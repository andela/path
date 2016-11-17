import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';

class GoogleLogIn extends React.Component {

  componentWillMount() {
    const token = cookie.load('jwt-token');
    if (token) {
      browserHistory.replace('/');
    }
  }

  render() {
    const wrapperStyle = {
      height: '100vh',
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    };
    // TODO: Style login with Google button more appropriately.
    return (
      <div style={wrapperStyle}>
        <span style={{ marginTop: '45vh' }}>
          <RaisedButton
            href={`${API_GATEWAY_URL}/login?redirect_url=${window.location.protocol}//${window.location.host}`}
            label="Login with Google"
            secondary
            style={{ width: '12em' }}
          />
        </span>
      </div>
    );
  }
}

export default GoogleLogIn;
