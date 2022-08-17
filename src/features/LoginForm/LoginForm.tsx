import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendLoginData } from "../../infrastructure/requestService";
import { useAuthContext } from "../../infrastructure/context";
import Button from "../../ui-library/Button/Button";
import "./style.css";

function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    password: "",
  });
  const { setIsAuth } = useAuthContext();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const auth = await sendLoginData(user);

    setUser({
      email: "",
      phone: "",
      password: "",
    });

    if (auth.status === "OK!") {
      setIsAuth(true);
      navigate("/");
    }
  };

  return (
    <form className="form wrapper flex_col" onSubmit={handleSubmit} name="login">
      <label className="loginLabel">Login</label>
      <input
        className="inputField"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        value={user.email}
        type="email"
        name="email"
        placeholder="Email"
        required
        autoFocus
      />
      <input
        className="inputField"
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
        value={user.phone}
        type="tel"
        name="tel"
        pattern="(\+7|\+976)[\d]{10,15}"
        placeholder="Phone"
        required
      />
      <input
        className="inputField"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        value={user.password}
        type="password"
        name="password"
        pattern="[\w]{4,}"
        placeholder="Password"
        required
      />
      <Button type={"submit"}>SEND</Button>
    </form>
  );
}

export default LoginForm;
