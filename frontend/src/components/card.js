import PropTypes from "prop-types";
import React from "react";
import "./css/card.css";
import { Link } from "react-router-dom";

export const Card = ({ state, place, guide }) => {
  if (!place && !guide) {
    return <div>Error: Invalid Data</div>;
  }

  return (
    <div className="card">
      {state === "active" && (
        <div className="image-container">
          <img src={place.img} alt={place.title} />

          <div className="text-content">
            <div className="subtitle">{place.title}</div>
            <div className="descc">{place.shortdesc}</div>
            <div className="price">{place.price}</div>
          </div>

          <div className="title-6">
            <Link to={`/details/${place.id}`} className="link">
              <button className="primary">View More</button>
            </Link>
          </div>
        </div>
      )}
      {state === "guide" && (
        <div className="image-container">
          <img src={guide.img} alt={guide.name} />

          <div className="text-content">
            <div className="subtitle">{guide.name}</div>
            <div className="descc">{guide.description}</div>
          </div>

          <div className="title-6">
          <Link to={`/guidesc/${guide.id}`} className="link">
              <button className="primary">View More</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  state: PropTypes.oneOf(["active", "guide"]),
  place: PropTypes.object,
  guide: PropTypes.object,
};

export default Card;
