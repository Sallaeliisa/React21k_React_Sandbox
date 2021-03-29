import React, { Component } from "react";

class Main extends Component {
  state = {
    persons: [
      {
        name: "Salla Vuorikko",
        age: 33,
        title: "CEO",
      },
      { name: "Taimi from Kujala", age: 6, title: "the dog" },
      {
        name: "Jane Doan",
        age: 50,
        title: "developer",
      },
    ],
  };

  handleClick = () => {
    this.setState({
      persons: [
        {
          name: "Somebody",
          age: 20,
          title: "CEO",
        },
        { name: "Somebody else", age: 6, title: "the dog" },
        {
          name: "Someone",
          age: 50,
          title: "developer",
        },
      ],
    });
    console.log("Wow again");
  };

  render() {
    return (
      <main>
        <button onClick={this.handleClick}>Click me</button>
        <div>
          <Box
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            title={this.state.persons[0].title}
          />
          <Box
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            title={this.state.persons[1].title}
          />
          <Box
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            title={this.state.persons[2].title}
          />
        </div>
      </main>
    );
  }
}

const Box = (props) => {
  const handleClick = () => {
    console.log("Wow");
  };

  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
      <button onClick={handleClick}>Like</button>
    </div>
  );
};

export default Main;
