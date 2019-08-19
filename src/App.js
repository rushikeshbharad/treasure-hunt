import React, { Component, Fragment } from 'react';
import './App.css';
import config from './config';

export default class App extends Component {
  state = {
    started: false,
    pageNumber: 1,
    focused: false,
    codeError: false,
    treasureHunted: false,
    congratulations: false,
  };

  beginClick = () => {
    this.setState({ started: true });
  };

  focused = () => {
    this.setState({ focused: true });
    const { codeError } = this.state;

    if (codeError) {
      this.setState({ codeError: false });
    }
  };

  blurred = () => {
    this.setState({ focused: false });
    const { codeError } = this.state;

    if (codeError) {
      this.setState({ codeError: false });
    }
  };

  handleNext() {
    this.setState({ pageNumber: this.state.pageNumber + 1, congratulations: true });
    setTimeout(() => {
      this.setState({ congratulations: false });
    }, 1900);
  }

  handleCode = (e) => {
    const value = e.target.value;
    const { codeError } = this.state;

    if (codeError) {
      this.setState({ codeError: false });
    }

    if (value.length === 4) {
      const { pageNumber } = this.state;
      const { code } = config.pages[pageNumber - 1];

      if (value === code) {
        if (config.pages.length === pageNumber) {
          if (config.finalTitle || config.finalDescription) {
            this.setState({ treasureHunted: true });
          } else {
            this.setState({ pageNumber: 1, started: false });
          }
        } else {
          e.target.blur();
          this.handleNext();
        }
      } else {
        this.setState({ codeError: true });
      }

      e.target.value = '';
    }
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
    const { pageNumber, focused, codeError } = this.state;
    if (pageNumber) {
      const { title, description, code } = config.pages[pageNumber - 1];
      return (
        <div className="treasure-hunt-container">
          <div className="treasure-hunt-title">{title}</div>
          <div className="treasure-hunt-description">{description}</div>
          {code &&
            <input
              className={`input-code ${codeError ? 'input-code-error' : ''}`}
              maxLength={4}
              placeholder={focused ? '' : 'Enter code'}
              type="text"
              onFocus={this.focused}
              onBlur={this.blurred}
              onChange={this.handleCode}
            />
          }
        </div>
      );
    }

    return null;
  }

  renderFinalScreen() {
    return (
      <div className="app-container">
        <div className="home">
          <div className="home-title">{config.finalTitle}</div>
          <div className="home-description">{config.finalDescription}</div>
        </div>
      </div>
    );
  }

  renderCongrats() {
    return (
      <div className="poster-container">
        <div className="poster-shine">
          <div className="upper-gradient" />
          <div className="lower-gradient" />
        </div>
        <div className="poster-title">Congratulations !!!</div>
      </div>
    );
  }

  render () {
    const { started, treasureHunted, congratulations } = this.state;

    return (
      <Fragment>
        {congratulations && this.renderCongrats()}
        {!started && !treasureHunted && this.renderHome()}
        {started && !treasureHunted && this.renderTreasureHunt()}
        {treasureHunted && this.renderFinalScreen()}
      </Fragment>
    );
  }
}
