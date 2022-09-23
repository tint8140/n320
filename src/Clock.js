import "./styles.css";
import React from "react";
export default class Clock extends React.Component {
  state = { date: new Date() };
  constructor() {
    super();
    setInterval(() => {
      this.setState({ dispTime: this.state.date.toLocaleTimeString() });
    }, 1000);
  }
  render() {
    return (
      <div className="clock">
        <h2>It is {this.state.dispTime}</h2>
      </div>
    );
  }
}
