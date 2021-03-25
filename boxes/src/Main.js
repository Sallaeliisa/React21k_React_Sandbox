import React from "react";

const Box = (props) => {
    return (
      <div className="box">
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Title: {props.title}</p>
      </div>
    );
  };

const Main = () => {
  return (
    <main>
      <Box name="Salla Vuorikko" age="33" title="student" />
      <Box name="Taimi from Kujala" age="6" title="the dog" />
      <Box name="Jane Doan" age="50" title="doctor" />
    </main>
  );
};

export default Main;
