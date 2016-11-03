import React from 'react';
import { browserHistory } from 'react-router';
import request from 'superagent';
import Snackbar from 'material-ui/Snackbar';
import LogIn from '../../components/Auth/LogIn';

class LogInContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbarText: '',
      showSnackbar: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    request.post('/api/v1/path/login')
      .type('form')
      .send({
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((res) => {
        window.localStorage.setItem('token', res.body.token);
        browserHistory.push('/');
      })
      .catch(() => {
        this.setState({
          showSnackbar: true,
          snackbarText: 'Log in failed'
        });
      });
  }

  render() {
    return (
      <div>
        <LogIn onSubmit={this.handleSubmit} />
        <Snackbar
          open={this.state.showSnackbar}
          message={this.state.snackbarText}
          autoHideDuration={2500}
        />
      </div>
    );
  }
}

module.exports = LogInContainer;
