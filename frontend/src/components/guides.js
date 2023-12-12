import React, { useState } from "react";
import { Card } from "./card";
import Popular from "./popular";
import { guides } from "../db/guide";
import '../components/css/guides.css'


const Guides = () => {
    const [filter, setFilter] = useState("all");

    const filteredGuides = guides.filter((guide) => {
        if (filter === "all") {
            return true;
        } else {
            return guide.category && guide.category === filter;
        }
    });

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return(
        <>
         <div className="destinations">
                <div className="filter">
                    <div className="item">
                        <input type="radio" id="all" name="filter" checked={filter === "all"} onChange={() => handleFilterChange("all")} />
                        <label htmlFor="all" className="">All</label>
                    </div>
                    <div className="item">
                        <input type="radio" id="cultural expert" name="filter" checked={filter === "cultural expert"} onChange={() => handleFilterChange("cultural expert")} />
                        <label htmlFor="cultural expert" className="">Cultural experts</label>
                    </div>
                    <div className="item">
                        <input type="radio" id="wildlife expert" name="filter" checked={filter === "wildlife expert"} onChange={() => handleFilterChange("wildlife expert")} />
                        <label htmlFor="wildlife expert" className="">Wildlife Expert</label>
                    </div>
                    <div className="item">
                        <input type="radio" id="tour guide" name="filter" checked={filter === "tour guide"} onChange={() => handleFilterChange("tour guide")} />
                        <label htmlFor="tour guide" className="">Tour Guide</label>
                    </div>
                    <div className="item">
                        <input type="radio" id="historical guide" name="filter" checked={filter === "historical guide"} onChange={() => handleFilterChange("historical guide")} />
                        <label htmlFor="historical guide" className="">Historical Guides</label>
                    </div>
                </div>
       
        <div className="cards">
                    {filteredGuides.map((guide) => (
                        <Card state="guide" key={guide.id} guide={guide} />
                    ))}
                </div>
        
        </div>
        </>
    )
}

export default Guides;