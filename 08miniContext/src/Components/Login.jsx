import React, { useContext, useState } from "react";
import UserContext from "../Context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      {"  "}
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
