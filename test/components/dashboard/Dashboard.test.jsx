import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Dashboard from 'components/dashboard/Dashboard';

describe('<Dashboard />', () => {
  it('renders welcome message', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('div')).to.have.text(' Welcome to Path! ');
  });
});
