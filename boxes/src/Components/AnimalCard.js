import React from 'react';

const AnimalCard = (props) => {
    return (
        <div className="animalcard">
           <h1>{props.name}</h1>
           <img src={props.img} alt={props.name}/>
           <button onClick={props.clickme}>Click me</button>
        </div>
    );
};

export default AnimalCard;