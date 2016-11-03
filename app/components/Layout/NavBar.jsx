import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import DropdownIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';
import MenuItem from 'material-ui/MenuItem';
import Logo from '../../images/logo.png';
import '../../images/favicon.ico';
import './NavBar.scss';

class NavBar extends React.Component {
  leftElems() {
    return (
      <div>
        <img src={Logo} width={35} className={'header__logo'} role="presentation" />
        <span className="header__vertical-divider" />
        <IconButton onTouchTap={this.props.toggleSidebar} className={'header__nav-drawer'}>
          <NavigationMenu />
        </IconButton>
        <span className="header__vertical-divider" />
      </div>
    );
  }

  rightElems() {
    return (
      <IconMenu
        iconButtonElement={
          <div>
            <Avatar src={this.props.picture} size={50} className={'header__user-avatar'} />
            <IconButton className={'header__caret-down'}><DropdownIcon /></IconButton>
          </div>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText={'Refresh'} />
        <MenuItem primaryText={'Help'} />
        <MenuItem
          primaryText={'Logout'}
          onTouchTap={this.props.onLogout}
        />
      </IconMenu>
    );
  }

  render() {
    return (
      <AppBar
        className={'header'}
        iconElementLeft={this.leftElems()}
        iconElementRight={this.rightElems()}
      />
    );
  }
}

NavBar.propTypes = {
  toggleSidebar: React.PropTypes.func.isRequired,
  picture: React.PropTypes.string.isRequired,
  onLogout: React.PropTypes.func.isRequired,
};

export default NavBar;