import React from "react";
import './css/place.css';
import Card from "../components/card";
import Popular from "../components/popular";
import { Link } from "react-router-dom";

const Gishora = () => {
    return (
        <>
        <div className="place-description">
          <div className="place">
            <div className="text-wrapper-3"><Link to='/destinations' className="link">Destinations</Link> - Gishora Drum Sanctuary</div>
          </div>
          <div className="images">
          <img className="img"  src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/e6/f5/a7.jpg" />
          <img className="img1" alt="" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/54/fc/caption.jpg?w=300&h=300&s=1"/>
          <img className="img2" alt="" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1" />
          </div>
          <div className="location"><p><strong>Region: Gishora - Gitega</strong></p></div>
          <div className="summary">
            <p>
            Gishora Drum Sanctuary is a mesmerizing cultural haven nestled in the heart of Burundi. 
        This enchanting sancctuary is a testament to the rich heritage and traditions of the Burundian people. With its vibrant
        atmosphere and captivating rhythms, the Gishora drum sanctuary offers visitors a unique opportunity to
        immerse themselves in the captivation world of traditional drumming.  <br></br>Visitors witness the powerful
        performances and experience the rich cultural heritage of Burundi firsthand. <br></br>
        Gishora is on the top of the Gishora Hill in the commune of Giheta, 7 km from the town of Gitega. In the residence of Gishora, the first court or forecourt, called Intangaro, shelters the sanctuary of the sacred drums. <br></br> The second largest, which is the royal court, includes the royal residence (Ingoro). With time, this court was generally occupied by the chiefs and the backyard (ikigo) includes the dwelling of the maidservants, the room of worship (indaro ya Rugabo) and other structures. 
        <br></br>This court was only reserved for the royal family. Before one has to reach the residence, there was a public reception place called Inama.
        <br></br>The royal field of Gishora was founded by the Mwami (or King of Burundi) Ntare Rugamba in the first half of the 19th century after its victory against the Chief Ntibirangwa rebels.
        </p>
          </div>
          <div className="like">
          <p>You might also like...</p>
            <div className="frame-5">
            <Card 
              img="https://travel2unlimited.com/wp-content/uploads/2015/02/5-12.jpg"
              title="Musée Vivant"
              
              shortdesc="Zoo, Like everyone es"
          />
          <Card 
              img="https://live.staticflickr.com/4827/45330425754_112571cca4_b.jpg"
              title="Lake Tanganyika - Saga Plage"
              price=""
              shortdesc={""}
          />
          <Card 
              img="https://i.pinimg.com/originals/ab/35/b2/ab35b253ac309e29dafaa7388af37202.jpg"
              title="Teza Tea Plantation"
              price=""
              shortdesc={""}
          />
          <Card 
              img="https://pbs.twimg.com/media/FabmRC5XgAAyPEV.jpg"
              title="Karera Waterfalls"
              price=""
              shortdesc={""}
          />
        </div>
      
      </div>
      
       
    </div>
        </>
    )}

export default Gishora;