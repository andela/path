import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { App } from 'containers/app/App';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe('<App />', () => {
  const mountWithContext = (node) => {
    mount(node, {
      context: {
        muiTheme: getMuiTheme(),
      },
      childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
      },
    });
  };

  it('has className root', () => {
    const props = {
      user: { picture: 'http://example.com/picture.png' }
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).to.have.className('root');
  });

  it('renders NavBar', () => {
    const props = {
      user: { picture: 'http://example.com/picture' }
    };
    const wrapper = shallow(<App {...props} />);
    const navBarWrapper = wrapper.find('NavBar');
    expect(navBarWrapper).to.be.present();
    expect(navBarWrapper).to.have.prop('toggleSidebar', wrapper.state('toggleSidebar'));
    expect(navBarWrapper).to.have.prop('picture', props.user.picture);
    expect(navBarWrapper).to.have.prop('onLogout', App.prototype.handleLogout);
  });

  it('renders SideBar', () => {
    const props = {
      user: { picture: 'http://example.com/picture.png' }
    };
    const wrapper = shallow(<App {...props} />);
    const sideBarWrapper = wrapper.find('SideBar');
    expect(sideBarWrapper).to.be.present();
    expect(sideBarWrapper).to.have.prop('toggleSidebar', wrapper.instance().toggleSidebar);
    expect(sideBarWrapper).to.have.prop('collapsed', wrapper.state('sidebarCollapsed'));
  });

  it('fetches current user when mounted with a token', () => {
    const props = {
      user: { picture: 'http://example.com/picture.png' },
      token: 'token',
      fetchCurrentUserIfNeeded: sinon.spy()
    };
    mountWithContext(<App {...props} />);
    expect(props.fetchCurrentUserIfNeeded.called).to.equal(true);
  });

  it('redirects to login when mounted without a token and does not fetch user', () => {
    const props = {
      user: { picture: 'http://example.com/picture.png' },
      fetchCurrentUserIfNeeded: sinon.spy()
    };
    mountWithContext(<App {...props} />);
    expect(props.fetchCurrentUserIfNeeded.called).to.equal(false);
    expect(window.location.pathname).to.equal('/login');
  });
});
