import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import NavBar from 'components/app/NavBar';
import SideBar from 'components/app/SideBar';
import { fetchCurrentUserIfNeeded } from 'actions/users';
import DefaultAvatar from '../../images/account_circle.svg'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapsed: true,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleLogout = () => {
      window.location = `${API_GATEWAY_URL}/logout?redirect_url=${window.location.protocol}//${window.location.host}/login`;
    };
  }

  componentDidMount() {
    if (this.props.token) {
      this.props.fetchCurrentUserIfNeeded();
    } else {
      browserHistory.replace('/login');
    }
  }

  toggleSidebar() {
    this.setState({
      sidebarCollapsed: !this.state.sidebarCollapsed,
    });
  }

  render() {
    const { user } = this.props;
    return (
      <div className="root">
        <NavBar
          toggleSidebar={this.toggleSidebar}
          picture={(user && user.picture) || DefaultAvatar}
          onLogout={this.handleLogout}
        />
        <SideBar
          collapsed={this.state.sidebarCollapsed}
          toggleSidebar={this.toggleSidebar}
        />
        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element,
  user: React.PropTypes.object,
  token: React.PropTypes.string,
  fetchCurrentUserIfNeeded: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    user: state.auth.userId && state.entities.users[state.auth.userId],
    token: state.auth.token
  };
}

export default connect(
  mapStateToProps,
  {
    fetchCurrentUserIfNeeded
  }
)(App);
