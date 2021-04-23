import React from "react";

const Form = (props) => {
  return (
    <form id="form" onSubmit={props.submit}>
      <div className = "input">
        <div className = "field">
      <label htmlFor="firstname">First name</label>
      <input
        onChange={props.input}
        required
        type="text"
        id="firstname"
        name="firstname"
      />
      </div>
      <div className = "field">
      <label htmlFor="lastname">Last name</label>
      <input
        onChange={props.input}
        required
        type="text"
        id="lastname"
        name="lastname"
      />
      </div>
      <div className = "field">
      <label htmlFor="phonenumber">Phone number</label>
      <input
        onChange={props.input}
        required
        type="text"
        id="phonenumber"
        name="phonenumber"
      />
      </div>
      <div className = "field">
      <label htmlFor="role">Role</label>
      <select onChange={props.input} id="role" name="role">
        <option value="Select">Select</option>
        <option value="Student">Student</option>
        <option value="Teacher">Teacher</option>
        <option value="Visitor">Visitor</option>
      </select>
      </div>
      <div className = "field">
      <label htmlFor="message">Message</label>
      <textarea
        onChange={props.input}
        required
        type="textarea"
        id="message"
        name="message"
      ></textarea>
      </div>
      <div className = "button">
      <button type="submit">SEND</button>
      </div>
      </div>
    </form>
  );
};

export default Form;
