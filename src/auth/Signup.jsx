import React, { useState } from "react";
import "./Signup.css";
function Signup() {
  const initialValue = {
    firstName: "",
    middleName: "",
    lastName: "",
  };
  const [username, setUsername] = useState("");
  const [formField, setFormField] = useState(initialValue);
  const { firstName, middleName, lastName } = formField;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };
  const handleSubmit = (e) => {
    // console.log(firstName, middleName, lastName);
    handleUsername();
    e.preventDefault();
  };

  const handleUsername = () => {
    setUsername(automateUserName());
  };
  const automateUserName = () => {
    if (firstName && middleName && lastName) {
      let randomNum = Math.floor(Math.random() * 10);
      let userName = `${firstName}_${middleName}_${lastName}_${randomNum}`;
      return userName.toLowerCase();
    }
  };

  return (
    <div className="container form-container">
      <h1>Register With Us</h1>
      <form id="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="username"
            value={username}
            placeholder="Enter username"
            onChange={handleUsername}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter first name"
            name="firstName"
            // value={firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter middle name"
            name="middleName"
            // value={middleName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter last name"
            name="lastName"
            // value={lastName}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Signup;
