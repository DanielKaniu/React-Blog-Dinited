import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">REGISTER</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your username"
        />
        <label>E-mail</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password"
        />
        <button className="registerButton">REGISTER </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>
    </div>
  );
}
