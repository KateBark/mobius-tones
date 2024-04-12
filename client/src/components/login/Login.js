import { useState } from "react";
import "./Login.scss";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (username && password) {
      onLogin(username);
    } else {
      alert("Please enter a username and password.");
    }
  };

  return (
    <div className="login">
      <div className="login__title-container">
      <h1 className="login__title">Glad you're here.</h1>
      <h1 className="login__title"> Music time.</h1>
      </div>
      
      <form className="login__form" onSubmit={handleLogin}>
        <div className="login__username-container">
        <label
          htmlFor="member-input"
          className="login__user-label">Member name:</label>
        <input
        type="text"
        name="username"
          value={username}
          className="login__user-input"
          onChange={e => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        </div>
        <div className="login__password-container">
        <label
        htmlFor="password-input"
          className="login__password-label">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          className="login__password-input"
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        </div>
        <div className="login__button-container">
        <button
          type="submit"
          className="login__button">Login</button>
        </div>
        
      </form>
    </div>
  )
}

export default Login;