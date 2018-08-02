import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

const h1Style = {
  backgroundColor: '#53a318',
  height: '10%',
  color: 'white',
  fontFamily: 'OpenSans, "Helvetica Neue", Helvetica, Tahoma, Arial, FreeSans, sans-serif',
  fontSize: '22px',
  fontWeight: '400',
  lineHeight: '23px',
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 style={h1Style}>
Groupon
        </h1>
      </div>
    );
  }
}

module.exports = Navbar;
