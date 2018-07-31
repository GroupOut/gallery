import React from 'react';
import styled from 'styled-components';

const ThumbnailImage = styled.img`
  width: 8%;
  height: auto;
`;

const ThumbnailListElement = styled.li`
  display: inline;
  margin-right: 10px;
`;

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumb: this.props.thumb,
    };
  }

  render() {
    return (
      <ThumbnailListElement>
        <ThumbnailImage src={this.props.thumb} alt="" onClick={this.props.handleThumbnailClick} />
      </ThumbnailListElement>
    );
  }
}

module.exports = Thumbnail;
