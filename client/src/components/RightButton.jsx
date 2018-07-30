import React from 'react';

const buttonStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  fontSize: '20pt',
  fontWeight: 'lighter',
  position: 'absolute',
  left: '800px',
  top: '260px',
  opacity: '.5',
};

const RightButton = props => (
  <button onClick={props.handleNextClick} type="button" style={buttonStyle}>
    {'>'}
  </button>
);

module.exports = RightButton;
