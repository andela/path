import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Home from '../../app/components/Home';

describe('<Home />', () => {
  it('renders welcome message', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('div')).to.have.text(' Welcome to Path! ');
  });
});
