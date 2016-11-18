import React from 'react';
import { browserHistory } from 'react-router';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Home from 'material-ui/svg-icons/action/home';
import Check from 'material-ui/svg-icons/image/brightness-7';
import Group from 'material-ui/svg-icons/social/group';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';
import Tools from 'material-ui/svg-icons/action/extension';

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
  const icon = 'rgb(51, 89, 223)';
  return (
    <Menu autoWidth={false} style={style}>
      <MenuItem
        primaryText="Home"
        leftIcon={<Home color={icon} />}
        onClick={() => {
          browserHistory.push('/');
          if (!props.collapsed) {
            props.toggleSidebar();
          }
        }}
      />
      <Divider />
      <MenuItem primaryText="Cycles" leftIcon={<Check color={icon} />} />
      <Divider />
      <MenuItem primaryText="Applicants" leftIcon={<Group color={icon} />} />
      <Divider />
      <MenuItem primaryText="Tools" leftIcon={<Tools color={icon} />} />
      <Divider />
      <MenuItem primaryText="Analytics" leftIcon={<TrendingUp color={icon} />} />
      <Divider />
    </Menu>
  );
}

SideBar.propTypes = {
  toggleSidebar: React.PropTypes.func.isRequired,
  collapsed: React.PropTypes.bool.isRequired,
};

export default SideBar;
