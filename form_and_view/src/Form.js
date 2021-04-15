import React from "react";

const Form = (props) => {
  return (
    <form id="form" onSubmit={props.submit}>
      <label htmlFor="firstname">First name</label>
      <input
        onChange={props.input}
        type="text"
        id="firstname"
        name="firstname"
      />
      <label htmlFor="lastname">Last name</label>
      <input
        onChange={props.input}
        type="text"
        id="lastname"
        name="lastname"
      />
      <label htmlFor="phonenumber">Phone number</label>
      <input
        onChange={props.input}
        type="text"
        id="phonenumber"
        name="phonenumber"
      />
      <label htmlFor="role">Role</label>
      <select onChange={props.input} id="role" name="role">
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="visitor">Visitor</option>
      </select>
      <label htmlFor="message">Message</label>
      <textarea
        onChange={props.input}
        type="textarea"
        id="message"
        name="message"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
