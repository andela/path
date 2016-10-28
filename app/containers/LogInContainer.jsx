import React from 'react';
import request from 'superagent';
import { Notification } from 'react-notification';
import LogIn from '../components/LogIn';

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
    request.post('/login').send({
      email: event.target.email.value,
      password: event.target.password.value,
    }).then(() => {
      this.setState({
        showSnackbar: true,
        snackbarText: 'Log in successful'
      });
    }).catch(() => {
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
        <Notification
          isActive={this.state.showSnackbar}
          message={this.state.snackbarText}
          dismissAfter={2500}
          onDismiss={() => {}}
        />
      </div>
    );
  }
}

module.exports = LogInContainer;
