import React, { useState } from "react";
import './css/destinations.css';
import { Card } from "./card";
import Popular from "./popular";
import { places } from "../db/place";

const Destinations = () => {
    const [filter, setFilter] = useState("all");

    const filteredPlaces = places.filter((place) => {
        if (filter === "all") {
            return true;
        } else {
            return place.category && place.category === filter;
        }
    });

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <>
            <div className="destinations">
                <div className="filter">
                    <div className="item">
                        <input type="radio" id="all" name="filter" checked={filter === "all"} onChange={() => handleFilterChange("all")} />
                        <label htmlFor="all" className="">All</label>
                    </div>
                    <div className="item">
                        <input type="radio" id="Destination" name="filter" checked={filter === "Destination"} onChange={() => handleFilterChange("Destination")} />
                        <label htmlFor="Destination" className="">Destinations</label>
                    </div>
                    <div className="item">
                        <input type="radio" id="Culture" name="filter" checked={filter === "Culture"} onChange={() => handleFilterChange("Culture")} />
                        <label htmlFor="Culture" className="">Culture</label>
                    </div>
                    <div className="item">
                        <input type="radio" id="Activity" name="filter" checked={filter === "Activity"} onChange={() => handleFilterChange("Activity")} />
                        <label htmlFor="Activity" className="">Activities</label>
                    </div>
                </div>
                <div className="cards">
                    {filteredPlaces.map((place) => (
                        <Card state="active" key={place.id} place={place} />
                    ))}
                </div>
                <Popular />
            </div>
        </>
    );
}

export default Destinations;
