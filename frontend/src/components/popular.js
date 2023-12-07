import React from "react";
import './css/popular.css';
import { Link } from "react-router-dom";

const Popular = () => {
    return (
        <>
        <div className="pop">
          <p>Popular Tourist Attractions</p>
          <div className="popdescription">
          </div>
          <div className="list">
            <div className="item-4">
            <div className="icon-wrapper">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_j-QqgLHWuz10tOacmZruVZQI-CjLV3Dbg&usqp=CAU" className="img1" />
              </div>
              <div className="frame-7">
                <div className="title-11">Kibira National Park</div>
                <div className="subtitle-2">Bujumbura</div>
              </div>
              <div className="subtitle-3">Rated 4.8/5</div>
            </div>
            <div className="item-4">
              <div className="icon-wrapper">
                <img src="https://lionelntasano.files.wordpress.com/2021/10/musee-national-de-gitega.jpg" />
              </div>
              <div className="frame-7">
                <div className="title-11">Gitega National Museum</div>
                <div className="subtitle-2">Gitega</div>
              </div>
              <div className="subtitle-3">Rated 4.6/5</div>
            </div>
            <div className="item-4">
            <div className="icon-wrapper">
                <img src="https://img.ev.mu/images/attractions/3958/960x640/757900.jpg"  className=""/>
              </div>
              <div className="frame-7">
                <div className="title-11">Ruvubu National Park</div>
                <div className="subtitle-2">Karuzi</div>
              </div>
              <div className="subtitle-3">Rated 4.7/5</div>
            </div>
          </div>
          <button><Link to='/destinations' className="explore">Explore More</Link></button>
          
        </div>
        </>
    )
}

export default Popular;