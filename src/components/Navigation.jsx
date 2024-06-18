import fxstreet from "../assets/fxstreet.svg";
import fxspremium from "../assets/fxspremium.svg";
import "../styles/layout/Navigation.css";
import Circle from "./Circle";
import MenuTop from "./MenuTop";
import LineFakeLayout from "./LineFakeLayout";
import Widgets from "./Widgets";

function Navigation() {
  return (
    <>
      <MenuTop />
      <header>
        <a href="#">
          <img src={fxspremium} className="mobile-logo" alt="FXSTREET logo" />
          <img src={fxstreet} className="desktop-logo" alt="FXSTREET logo" />
        </a>
        <div className="buttons-circle">
          <Circle backgroundColor="var(--grey-details)" />
          <Circle backgroundColor="var(--grey-details)" />
        </div>
        <div className="menu-lateral">
          <LineFakeLayout
            width="6.9rem"
            backgroundColor="var(--background-white)"
          />
          <LineFakeLayout
            width="6.9rem"
            backgroundColor="var(--background-white)"
          />
          <LineFakeLayout
            width="6.9rem"
            backgroundColor="var(--background-white)"
          />
          <LineFakeLayout
            width="6.9rem"
            backgroundColor="var(--background-white)"
          />
          <LineFakeLayout
            width="6.9rem"
            backgroundColor="var(--background-white)"
          />
        </div>
      </header>
      <Widgets />
    </>
  );
}

export default Navigation;
