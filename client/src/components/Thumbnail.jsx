import React from 'react';
import styles from './styles/app.css';

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
        <img
          className={styles.thumbnailCurrent}
          src={this.props.thumb}
          alt=""
          onClick={this.props.handleThumbnailClick}
        />
      );
    } else {
      thumbnailImg = (
        <img
          className={styles.thumbnailImage}
          src={this.props.thumb}
          alt=""
          onClick={this.props.handleThumbnailClick}
        />
      );
    }
    return (
      <li className={styles.thumbnailListElement}>
        {thumbnailImg}
      </li>
    );
  }
}

module.exports = Thumbnail;
