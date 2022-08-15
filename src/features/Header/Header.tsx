import Links from "./Links/Links";
import "./style.css";
import rmrLogo from "../../ui-library/img/rmr_logo.png";
import UserInfo from "./UserInfo/UserInfo";
import { useAuthContext } from "../../infrastructure/context";

function Header() {
  const { isAuth } = useAuthContext();

  return (
    <header className="header wrapper">
      <nav className="navbar">
        <div className="logoArea">
          <a href="/">
            <img src={rmrLogo} alt="logo" className="logo" />
          </a>
        </div>
        {!isAuth ? <Links /> : <UserInfo />}
      </nav>
    </header>
  );
}

export default Header;
