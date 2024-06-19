import "../styles/components/card.css";
import analysis from "../assets/analysis.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Button from "./Button";
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import FilterTypes from "./FilterTypes";
import HideTell from "./HideTell";

function formatDate(apiDate) {
  const date = new Date(apiDate);
  //formato de fecha UTC (universal)
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getUTCMonth()];
  const day = date.getUTCDate();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${month} ${day}, ${formattedHours}:${formattedMinutes}`;
}

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
  const formattedDate = formatDate(date);

  const [showFilters, setShowFilters] = useState(false);
  const [showTell, setShowTell] = useState(false);

  const filtersRef = useRef(null);
  const tellRef = useRef(null);

  const handleFiltersClick = () => {
    setShowFilters(!showFilters);
    setShowTell(false);
  };

  const handleTellClick = () => {
    setShowTell(true);
    setShowFilters(false);
  };

  const handleBackToFilters = () => {
    setShowFilters(true);
    setShowTell(false);
  };

  const handleClickOutside = (e) => {
    if (filtersRef.current && !filtersRef.current.contains(e.target)) {
      setShowFilters(false);
    }
    if (tellRef.current && !tellRef.current.contains(e.target)) {
      setShowTell(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <p>{formattedDate}</p>
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
        <button
          className="initial-button more-button"
          onClick={handleFiltersClick}
        >
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </div>
      {showFilters && (
        <div className="overlay">
          <div ref={filtersRef}>
            <FilterTypes onTellClick={handleTellClick} />
          </div>
        </div>
      )}
      {showTell && (
        <div className="hideBoxCard" ref={tellRef}>
          <HideTell
            setShowTell={setShowTell}
            onBackToFilters={handleBackToFilters}
          />
        </div>
      )}
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
