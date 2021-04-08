import React, { Component } from "react";
import BoxCards from "./BoxCards";

class BoxesList extends Component {
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
          <BoxCards
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            title={this.state.persons[0].title}
          />
          <BoxCards
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            title={this.state.persons[1].title}
          />
          <BoxCards
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            title={this.state.persons[2].title}
          />
        </div>
      </main>
    );
  }
}

export default BoxesList;
