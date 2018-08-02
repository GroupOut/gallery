import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Main from './Main.jsx';
import Thumbnail from './Thumbnail.jsx';

const Wrapper = styled.div`
  max-width: 85%;
  height: auto;
  position: relative;
  margin-top: 3%;
  margin-left: 12%;
  margin-bottom: 3%;
`;

const NextButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 100%;
  font-weight: lighter;
  position: absolute;
  right: 20px;
  bottom: 55%;
  background: black;
  color: white;
  border: black;
  display: none;
  ${Wrapper}: hover & {
    display: inline;
  }
  &:hover {
    background: white;
    color: black;
  }
`;

const PrevButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 100%;
  font-weight: lighter;
  position: absolute;
  left: 20px;
  bottom: 55%;
  background: black;
  color: white;
  border: black;
  display: none;
  ${Wrapper}: hover & {
    display: inline;
  }
  &:hover {
    background: white;
    color: black;
  }
`;

const RightButton = props => (
  <NextButton onClick={props.handleNextClick} type="button">
    {'>'}
  </NextButton>
);

const LeftButton = props => (
  <PrevButton onClick={props.handlePrevClick} type="button">
    {'<'}
  </PrevButton>
);

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

  getImages() {
    const that = this;
    const locSplit = window.location.pathname.split('/');

    for (let i = 0; i < locSplit.length; i++) {
      if (locSplit[i] === 'deals') {
        var dealId = parseInt(locSplit[i + 1]);
      }
    }

    if (typeof dealId === 'number') {
      if (dealId > 0 && dealId < 101) {
        $.ajax({
          url: `http://localhost:3003/images/${dealId}`,
          success: (data) => {
            console.log(data.data);
            that.setState({
              current: data.data[0].URL0,
              thumbs: [
                data.data[0].URL0a,
                data.data[0].URL1a,
                data.data[0].URL2a,
                data.data[0].URL3a,
                data.data[0].URL4a,
                data.data[0].URL5a,
                data.data[0].URL6a,
                data.data[0].URL7a,
                data.data[0].URL8a,
                data.data[0].URL9a,
              ],
            });
          },
          dataType: 'json',
        });
      } else {
        console.log(
          `Error: invalid ID: ${dealId}. Please use an ID between 1 and 100 in url. Ex: "localhost:3000/deals/<<ID>>"`,
        );
      }
    } else {
      console.log(
        `Error: invalid URL: ${window.location.href}. Please redirect to "localhost:3000/deals/1"`,
      );
    }
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
      <Wrapper>
        <LeftButton handlePrevClick={this.handlePrevClick} />
        <RightButton handleNextClick={this.handleNextClick} />
        <Main current={this.state.current} />
        <div>
          {this.state.thumbs.map((url, index) => (
            <Thumbnail
              key={index}
              thumb={url}
              handleThumbnailClick={this.handleThumbnailClick}
              current={this.state.current}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

module.exports = Gallery;
