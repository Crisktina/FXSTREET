import fxstreet from "../assets/fxstreet.svg";
import fxspremium from "../assets/fxspremium.svg";
import filter from "../assets/filter.svg";
import "../styles/layout/Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <header>
        <a href="#">
          <img src={fxspremium} className="mobile-logo" alt="FXSTREET logo" />
          <img src={fxstreet} className="desktop-logo" alt="FXSTREET logo" />
        </a>
        <div className="buttons-circle">
          <div className="mobile-circle"></div>
          <div className="mobile-circle"></div>
        </div>
      </header>
      <nav>
        <div className="navigation-links">
          <NavLink to="/latest" className="nav-link">
            <h2>Latest</h2>
          </NavLink>
          <NavLink to="/popular" className="nav-link">
            <h2>Popular</h2>
          </NavLink>
        </div>
        <img src={filter} alt="Filter icon" />
      </nav>
    </>
  );
}

export default Navigation;
