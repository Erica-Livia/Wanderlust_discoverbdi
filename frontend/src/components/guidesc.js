import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import './css/guidesc.css';


const Guidesc = () => {

    const [showWhatsapp, setShowWhatsapp] = useState(false);
    const [showFacebook, setShowFacebook] = useState(false);
    const [showPhone, setShowPhone] = useState(false);
     
    const togglePopup = (popupFunc) => {
      popupFunc(prev => !prev);
    };
    return(
        <>
        <div className="guidesc">
            <div className="description_container">
                <div className="guide_title">
                    <h3><Link to='/guides' className="link">Guides</Link></h3>
                    <h3>- John Doe:</h3>
                    <h3>Wildlife Expert</h3>
                </div>
            </div>
            <div className="guide_info">
            <div className="img">
                <img src='https://morawayadventures.com/images/Tanzania/Tarangire_119A.jpg' alt='' className="guide_image"/>
            </div>
            
            <div className="introduction">
            <div className="title_"><h3>John Doe</h3> </div>
                <p>
                    John Doe Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus magna vel tincidunt aliquet. Praesent eget tincidunt erat. Sed nunc tortor, malesuada a arcu in, euismod imperdiet ipsum. Cras vestibulum ultricies arcu varius facilisis.
                </p>
            </div>
            </div>
            
            <div className="contact">
            <div className="contact_container">
      <FaWhatsapp 
        onClick={() => togglePopup(setShowWhatsapp)} className="contact_icons"
      />

      {showWhatsapp && (  
        <div className="popup">
          Whatsapp: 555-1234
        </div>
      )}

      <FaFacebook
        onClick={() => togglePopup(setShowFacebook)} className="contact_icons"
      />

      {showFacebook && (
        <div className="popup">
          Facebook: ...
        </div>
      )}

    <FaPhoneAlt
        onClick={() => togglePopup(setShowPhone)} className="contact_icons"
      />

      {showPhone && (
        <div className="popup">
          Phone: 555-1234
        </div>
      )}

    </div>
    </div>
        </div>
        </>
    )
}

export default Guidesc;

