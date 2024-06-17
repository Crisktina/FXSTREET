import { useState } from "react";
import "../styles/components/button.css";
import PropTypes from "prop-types";

function Button({ iconName, text = "", colorActive, addText = "" }) {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <button
      className={`initial-button ${active ? "actived" : ""}`}
      style={{
        color: active
          ? colorActive
          : hovered
          ? "var(--hover-color)"
          : "inherit",
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="material-symbols-outlined">{iconName}</span>
      {active ? `${text}${addText}` : text}
    </button>
  );
}
Button.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  colorActive: PropTypes.string.isRequired,
  addText: PropTypes.string.isRequired,
};

export default Button;
