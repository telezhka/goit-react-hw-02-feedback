import React, { Component } from 'react';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
// export class Counter extends Component {
// static defaultProps = {
//   step: 1,
// };
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
//   total: 0,
//   positive: 0,
// };
// countTotalFeedback = () => {
//   return new Promise(resolve => {
//     this.setState(
//       state => ({
//         total: state.good + state.neutral + state.bad,
//       }),
//       resolve
//     );
//   });
// };

// countPositiveFeedbackPercentage = () => {
//   return new Promise(resolve => {
//     const { good, total } = this.state;
//     const percentage = (good / total) * 100;
//     this.setState(
//       {
//         positive: percentage.toFixed(1),
//       },
//       resolve
//     );
//   });
// };
//   handleGood = () => {
//     this.setState(
//       (state, props) => ({
//         good: state.good + props.step,
//       }),
//       () => {
//         this.countTotalFeedback().then(this.countPositiveFeedbackPercentage);
//       }
//     );
//   };

//   handleNeutral = () => {
//     this.setState(
//       (state, props) => ({
//         neutral: state.neutral + props.step,
//       }),
//       () => {
//         this.countTotalFeedback().then(this.countPositiveFeedbackPercentage);
//       }
//     );
//   };
//   handleBad = () => {
//     this.setState(
//       (state, props) => ({
//         bad: state.bad + props.step,
//       }),
//       () => {
//         this.countTotalFeedback().then(this.countPositiveFeedbackPercentage);
//       }
//     );
//   };
//   render() {
//     const { good, neutral, bad, total, positive } = this.state;
//     return (
//       <div>
//         <h1>Please leave Feedback</h1>
//         <button type="button" onClick={this.handleGood}>
//           Good
//         </button>
//         <button type="button" onClick={this.handleNeutral}>
//           Neutral
//         </button>
//         <button type="button" onClick={this.handleBad}>
//           Bad
//         </button>
//         <h2>Results: </h2>
//         <span>Good: {good}</span>
//         <span>Neutral: {neutral}</span>
//         <span>Bad: {bad}</span>
//         <span>Total: {total}</span>
//         <span>Positive Feedback: {positive}%</span>
//       </div>
//     );
//   }
// }
export class Counter extends Component {
  static defaultProps = {
    step: 1,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    let { good, total } = this.state;
    total = this.countTotalFeedback();
    const percentage = (good / total) * 100;
    return percentage.toFixed(1);
  };

  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + this.props.step,
    }));
  };

  render() {
    let { good, neutral, bad, total, percentage } = this.state;
    total = this.countTotalFeedback();
    percentage = this.countPositiveFeedbackPercentage();

    const options = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        </Section>
      </div>
    );
  }
}
