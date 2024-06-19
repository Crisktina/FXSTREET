import "../styles/components/hideTell.css";
import PropTypes from "prop-types";

function HideTell({ onBackToFilters }) {
  return (
    <div className="tell-box">
      <button className="tell-us-button" onClick={onBackToFilters}>
        <span className="material-symbols-outlined">arrow_back</span>Tell us
        why:
      </button>
      <form className="form-tell">
        <label>
          <input type="radio" />
          I&apos;m not interested in this author
        </label>
        <label>
          <input type="radio" />
          I&apos;m not interested in this topic
        </label>
        <label>
          <input type="radio" />
          I&apos;ve seen too many posts on this topic
        </label>
        <label>
          <input type="radio" />
          The information is incorrect
        </label>
        <label>
          <input type="radio" />
          I&apos;ve seen this post before
        </label>
        <label>
          <input type="radio" />
          Other reasons
        </label>
        <button className="btn-hide-content" type="submit">
          Hide Content
        </button>
      </form>
    </div>
  );
}

HideTell.propTypes = {
  onBackToFilters: PropTypes.func.isRequired,
};

export default HideTell;
