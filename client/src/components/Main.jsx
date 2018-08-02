import React from 'react';
import styles from './styles/app.css';

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
        <img className={styles.mainView} src={this.props.current} alt="" />
      </span>
    );
  }
}

module.exports = Main;
