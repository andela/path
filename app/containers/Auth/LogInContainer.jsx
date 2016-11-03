import React from 'react';
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
