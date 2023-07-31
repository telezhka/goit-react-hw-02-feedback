import React, { Component } from 'react';
// import ReactDOM from "react-dom";
// let num = 0
export class Counter extends Component {
  static defaultProps = {
    step: 1,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGood = () => {
    this.setState((state, props) => ({
      good: state.good + props.step,
    }));
  };

  handleNeutral = () => {
    this.setState((state, props) => ({
      neutral: state.neutral + props.step,
    }));
  };
  handleBad = () => {
    this.setState((state, props) => ({
      bad: state.bad + props.step,
    }));
  };
  render() {
    // const { step } = this.props;
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave Feedback</h1>
        <button type="button" onClick={this.handleGood}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBad}>
          Bad
        </button>
        <h2>Results: </h2>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
      </div>
    );
  }
}

// ReactDOM.render(<Counter step={5} />, document.getElementById("root"));
