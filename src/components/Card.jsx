import "../styles/components/card.css";
import analysis from "../assets/analysis.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Button from "./Button";
import PropTypes from "prop-types";

function Card({
  feed,
  subFeed,
  date,
  authorName,
  authorCompany,
  authorImg,
  title,
  content,
}) {
  return (
    <div className="card">
      <div className="card-category">
        <div className="card-feed-category">
          <div className="category-analysis">
            <img src={analysis} alt="Analysis icon" />
            <h5>{feed}</h5>
          </div>
          <span className="material-symbols-outlined">arrow_right</span>
          <h5 className="category-name">{subFeed}</h5>
        </div>
        <div className="date">
          <FontAwesomeIcon icon={faClock} className="clock-icon" />
          <p>{date}May 24, 11:02</p>
        </div>
      </div>
      <div className="card-author">
        <div className="author">
          <p className="author-name">{authorName}</p>
          <p className="author-name slash">|</p>
          <p className="author-name">{authorCompany}</p>
        </div>
        <div className="author-image">
          <img src={authorImg} alt="Author image." />
        </div>
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-separator"></div>
      <div
        className="card-body"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
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
Card.propTypes = {
  feed: PropTypes.string.isRequired,
  subFeed: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorCompany: PropTypes.string.isRequired,
  authorImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Card;
