import React from 'react';
import styled from 'styled-components';

const MainView = styled.img`
  width: 54%;
  height: auto;
  margin-bottom: 10px;
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
      <div>
        <MainView src={this.props.current} alt="" />
      </div>
    );
  }
}

module.exports = Main;
