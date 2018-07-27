import React from 'react';

const imgStyle = {
  width: '54%',
  height: 'auto',
  marginBottom: '10px',
};

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
        <img src={this.props.current} alt="" style={imgStyle} />
      </div>
    );
  }
}

module.exports = Main;
