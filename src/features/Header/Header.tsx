import Links from "./Links/Links";
import "./style.css";
import rmrLogo from "../../ui-library/img/rmr_logo.png";

function Header() {
  return (
    <header className="header wrapper">
      <nav className="navbar">
        <div className="logoArea">
          <img src={rmrLogo} alt="logo" className="logo" />
        </div>
        <Links />
      </nav>
    </header>
  );
}

export default Header;
