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
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <div style={wrapperStyle}>
        <span>
          <RaisedButton
              href={`${API_GATEWAY_URL}/login?redirect_url=${window.location.protocol}//${window.location.host}`}
              label="Login with Google"
              backgroundColor="#ff5722"
              labelColor="white"
          />
        </span>
      </div>
    );
  }
}

export default GoogleLogIn;
