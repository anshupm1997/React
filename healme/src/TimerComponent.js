import React, { Component } from 'react';
import './TimerComponent.css';

class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      intervalId: null
    };
  }

  startTimer = () => {
    if (this.state.intervalId) return; // If the timer is already running, do nothing

    const intervalId = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);

    this.setState({ intervalId });
  };

  stopTimer = () => {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  };

  componentWillUnmount() {
    this.stopTimer(); // Ensure the timer is cleared when the component unmounts
  }

  render() {
    return (
      <div className="timer-container">
        <h1>Timer: {this.state.timer} seconds</h1>
        <button onClick={this.startTimer}>Start Timer</button>
        <button onClick={this.stopTimer}>Stop Timer</button>
      </div>
    );
  }
}

export default TimerComponent;
