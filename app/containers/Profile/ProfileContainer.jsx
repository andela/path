import React from 'react';
import request from 'superagent';
import Snackbar from 'material-ui/Snackbar';
import Profile from '../../components/Profile/Profile';

class ProfileContainer extends React.Component {
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
    request.put('/api/v1/path/profile')
      .set('X-Auth-Token', window.localStorage.getItem('token'))
      .type('form')
      .send({
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
      })
      .then(() => {
        this.setState({
          showSnackbar: true,
          snackbarText: 'Profile updated successfully'
        });
      })
      .catch(() => {
        this.setState({
          showSnackbar: true,
          snackbarText: 'Error saving profile'
        });
      });
  }

  render() {
    return (
      <div>
        <Profile onSubmit={this.handleSubmit} />
        <Snackbar
          open={this.state.showSnackbar}
          message={this.state.snackbarText}
          autoHideDuration={2500}
        />
      </div>
    );
  }
}

module.exports = ProfileContainer;
