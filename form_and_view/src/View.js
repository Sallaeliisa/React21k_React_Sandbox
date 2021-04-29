import React from 'react';

const View = ({ firstname, lastname, phonenumber, message, role }) => {
    return (
        <div className="container">
        <div className="page">
            <span className="underline">
            <h1>Input</h1>
            </span>
            <span className="underline">
            <p>First name: {firstname}</p>
            </span>
            <span className="underline">
            <p>Last Name: {lastname}</p>
            </span>
            <span className="underline">
            <p>Phone Number: {phonenumber}</p>
            </span>
            <span className="underline">
            <p>Role: {role}</p>
            </span>
            <span className="underline">
            <p>Message: {message}</p>
            </span>
        </div>
        </div>
    );
};

export default View;