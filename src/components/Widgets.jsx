import LineFakeLayout from "./LineFakeLayout";
import "../styles/layout/Widgets.css";
import Circle from "./Circle";

function Widgets() {
  return (
    <div className="widget">
      <div className="widget-text">
        <LineFakeLayout
          width="20.4375rem"
          backgroundColor="var(--background-white)"
        />
        <LineFakeLayout
          width="12.1875rem"
          backgroundColor="var(--background-white)"
        />
      </div>
      <button className="widget-button">
        <LineFakeLayout width="6.8125rem" backgroundColor="var(--blue-dark)" />
        <Circle backgroundColor="var(--blue-dark)" />
      </button>
    </div>
  );
}

export default Widgets;
