import { Component } from 'react';
import PropTypes from 'prop-types';

class Feedback extends Component {
  static defaultProps = {
    initialValue: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };

  static propTypes = {
    defaultProps: PropTypes.PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }),
  };


  state = this.props.initialValue;

//   total = Object.values(this.state).reduce((acc, value) => {
//     return acc + value;
//   }, 0);

  handleGoodBtn = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutralBtn = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBadBtn = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);

    if (!total || !this.state.good) {
      return 0;
    }

    return Math.round((this.state.good * 100) / total).toString() + '%';
  };

  render() {
    return (
      <section>
        <div>
          <h2>Please leave feedback</h2>
          <ul>
            <button type="button" data-name="good" onClick={this.handleGoodBtn}>
              Good
            </button>
            <button
              type="button"
              data-name="neutral"
              onClick={this.handleNeutralBtn}
            >
              Neutral
            </button>
            <button type="button" data-name="bad" onClick={this.handleBadBtn}>
              Bad
            </button>
          </ul>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>
              Total:
              {this.countTotalFeedback()}
            </li>
            <li>Positive feedback: {this.countPositiveFeedbackPercentage()}</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Feedback;
