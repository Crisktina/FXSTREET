import PropTypes from "prop-types";
import "../styles/components/lineFakeLayout.css";

function LineFakeLayout({ width, backgroundColor }) {
  return (
    <div
      className="line-fake-layout"
      style={{ width: width, backgroundColor: backgroundColor }}
    ></div>
  );
}
LineFakeLayout.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};
export default LineFakeLayout;
