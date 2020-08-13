import React, { Component } from "react";
class Test extends Component {
  state = {
    value: 0,
  };
  handleClick = () => {
    console.log(this.state.value);
    this.setState({ value: 80 });
  };
  handleIncrement = () => {
    var value = this.state.value;
    value = value + 1;
    this.setState({ value });
  };
  handleDecrement = () => {
    var value = this.state.value;
    value = value - 1;
    this.setState({ value });
  };
  render() {
    return (
      <div>
        <h1>Hello there!</h1>
        <button
          type="submit"
          onClick={this.handleIncrement}
          //   disabled={this.state.value === 0 ? "disabled" : ""}
        >
          +
        </button>
        <button
          type="submit"
          onClick={this.handleDecrement}
          disabled={this.state.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        <p>The value is: {this.state.value}</p>
      </div>
    );
  }
}

export default Test;
