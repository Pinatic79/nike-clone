import "./Header.css";
import Logo from "../../../public/images/Logo.svg";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img className="logo-image" src={Logo} alt="Brand Logo" />
        </div>
        <ul>
          <li className="nav-items">MENU</li>
          <li className="nav-items">LOCATION</li>
          <li className="nav-items">ABOUT</li>
          <li className="nav-items">CONTACT</li>
        </ul>
        <button>Login</button>
      </nav>
    </header>
  );
};
export default Header;
