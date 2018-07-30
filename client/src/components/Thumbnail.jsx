import React from 'react';

const imgStyle = {
  width: '4.4%',
  height: 'auto',
};

const liStyle = {
  display: 'inline',
  marginRight: '10px',
};

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumb: this.props.thumb,
    };
  }

  render() {
    return (
      <li style={liStyle}>
        <img
          src={this.props.thumb}
          alt=""
          style={imgStyle}
          onClick={this.props.handleThumbnailClick}
        />
      </li>
    );
  }
}

module.exports = Thumbnail;
