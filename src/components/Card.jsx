import "../styles/components/card.css";
import analysis from "../assets/analysis.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Button from "./Button";

function Card() {
  return (
    <div className="card">
      <div className="card-category">
        <div>
          <div className="category-analysis">
            <img src={analysis} alt="Analysis icon" />
            <h5>Analysis</h5>
          </div>
          <h5 className="category-name">Webinars</h5>
        </div>
        <div className="date">
          <FontAwesomeIcon icon={faClock} className="clock-icon" />
          <p>May 24, 11:02</p>
        </div>
      </div>
      <div className="card-author">
        <div className="author">
          <p className="author-name">FXSTtreet Team</p>
          <p className="author-name slash">|</p>
          <p className="author-name">FXStreet</p>
        </div>
        <div className="card-title">
          <div className="title-image"></div>
          <h3>FXS Premium - lorem ipsum dolor sit em</h3>
        </div>
      </div>
      <div className="card-separator"></div>
      <div className="card-body">
        <p className="card-body-text">
          Juan will find high probability trades based on the Elliott Wave
          Theory on different markets. Get ready to jump into the next wave and
          find the right way to use the theory in live markets. Starting at
          13:00 GMT!
        </p>
      </div>
      <div className="card-options">
        <Button
          iconName="favorite"
          text="Like"
          addText="d!"
          colorActive="var(--like)"
        />
        <Button
          iconName="bookmark"
          text="Save"
          addText="d!"
          colorActive="var(--save)"
        />
        <Button
          iconName="more_horiz"
          text=""
          addText=""
          colorActive="var(--grey-light))"
        />
      </div>
    </div>
  );
}

export default Card;
