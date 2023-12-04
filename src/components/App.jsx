import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAssessment = e => {
    const option = e.target.textContent.toLowerCase();

    if (this.state.hasOwnProperty(option)) {
      this.setState(prev => ({ [option]: prev[option] + 1 }));
    }
  };

  render() {
    const { good, total, neutral, bad, positivePercentage } = this.state;
    const options = Object.keys(this.state);

    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onLeaveFeedback={this.handleAssessment}
          options={options}
        />
        <h2>Statistics</h2>
        <Statistics
          good={good}
          total={total}
          neutral={neutral}
          bad={bad}
          positivePercentage={positivePercentage}
        />
      </Section>
    );
  }
}
