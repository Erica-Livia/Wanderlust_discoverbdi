import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./css/tab.css";
import { LuMapPin } from "react-icons/lu";
import { GiDogHouse } from "react-icons/gi";
import { FaHiking } from "react-icons/fa";

export const Tab = ({ option, className, frame = "https://c.animaapp.com/mudMg3Nq/img/frame-11.svg" }) => {
  const [state, dispatch] = useReducer(reducer, {
    option: option || "destination",
  });

  return (
    <div className={`tab ${className}`}>
      <div
        className={`item ${state.option}`}
        onClick={() => {
          dispatch("click_305");
        }}
      >
         <div className="img"><LuMapPin /> </div>
        <div className="title">Destinations</div>
      </div>
      <div
        className={`item-2 option-${state.option}`}
        onClick={() => {
          dispatch("click");
        }}
      >
        <div className="img"><GiDogHouse /> </div>
        <div className="title">Culture</div>
      </div>
      <div
        className={`item-3 option-0-${state.option}`}
        onClick={() => {
          dispatch("click_301");
        }}
      >
        <div className="img"><FaHiking /> </div>
        <div className="title">Activities</div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        option: "culture",
      };

    case "click_301":
      return {
        ...state,
        option: "activity",
      };

    case "click_305":
      return {
        ...state,
        option: "destination",
      };
  }

  return state;
}

Tab.propTypes = {
  option: PropTypes.oneOf(["activity", "destination", "culture"]),
  frame: PropTypes.string,
};

export default Tab;