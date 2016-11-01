import React from 'react';
import { browserHistory } from 'react-router';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import Home from 'material-ui/svg-icons/action/home';
import Check from 'material-ui/svg-icons/toggle/check-box';
import DeviceHub from 'material-ui/svg-icons/hardware/device-hub';
import Settings from 'material-ui/svg-icons/action/settings';

function SideBar(props) {
  const style = {
    backgroundColor: '#EBEEF3',
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
    position: 'fixed',
    paddingTop: 75,
    height: '100%',
    width: props.collapsed ? 60 : 168,
    top: 0,
    left: 0,
    overflow: 'hidden',
    transitionDuration: '0.6s',
  };

  return (
    <Menu autoWidth={false} style={style}>
      <MenuItem
        primaryText="Home"
        leftIcon={<Home />}
        onClick={() => {
          browserHistory.push('/');
          if (!props.collapsed) {
            props.toggleSidebar();
          }
        }}
      />
      <Divider />
      <MenuItem primaryText="Cycles" leftIcon={<Check />} />
      <Divider />
      <MenuItem primaryText="Applicants" leftIcon={<DeviceHub />} />
      <Divider />
      <MenuItem primaryText="Tools" leftIcon={<Settings />} />
      <Divider />
      <MenuItem primaryText="Analytics" leftIcon={<Settings />} />
      <Divider />
    </Menu>
  );
}

SideBar.propTypes = {
  toggleSidebar: React.PropTypes.func.isRequired,
  collapsed: React.PropTypes.bool.isRequired,
};

export default SideBar;
