import React, { Component } from "react";
import View from "./View";
import Form from "./Form";
import "./App.css";

class App extends Component {
  state = {
      firstname: "",
      lastname: "",
      phonenumber: "",
      role: "",
      message: "",
  };

  inputHandler = (event) => {
    this.setState({
      [event.target.id] : event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Form input={this.inputHandler} />
        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          role={this.state.role}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
