import React, { useState} from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useParams } from "react-router-dom";
import './css/guidesc.css';
import { guides } from "../db/guide";


const Guidesc = () => {
  const { id } = useParams();
  const guide = guides.find(p => p.id === parseInt(id));

  if (!guide) {
    return <div style={{padding: "255px 170px"}}>Error: Guide not found</div>;
  }

     

    const { name, img, description, number, email, category} = guide;


    return(
        <>
        <div className="guidesc">
            <div className="description_container">
                <div className="guide_title">
                    <h3><Link to='/guides' className="link">Guides</Link></h3>
                    <h3>- {name}</h3>
                    <h3>{category}</h3>
                </div>
            </div>
            <div className="guide_info">
            <div className="img">
                <img src={img} alt={name} className="guide_image"/>
            </div>
            
            <div className="introduction">
            <div className="title_"><h3>{name}</h3> </div>
                <p>
                    {description}
                </p>
            </div>
            </div>
            
            <div className="contact">
          <div className="contact_container">
            <FaWhatsapp  className="contact_icons" />
            <FaFacebook className="contact_icons" />


              <div className="popup">
                {number && <p>WhatsApp: {number}</p>}
                {email && <p>Email: {email}</p>}
              </div>
          </div>
    </div>
        </div>
        </>
    )
}

export default Guidesc;

