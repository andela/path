import React from 'react';
import MuiFramework from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Overlay from 'material-ui/internal/Overlay';
import NavBar from './NavBar';
import SideBar from './SideBar';
import testAvatar from '../../images/test_avatar.jpg';
import './Layout.scss';

const andelaBaseTheme = getMuiTheme({
  appBar: {
    color: '#3359DF',
    padding: 30,
    height: 58,
  },
  palette: {
    primary1Color: '#3359DF',
  },
});

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapsed: true
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
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
      <MuiFramework muiTheme={andelaBaseTheme}>
        <div className="root">
          <NavBar
            toggleSidebar={this.toggleSidebar}
            picture={testAvatar}
            onLogout={this.props.onLogout}
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
      </MuiFramework>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.element,
  onLogout: React.PropTypes.func
};

export default Layout;
