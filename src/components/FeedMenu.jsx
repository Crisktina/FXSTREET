import { NavLink } from "react-router-dom";
import filter from "../assets/filter.svg";
import "../styles/layout/FeedMenu.css";

function FeedMenu() {
  return (
    <nav>
      <div className="navigation-links">
        <NavLink to="/latest" className="nav-link">
          <h2>Latest</h2>
        </NavLink>
        <NavLink to="/popular" className="nav-link">
          <h2>Popular</h2>
        </NavLink>
      </div>
      <img className="filter-icon" src={filter} alt="Filter icon" />
      <div className="filter-button">
        <p>Show: </p>
        <div>
          <p>All</p>
          <span className="material-symbols-outlined">keyboard_arrow_down</span>
        </div>
      </div>
    </nav>
  );
}

export default FeedMenu;
