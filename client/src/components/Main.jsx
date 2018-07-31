import React from 'react';
import styled from 'styled-components';

const MainView = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1%;
`;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.current,
    };
  }

  render() {
    return (
      <span>
        <MainView src={this.props.current} alt="" />
      </span>
    );
  }
}

module.exports = Main;
