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
            <input type="radio" id="interests" name="filter" />
            <label htmlFor="interests" className="">All</label>
            
            </div>
            <div className="item">
            <input type="radio" id="regions" name="filter" />
            <label htmlFor="regions" className="">Destinations</label>
            
            </div>
            <div className="item">
            <input type="radio" id="interests" name="filter" />
            <label htmlFor="interests" className="">Culture</label>

            </div>
            <div className="item">
            <input type="radio" id="interests" name="filter" />
            <label htmlFor="interests" className="">Activities</label>
            
            </div>
        </div>
        <div className="cards">
            <Card state="active" />
            <Card state="active" />
            <Card state="active" />
            <Card state="active" />
            <Card state="active" />
            <Card state="active" />
            <Card state="active" />
            <Card state="active" />
            <Card state="active" />
            <Card state="active" />
        </div>
       
        <Popular />
        
        </div>
        </>
    )
}

export default Destinations;