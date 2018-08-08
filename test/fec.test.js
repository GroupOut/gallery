import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Gallery from '../client/src/components/Gallery';
import Main from '../client/src/components/Main';
import Thumbnail from '../client/src/components/Thumbnail';

const sum = require('../sum');

configure({ adapter: new Adapter() });

// component tests

describe('Gallery', () => {
  it('the Gallery element should exist', () => {
    const wrapper = shallow(<Gallery />);
    expect(wrapper.find('#gallery').exists()).toEqual(true);
  });

  it('Component calls componentDidMount', () => {
    sinon.spy(Gallery.prototype, 'componentDidMount');
    const wrapper = shallow(<Gallery />);
    expect(Gallery.prototype.componentDidMount.calledOnce).toEqual(true);
  });

  it('Component calls render', () => {
    sinon.spy(Gallery.prototype, 'render');
    const wrapper = shallow(<Gallery />);
    expect(Gallery.prototype.render.calledOnce).toEqual(true);
  });
});

describe('Main', () => {
  it('Component calls render', () => {
    sinon.spy(Main.prototype, 'render');
    const wrapper = shallow(<Main />);
    expect(Main.prototype.render.calledOnce).toEqual(true);
  });
});

describe('Thumbnail', () => {
  it('the Thumbnail element should exist', () => {
    // const renderGallery = shallow(</Gal)
    const wrapper = shallow(<Thumbnail />);
    expect(wrapper.find('#thumbnail').exists()).toEqual(true);
  });
});
