import Circle from "./Circle";
import LineFakeLayout from "./LineFakeLayout";
import "../styles/layout/MenuTop.css";

function MenuTop() {
  return (
    <div className="menu-top">
      <div className="circle-line">
        <Circle backgroundColor="var(--blue-dark)" />
        <LineFakeLayout width="8.5rem" backgroundColor="var(--blue-dark)" />
      </div>
      <div className="menu-top-right">
        <LineFakeLayout width="8.5rem" backgroundColor="var(--orange)" />
        <div className="menu-top-right-cercle-line">
          <Circle backgroundColor="var(--grey-light)" />
        </div>
        <div className="menu-top-right-cercle-line">
          <Circle backgroundColor="var(--grey-light)" />
        </div>
        <div className="circle-line">
          <div className="menu-top-right-cercle-line">
            <Circle backgroundColor="var(--grey-light)" />
          </div>
          <LineFakeLayout
            width="5.6875rem"
            backgroundColor="var(--grey-light)"
          />
        </div>
      </div>
    </div>
  );
}

export default MenuTop;
