import LoginFormFormik from "../../features/LoginForm/LoginForm";
import "./style.css";

function LoginScreen() {
  return (
    <div className="pageLayout wrapper flex_col">
      <LoginFormFormik />
    </div>
  );
}

export default LoginScreen;
