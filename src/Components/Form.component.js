import { useState } from "react";

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
    <div>
      <form onSubmit={handleFormSubmit}>
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
          placeholder="Email"
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
        <label>Submit</label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegistrationFrom;
