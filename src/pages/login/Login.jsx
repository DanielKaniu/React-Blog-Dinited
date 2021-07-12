import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">LOGIN</span>
      <form className="loginForm">
        <label>E-mail</label>
        <input
          type="email"
          className="loginInput"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password"
        />
        <button className="loginButton">LOGIN</button>
      </form>
      <button className="loginRegisterButton">REGISTER</button>
    </div>
  );
}
