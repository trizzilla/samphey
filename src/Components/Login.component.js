import { useState } from "react";

const Login = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("LOGIN FORM HAS BEEN SUMITED", e);
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <label>User Name: </label>
        <input
          type="text"
          placeholder="name/id"
          value={text}
          onChange={(e) => setText(e.target.value, console.log(e.target.value))}
        />
        <label>Password: </label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value, console.log(e.target.value))
          }
        />
        <label>Submit</label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
