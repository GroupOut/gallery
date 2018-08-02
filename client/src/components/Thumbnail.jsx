import React from 'react';
import styled from 'styled-components';

const ThumbnailImage = styled.img`
  width: 8%;
  height: auto;
  margin-bottom: 4px;
`;

const ThumbnailCurrent = styled.img`
  width: 8%
  height: auto;
  border: 3px solid green;
  padding: 1px;
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
    let thumbnailImg;

    if (this.props.current.substring(0, 52) === this.props.thumb.substring(0, 52)) {
      thumbnailImg = (
        <ThumbnailCurrent src={this.props.thumb} alt="" onClick={this.props.handleThumbnailClick} />
      );
    } else {
      thumbnailImg = (
        <ThumbnailImage src={this.props.thumb} alt="" onClick={this.props.handleThumbnailClick} />
      );
    }
    return (
      <ThumbnailListElement>
        {thumbnailImg}
      </ThumbnailListElement>
    );
  }
}

module.exports = Thumbnail;
