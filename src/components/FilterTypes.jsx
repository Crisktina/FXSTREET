import Button from "./Button";
import "../styles/components/filterTypes.css";
import PropTypes from "prop-types";

function FilterTypes({ onTellClick }) {
  return (
    <div className="filters-box">
      <button className="initial-button" onClick={onTellClick}>
        <span className="material-symbols-outlined">visibility_off</span>Hide
      </button>
      <Button
        iconName="tune"
        text="Improve my feed"
        addText=""
        colorActive="var(--grey-light)"
      />
    </div>
  );
}

FilterTypes.propTypes = {
  onTellClick: PropTypes.func.isRequired,
};

export default FilterTypes;
