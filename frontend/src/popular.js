import React from "react";
import './popular.css';

const Popular = () => {
    return (
        <>
        <div className="container">
          <p>Popular Tourist Attractions</p>
          <p className="description">Discover the must-visit places in Burundi.</p>
          <div className="list">
            <div className="item-4">
              <div className="icon-wrapper">
                <div className="icon">🏞️</div>
              </div>
              <div className="frame-7">
                <div className="title-11">Kibira National Park</div>
                <div className="subtitle-2">Bujumbura</div>
              </div>
              <div className="subtitle-3">Rated 4.8/5</div>
            </div>
            <div className="item-4">
              <div className="icon-wrapper">
                <div className="icon">🏛️</div>
              </div>
              <div className="frame-7">
                <div className="title-11">Gitega National Museum</div>
                <div className="subtitle-2">Gitega</div>
              </div>
              <div className="subtitle-3">Rated 4.6/5</div>
            </div>
            <div className="item-4">
              <div className="icon-wrapper">
                <div className="icon">⛰️</div>
              </div>
              <div className="frame-7">
                <div className="title-11">Ruvubu National Park</div>
                <div className="subtitle-2">Karuzi</div>
              </div>
              <div className="subtitle-3">Rated 4.7/5</div>
            </div>
          </div>
          <button className="button">
            <div className="title-wrapper">
              <div className="title-10">Explore More</div>
            </div>
          </button>
        </div>
        </>
    )
}

export default Popular;