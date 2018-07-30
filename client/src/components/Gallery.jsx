import React from 'react';
import $ from 'jquery';
import Main from './Main.jsx';
import Thumbnail from './Thumbnail.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'https://s3-us-west-1.amazonaws.com/groupout98hr/default.png',
      thumbs: [
        'https://s3-us-west-1.amazonaws.com/groupout98hr/default.png',
        'https://s3-us-west-1.amazonaws.com/groupout98hr/default.png',
        'https://s3-us-west-1.amazonaws.com/groupout98hr/default.png',
        'https://s3-us-west-1.amazonaws.com/groupout98hr/default.png',
        'https://s3-us-west-1.amazonaws.com/groupout98hr/default.png',
        'https://s3-us-west-1.amazonaws.com/groupout98hr/default.png',
        'https://s3-us-west-1.amazonaws.com/groupout98hr/default.png',
        'https://s3-us-west-1.amazonaws.com/groupout98hr/default.png',
        'https://s3-us-west-1.amazonaws.com/groupout98hr/default.png',
        'https://s3-us-west-1.amazonaws.com/groupout98hr/default.png',
      ],
    };
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
  }

  componentDidMount() {
    this.getImages();
  }

  getImages(deal_id = 22) {
    const that = this;
    $.ajax({
      url: 'http://localhost:3003/images/',
      data: { deal: deal_id },
      success: (data) => {
        that.setState({
          current: data.data[deal_id].URL0,
          thumbs: [
            data.data[deal_id].URL0a,
            data.data[deal_id].URL1a,
            data.data[deal_id].URL2a,
            data.data[deal_id].URL3a,
            data.data[deal_id].URL4a,
            data.data[deal_id].URL5a,
            data.data[deal_id].URL6a,
            data.data[deal_id].URL7a,
            data.data[deal_id].URL8a,
            data.data[deal_id].URL9a,
          ],
        });
      },
      dataType: 'json',
    });
  }

  handleThumbnailClick(e) {
    const newMain = `${e.target.src.substring(0, 52)}.jpg`;
    this.setState({ current: newMain });
  }

  handleNextClick() {
    if (Number(this.state.current[51]) < 9) {
      this.setState({
        current: `${this.state.current.substring(0, 51)
          + (Number(this.state.current[51]) + 1).toString()}.jpg`,
      });
    }
  }

  handlePrevClick() {
    if (Number(this.state.current[51]) > 0) {
      this.setState({
        current: `${this.state.current.substring(0, 51)
          + (Number(this.state.current[51]) - 1).toString()}.jpg`,
      });
    }
  }

  render() {
    return (
      <div>
        <LeftButton handlePrevClick={this.handlePrevClick} />
        <RightButton handleNextClick={this.handleNextClick} />
        <Main current={this.state.current} />
        <div>
          {this.state.thumbs.map((url, index) => (
            <Thumbnail key={index} thumb={url} handleThumbnailClick={this.handleThumbnailClick} />
          ))}
        </div>
      </div>
    );
  }
}

module.exports = Gallery;
