import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    const percentage = Math.round((good / total) * 100);

    this.setState(() => {
      return {
        positivePercentage: percentage,
      };
    });
  };

  countTotalFeedback = () => {
    this.setState(prev => ({
      total: prev.total + 1,
    }));
  };

  handleAssessment = e => {
    this.countTotalFeedback();

    if (e.target.textContent === 'Good') {
      this.setState(
        prev => ({ good: prev.good + 1 }),
        () => {
          this.countPositiveFeedbackPercentage();
        }
      );
    } else if (e.target.textContent === 'Neutral') {
      this.setState(
        prev => ({ neutral: prev.neutral + 1 }),
        () => {
          this.countPositiveFeedbackPercentage();
        }
      );
    } else {
      this.setState(
        prev => ({ bad: prev.bad + 1 }),
        () => {
          this.countPositiveFeedbackPercentage();
        }
      );
    }
  };

  render() {
    const { good, total, neutral, bad, positivePercentage } = this.state;
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={this.handleAssessment} />
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
