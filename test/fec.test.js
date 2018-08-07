import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Gallery from '../client/components/Gallery';

const sum = require('../sum');

configure({ adapter: new Adapter() });

describe('Gallery', () => {
  it('the Gallery element should exist', () => {
    const wrapper = shallow(<Gallery />);
    expect(wrapper.find('#gallery').exists()).toEqual(true);
  });

  it('Component calls componentWillMount', () => {
    sinon.spy(Gallery.prototype, 'componentWillMount');
    const wrapper = shallow(<Gallery />);
    expect(Gallery.prototype.componentWillMount.calledOnce).toEqual(true);
  });
});
