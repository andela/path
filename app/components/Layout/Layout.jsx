import React from 'react';
import { browserHistory } from 'react-router';
import Overlay from 'material-ui/internal/Overlay';
import cookie from 'react-cookie';
import NavBar from './NavBar';
import SideBar from './SideBar';
import testAvatar from '../../images/test_avatar.jpg';
import './Layout.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapsed: true
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
  }

  toggleSidebar() {
    this.setState({
      sidebarCollapsed: !this.state.sidebarCollapsed,
    });
  }

  render() {
    const sidebarStyleOverlay = {
      zIndex: 1200,
      pointerEvents: !this.state.sidebarCollapsed ? 'auto' : 'none',
    };

    return (
      <div className="root">
        <NavBar
          toggleSidebar={this.toggleSidebar}
          picture={testAvatar}
          onLogout={this.handleLogout}
        />
        <SideBar
          collapsed={this.state.sidebarCollapsed}
          toggleSidebar={this.toggleSidebar}
        />
        <div className="main">
          <Overlay
            show={!this.state.sidebarCollapsed}
            style={sidebarStyleOverlay}
            onTouchTap={this.collapseSidebarIfOpen}
          />
          {this.props.children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.element,
};

export default Layout;
