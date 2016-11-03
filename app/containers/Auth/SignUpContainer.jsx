import React from 'react';
import { browserHistory } from 'react-router';
import request from 'superagent';
import Snackbar from 'material-ui/Snackbar';
import SignUp from '../../components/Auth/SignUp';

class SignUpContainer extends React.Component {
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
    request.post('/api/v1/path/signup')
      .type('form')
      .send({
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        email: event.target.email.value,
        password: event.target.password.value,
        confirm_password: event.target.confirm_password.value,
      })
      .then((res) => {
        window.localStorage.setItem('token', res.body.token);
        browserHistory.push('/');
      })
      .catch(() => {
        this.setState({
          showSnackbar: true,
          snackbarText: 'Sign up failed'
        });
      });
  }

  render() {
    return (
      <div>
        <SignUp onSubmit={this.handleSubmit} />
        <Snackbar
          open={this.state.showSnackbar}
          message={this.state.snackbarText}
          autoHideDuration={2500}
        />
      </div>
    );
  }
}

module.exports = SignUpContainer;
