import { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationFrom = () => {
  //state for each one of them
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rePassword, setRePassword] = useState("");

  //-- add functionality --\\
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e, "REGISTRATION FORM HAS BEEN SUBMITED samphey jeda");
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit} className="add-form form-control">
        <label>First Name:</label>
        <input
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <label>Last Name: </label>
        <input
          type="text"
          placeholder="first name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Email: </label>
        <input
          type="email"
          placeholder="Email@email.co"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          placeholder="Password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />

        <input type="submit" />
      </form>
      <Link to="/">Login</Link>
    </div>
  );
};

export default RegistrationFrom;
