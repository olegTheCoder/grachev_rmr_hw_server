import "./style.css";
import { useState } from "react";

function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUser({
      email: "",
      phone: "",
      password: "",
    });
  };

  return (
    <form className="wrapper flex_col" onSubmit={handleSubmit} name="login">
      <label>Login</label>
      <input
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        value={user.email}
        type="email"
        name="email"
        placeholder="Email"
        required
        autoFocus
      />
      <input
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
        value={user.phone}
        type="tel"
        name="tel"
        placeholder="Phone"
        required
      />
      <input
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        value={user.password}
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <button type="submit">SEND</button>
    </form>
  );
}

export default LoginForm;
