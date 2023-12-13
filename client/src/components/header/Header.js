import "./Header.scss";
import Logo from "../../assets/mobiustones-logo.jpeg";
import { NavLink, Link, useParams } from "react-router-dom";

function Header() {
  const { myvids, mystuff } = useParams();
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo-container">
          <img src={Logo} alt="site-logo" className="header__logo" />
        </div>
      </Link>
      <div className="header__buttons-container">
        <NavLink
          // to="/:mytones"
          to="/mytones/:id"
          className={({ isActive }) =>
            isActive
              ? "header__button header__button-active"
              : "header__button"
          }
        >
          <p className="header__button-text">My Tones</p>
        </NavLink>
        <NavLink
          to="/channel"
          className={({ isActive }) =>
            isActive
              ? "header__button header__button-active"
              : "header__button"
          }
        >
          <p className="header__button-text">Channel</p>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "header__button header__button-active"
              : "header__button"
          }
        >
          <p className="header__button-text">About</p>
        </NavLink>
      </div>
    </header>
  )
}

export default Header;