import React, { Component } from "react";
import View from "./View";
import Form from "./Form";
import NotesList from "./NotesList";
import Popup from "./Popup";
import "./App.css";

class App extends Component {
  state = {
    notes: [],
    inputData: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      role: "",
      message: "",
    },
    showPopup: false,
  };

  componentDidMount() {
    fetch("http://localhost:3001/notes")
      .then((resp) => resp.json())
      .then((data) => this.setState({ notes: data }));
  }

  inputHandler = (event) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [event.target.id]: event.target.value,
      },
    });
  };

  popupHandler = (e) => {
    this.setState({ showPopup: true });
    e.preventDefault();
  };

  postDataHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state.inputData),
    };
    fetch("http://localhost:3001/notes", requestOptions)
      .then((resp) => resp.json())
      .then((data) => this.setState({ postId: data.id }));
    // this.setState({showPopUp: false});
    alert("Note is posted", window.location.reload());
  };

  render() {
    return (
      <div>
        <Form change={this.inputHandler} submit={this.popupHandler} />
        <View {...this.state.inputData} />
        <NotesList notes={this.state.notes} />
        {this.state.showPopup && (
          <Popup {...this.state.inputData} submit={this.postDataHandler} />
        )}
      </div>
    );
  }
}

export default App;
