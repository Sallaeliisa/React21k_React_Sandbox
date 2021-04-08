import React from 'react';
import './Circle.css';

const Circle = (props) => {
    return (
        <div className={`circle ${props.color}`}>
            <p>{props.id}</p>
        </div>
    );
};

export default Circle;