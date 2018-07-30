import React from 'react';
import styled from 'styled-components';

const NextButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 20pt;
  font-weight: lighter;
  position: absolute;
  left: 800px;
  top: 260px;
  opacity: 0.4;
`;

const RightButton = props => (
  <NextButton onClick={props.handleNextClick} type="button">
    {'>'}
  </NextButton>
);

module.exports = RightButton;
