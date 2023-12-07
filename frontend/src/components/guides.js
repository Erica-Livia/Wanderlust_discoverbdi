import React from "react";
import './css/destinations.css';
import { Card } from "./card";
import Popular from "./popular";


const Guides = () => {
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
            <label htmlFor="regions" className="">Cultural Expert</label>
            
            </div>
            <div className="item">
            <input type="radio" id="wildlife" name="filter" />
            <label htmlFor="wildlife" className="">Wildlife Expert</label>

            </div>
            <div className="item">
            <input type="radio" id="tour" name="filter" />
            <label htmlFor="tour" className="">Tour Guides</label>
            
            </div>
        </div>
       
        <div className="cards">
            <Card state="guide" />
            <Card state="guide" />
            <Card state="guide" />
            <Card state="guide" />
            <Card state="guide" />
            <Card state="guide" />
            <Card state="guide" />
            <Card state="guide" />
            <Card state="guide" />
            
            
        </div>
       
        
        </div>
        </>
    )
}

export default Guides;