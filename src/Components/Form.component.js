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
      <h3 style={{ textAlign: "center" }}> REGISTER</h3>
      <form onSubmit={handleFormSubmit} className="add-form form-control">
        <label>First Name:</label>
        <input
          required
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <label>Last Name: </label>
        <input
          required
          type="text"
          placeholder="first name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Email: </label>
        <input
          required
          type="email"
          placeholder="Email@email.co"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password: </label>
        <input
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Password: </label>
        <input
          required
          type="password"
          placeholder="Password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />

        <input type="submit" />
      </form>
      <footer>
        <h3>Have an Acc? </h3>
        <Link to="/">Login</Link>
      </footer>
    </div>
  );
};

export default RegistrationFrom;
