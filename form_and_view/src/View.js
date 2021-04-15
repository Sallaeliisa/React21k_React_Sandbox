import React from 'react';

const View = (props) => {
    return (
        <div className="viewField">
            <h1>Check your input:</h1>
            <p>First name: {props.firstname}</p>
            <p>Last Name: {props.lastname}</p>
            <p>Phone Number: {props.phonenumber}</p>
            <p>Role: {props.role}</p>
            <p>Message: {props.message}</p>
        </div>
    );
};

export default View;