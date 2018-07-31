import React from 'react';
import styled from 'styled-components';

const PrevButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 20pt;
  font-weight: lighter;
  position: absolute;
  left: 20px;
  top: 260px;
  background: black;
  color: white;
  border: black;
`;

const LeftButton = props => (
  <PrevButton onClick={props.handlePrevClick} type="button">
    {'<'}
  </PrevButton>
);

module.exports = LeftButton;
