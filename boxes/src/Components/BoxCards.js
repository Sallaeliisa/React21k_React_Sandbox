import React from 'react';

const BoxCards = (props) => {
    return (
<div className="box">
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Title: {props.title}</p>
        <button onClick={handleClick}>Like</button>
      </div>
    );
  };

    const handleClick = () => {
      console.log("Wow");
    };

  
    export default BoxCards;