import React from "react";
import { useParams } from "react-router-dom";
import './css/place.css';
import Card from "./card";
import { places } from "../db/place";
import { Link } from "react-router-dom";
import Bookingcard from "./bookingcard";

const Details = ({}) => {
  const { id } = useParams();
  // Find the place based on the match.params.id
  const place = places.find(p => p.id === parseInt(id));
   
  // Check if place is undefined
  if (!place) {
    return <div style={{padding: "255px 170px"}}>Error: Place not found</div>;
  }
   
  const { title, img, img1, img2, region, description, category } = place;

  console.log('Found Place:', );
    return (
        <>
        <div className="place-description">
          <div className="place">
            <div className="text-wrapper-3"><Link to='/destinations' className="link">{category}</Link> - {title}</div>
          </div>
          <div className="images">
          <img className="image"  src={img} alt={title} />
          <img className="image1" alt={title} src={img1}/>
          <img className="image2" alt={title} src={img2} />
          </div>
          <div className="location"><p><strong>Location: {region}</strong></p></div>
          <div className="summary">
            <p>{description}</p>
          </div>
          <div className="bookingcard">
            <Bookingcard key={place.id}/>
          </div>
          <div className="like">
          {places.slice(3,5).map((place) => (
            <Card state="active" key={place.id} place={place} />
          ))}
        </div>
      
       
    </div>
        </>
    )}

export default Details;