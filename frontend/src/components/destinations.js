import React from "react";
import './css/destinations.css';
import { Card } from "./card";
import Popular from "./popular";

const Destinations = () => {
    return(
        <>
        <div className="destinations">
        <div className="filter">
            <div className="item">
            <div className="title-4">Interests</div>
            <img className="img" alt="Frame" src="https://c.animaapp.com/6YPq8HBQ/img/frame-3.svg" />
            </div>
            <div className="item">
            <div className="title-4">Regions</div>
            <img className="img" alt="Frame" src="https://c.animaapp.com/6YPq8HBQ/img/frame-2.svg" />
            </div>
            <div className="item">
            <div className="title-4">Activity Type</div>
            <img className="img" alt="Frame" src="https://c.animaapp.com/6YPq8HBQ/img/frame-1.svg" />
            </div>
            <div className="item-2">
            <div className="title-4">Price Range</div>
            <img className="img" alt="Frame" src="https://c.animaapp.com/6YPq8HBQ/img/frame.svg" />
            </div>
        </div>
        <div className="cards">
            <Card state="default" />
            <Card state="default" />
            <Card state="default" />
            <Card state="default" />
            <Card state="default" />
            <Card state="default" />
            <Card state="default" />
            <Card state="default" />
        </div>
        {/* <div className="frame-4">
            <img
            className="icon-arrow-ios-back"
            alt="Icon arrow ios back"
            src="https://c.animaapp.com/6YPq8HBQ/img/---icon--arrow-ios-back-@2x.png"
            />
            <div className="frame-5">
            <div className="text-wrapper-3">1</div>
            </div>
            <div className="frame-6">
            <div className="text-wrapper-3">2</div>
            </div>
            <div className="frame-6">
            <div className="text-wrapper-3">3</div>
            </div>
            <img
            className="icon-arrow-ios"
            alt="Icon arrow ios"
            src="https://c.animaapp.com/6YPq8HBQ/img/---icon--arrow-ios-forward-@2x.png"
            />
        </div> */}
        <Popular />
        
        </div>
        </>
    )
}

export default Destinations;