import React, { Component, Fragment } from 'react';
import './App.css';
import config from './config';

export default class App extends Component {
  state = {
    started: false,
  };

  beginClick = () => {
    this.setState({ started: true });
  };

  renderHome() {
    return (
      <div className="app-container">
        <div className="home">
          <div className="home-title">{config.homeTitle}</div>
          <div className="home-description">{config.homeDescription}</div>
          <div className="home-button" onClick={this.beginClick}>Begin</div>
        </div>
      </div>
    );
  }

  renderTreasureHunt() {
    return null;
  }

  render () {
    const { started } = this.state;

    return (
      <Fragment>
        {!started && this.renderHome()}
        {started && this.renderTreasureHunt()}
      </Fragment>
    );
  }
}
