import React from 'react';

const View = (props) => {
    return (
        <div className="container">
        <div className="page">
            <span class="underline">
            <h1>Input</h1>
            </span>
            <span class="underline">
            <p>First name: {props.firstname}</p>
            </span>
            <span class="underline">
            <p>Last Name: {props.lastname}</p>
            </span>
            <span class="underline">
            <p>Phone Number: {props.phonenumber}</p>
            </span>
            <span class="underline">
            <p>Role: {props.role}</p>
            </span>
            <span class="underline">
            <p>Message: {props.message}</p>
            </span>
        </div>
        </div>
    );
};

export default View;