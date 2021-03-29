import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  state = {
    counter: 0,
  };

  addHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  removeHandler = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };
  resetHandler = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    let circleClass = `${
      this.state.counter === 0
        ? ""
        : this.state.counter % 2 === 0
        ? "even"
        : "odd"
    } circle`;

    return (
      <div>
        <Header />
        <h1 className={circleClass}>{this.state.counter}</h1>
        <button onClick={this.addHandler}>Add one</button>
        <button onClick={this.removeHandler}>Remove one</button>
        <button onClick={this.resetHandler}>Reset</button>
        <Footer />
      </div>
    );
  }
}

export default App;
