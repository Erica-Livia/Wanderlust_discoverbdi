import './css/destinations.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './card';
import { Link, useHistory } from 'react-router-dom';

const Destination = () => {
  const [ setSearchInput] = useState("");
  const location = useLocation();
  const searchInput = new URLSearchParams(location.search).get('search');

  const places = [];

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const filteredPlaces = places.filter((place) => {
    const lowerSearchInput = searchInput.toLowerCase();
    const concatenatedText = `${place.props.title} ${place.props.region} ${place.props.shortdesc} ${place.props.country} ${place.props.category}`.toLowerCase();
  
    return concatenatedText.includes(lowerSearchInput);
    // Add more properties as needed to the concatenated string
  });
  return (
      <>
        <h3 style={{padding: "20px 170px"}}>Search Results for: {searchInput}</h3>
        <h4 style={{padding: "20px 170px", textDecoration:"none", color:"black"}}><Link style={{color:"black"}} to='/home'>Return To Home Page</Link></h4>
        <div className="card-container">
        {filteredPlaces.map((place, index) => (
        <Link key={index} to='/destination' style={{textDecoration:"none", color:"black"}}>
          <div className="card-wrapper" style={{padding:"20px 0px;"}}>
            {place}
        </div></Link>
       
      ))}
      </div>
      </>
    );
  };

  export default Destination;