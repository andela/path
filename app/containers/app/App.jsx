import React from 'react';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import request from 'superagent';
import NavBar from 'components/app/NavBar';
import SideBar from 'components/app/SideBar';
import testAvatar from 'images/test_avatar.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapsed: true,
      user: null,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleLogout = () => {
      window.location = `${API_GATEWAY_URL}/logout?redirect_url=${window.location.protocol}//${window.location.host}/login`;
    };
  }

  componentWillMount() {
    const token = cookie.load('jwt-token');
    if (!token) {
      browserHistory.replace('/login');
    }
    request.get(`${API_GATEWAY_URL}/api/v1/users/me`)
      .set('Authorization', `Bearer ${cookie.load('jwt-token')}`)
      .then((res) => {
        this.setState({
          user: res.body,
        });
      })
      .catch(() => {
        cookie.remove('jwt-token');
        browserHistory.push('/login');
      });
  }

  toggleSidebar() {
    this.setState({
      sidebarCollapsed: !this.state.sidebarCollapsed,
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="root">
        <NavBar
          toggleSidebar={this.toggleSidebar}
          picture={(user && user.picture) || testAvatar}
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
};

export default App;
