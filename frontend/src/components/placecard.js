const PlaceCard = ({ place }) => {
    return (
      <div className="place-card">
        <h2>{place.title}</h2>
        <p>{place.shortdesc}</p>
        <p>Category: {place.category}</p>
        <p>Price: {place.price}</p>
        <p>Region: {place.region}</p>
      </div>
    );
  };
  
  export default PlaceCard;