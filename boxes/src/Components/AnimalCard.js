import React from 'react';

const AnimalCard = (props) => {
    return (
        <div className="animalcard">
           <h1>{props.name}</h1>
           <img src={`https://source.unsplash.com/1600x900/?${props.name}`} alt={props.name}/>
           <button onClick={props.clickme}>Click me</button>
        </div>
    );
};

export default AnimalCard;