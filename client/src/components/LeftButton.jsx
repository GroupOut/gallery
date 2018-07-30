import React from 'react';
import styled from 'styled-components';

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

const PrevButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 20pt;
  font-weight: lighter;
  position: absolute;
  left: 20px;
  top: 260px;
  opacity: 0.4;
`;

const LeftButton = props => (
  <PrevButton onClick={props.handlePrevClick} type="button">
    {'<'}
  </PrevButton>
);

module.exports = LeftButton;
