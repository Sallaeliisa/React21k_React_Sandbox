import React, { Component } from "react";
import View from "./View";
import Form from "./Form";
import NotesList from "./NotesList";
import "./App.css";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      role: "",
      message: "",
    },
    notes: [],
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

  postDataHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state.inputData),
    };
    fetch("http://localhost:3001/notes", requestOptions).then(resp => resp.json()).then(data => this.setState({postId: data.id}));
    // this.setState({showPopUp: false});
    alert("Note is posted", window.location.reload());
  };

  render() {
    return (
      <div>
        <Form input={this.inputHandler} submit={this.postDataHandler}/>
        <View {...this.state.inputData} />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
