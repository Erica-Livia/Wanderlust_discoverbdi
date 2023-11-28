  import PropTypes from "prop-types";
  import React from "react";
  import "./card.css";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";
import { Link } from "react-router-dom";
  
  export const Card = ({ state }) => {
      return (
          <div className="card">
              <div className="image-container">
                  <div className="image">
                      
                  </div>
              </div>
              <div className="text-content">
                  <div className="subtitle">Title</div>
                  <div className="title-4">Description</div>
                  {state === "active" && (
                      <div className="primary">
                          <div className="title-6"><Link to='/place' className="link">View More</Link></div>
                      </div>
                  )}
              </div>
          </div>
      );
  };
  
  Card.propTypes = {
      state: PropTypes.oneOf(["active", "default"]),
  };

export default Card;