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
    total: 0,
    positive: 0,
  };
  countTotalFeedback = () => {
    this.setState(state => ({
      total: state.good + state.neutral + state.bad,
    }));
  };
  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    const percentage = (good / total) * 100;
    this.setState({
      positive: percentage.toFixed(0),
    });
  };
  handleGood = () => {
    this.setState(
      (state, props) => ({
        good: state.good + props.step,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  };

  handleNeutral = () => {
    this.setState(
      (state, props) => ({
        neutral: state.neutral + props.step,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  };
  handleBad = () => {
    this.setState(
      (state, props) => ({
        bad: state.bad + props.step,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  };
  render() {
    // const { step } = this.props;
    const { good, neutral, bad, total, positive } = this.state;
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
        <span>Total: {total}</span>
        <span>Positive Feedback: {positive}%</span>
      </div>
    );
  }
}

// ReactDOM.render(<Counter step={5} />, document.getElementById("root"));
