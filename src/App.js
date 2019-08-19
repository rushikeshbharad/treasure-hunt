import React, { Component, Fragment } from 'react';
import './App.css';
import config from './config';

export default class App extends Component {
  renderHome() {
    return (
      <div className="app-container">
        <div className="home">
          <div className="home-title">{config.homeTitle}</div>
          <div className="home-description">{config.homeDescription}</div>
        </div>
      </div>
    );
  }

  render () {
    return (
      <Fragment>
        {this.renderHome()}
      </Fragment>
    );
  }
}
