import React from 'react';

const buttonStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  fontSize: '20pt',
  fontWeight: 'lighter',
  position: 'absolute',
  left: '20px',
  top: '260px',
  opacity: '.4',
};

const LeftButton = props => (
  <button onClick={props.handlePrevClick} type="button" style={buttonStyle}>
    {'<'}
  </button>
);

module.exports = LeftButton;
