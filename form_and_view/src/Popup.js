import React from "react";
// import "./Popup.css";

const closeHandler = () => {
  window.location.reload();
};

const Popup = ({ firstname, lastname, phonenumber, message, role, submit }) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h1>Do you want to send your note?</h1>
        <div>
          <p>
            First name: <span>{firstname}</span>
          </p>
          <p>
            Last name: <span>{lastname}</span>
          </p>
          <p>
            Phonenumber: <span>{phonenumber}</span>
          </p>
          <p>
            Message: <span>{message}</span>
          </p>
          <p>
            Role: <span>{role}</span>
          </p>
          <button onClick={submit}>Yes, send</button>
          <button className="secondary" onClick={closeHandler}>
            Don't send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;