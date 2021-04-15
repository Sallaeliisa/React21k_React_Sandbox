import React from 'react';
import "./Circle.css";

const closeHandler = () => {
    window.location.reload();
};

const GameOver = (props) => {
    return (
        <div className="overlay">
            <div className="gameoverbox">
<h2>Game over</h2>
<p>Your score: {props.score}</p>
<button onClick={closeHandler}>X</button>
            </div>
        </div>
    );
};

export default GameOver;