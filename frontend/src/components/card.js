  import PropTypes from "prop-types";
  import React from "react";
  import "./css/card.css";
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
                  <div className="descc">Description</div>
                  {state === "active" && (
                      <div className="primary">
                          <div className="title-6"><Link to='/place' className="link">View More</Link></div>
                      </div>
                  )}
                  {state === "guide" && (
                      <div className="primary">
                          <div className="title-6"><Link to='/guidesc' className="link">View More</Link></div>
                      </div>
                  )}
              </div>
          </div>
      );
  };
  
  Card.propTypes = {
      state: PropTypes.oneOf(["active", "default", "guide"]),
  };

export default Card;