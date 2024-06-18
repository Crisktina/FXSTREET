import "../styles/components/circle.css";
import PropTypes from "prop-types";

function Circle({ backgroundColor }) {
  return (
    <div
      className="circle"
      style={{
        backgroundColor: backgroundColor,
      }}
    ></div>
  );
}
Circle.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
export default Circle;
