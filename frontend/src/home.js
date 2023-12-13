import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './components/css/home.css';
import  GroupCards  from './components/groupcards';
import Tab from './components/tab';
import { FaCircleUser } from "react-icons/fa6";
import Popular from './components/popular';

const Home = () => {
    return (
        <>
        <div className="hero_section">
        <div className="container">
            <p>Explore Burundi&#39;s top attractions on the map.</p>
        </div>
        </div>
        <div className='tab'> 
        <Tab className="tab-instance" frame="https://c.animaapp.com/mudMg3Nq/img/frame-2.svg" option="destination" />
        </div>
        <div className='cards'>
            <GroupCards featured="destinations" />
        </div>
        <div className="destinations">
          <Popular />
        </div>


        {/* Guides section */}
        <div className='guides'>
        <div className="container-2">
          <p className="title-12">Why Choose Our Tour Guides?</p>
          <p className="text-wrapper-4">Our knowledgeable guides will ensure you have an unforgettable experience.</p>
          <div className="button-2">
            <div className="seconday-2">
              <div className="title-13">Contact Us</div>
            </div>
            <div className="primary-2">
              <div className="title-10">Learn More</div>
            </div>
          </div>
        </div>
        <div className="list-2">
          <div className="row">
            <div className="article">
              <div className="image-wrapper">
                <div className="image-2" />
              </div>
              <div className="frame-8">
                <div className="title-14">Expertise</div>
                <div className="subtitle-4">Experience Matters</div>
                <p className="subtitle-5">
                  Our guides are highly knowledgeable and experienced in the local attractions, history, and culture of
                  Burundi.
                </p>
                <div className="selection">
                  <div className="label-normal">
                    <div className="label-text">Safety</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Culture</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">History</div>
                  </div>
                </div>
                <div className="user">
                  <div className="avatar">
                    <FaCircleUser/>
                    <div className="frame-9">
                      <div className="title-15">John Doe</div>
                    </div>
                  </div>
                  <div className="icon-buttons">
                    <div className="icon-2">🌟</div>
                    <div className="icon-2">✉️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="article">
              <div className="image-wrapper">
                <div className="image-3" />
              </div>
              <div className="frame-8">
                <div className="title-14">Personalized Service</div>
                <div className="subtitle-4">Tailored Tours</div>
                <p className="text-wrapper-4">
                  Our guides cater to individual preferences and adapt the tour according to your interests and needs.
                </p>
                <div className="selection">
                  <div className="label-normal">
                    <div className="label-text">Flexibility</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Hospitality</div>
                  </div>
                </div>
                <div className="user">
                  <div className="avatar">
                    <FaCircleUser />
                    <div className="frame-9">
                      <div className="title-15">Jane Doe</div>
                    </div>
                  </div>
                  <div className="icon-buttons">
                    <div className="icon-2">🌟</div>
                    <div className="icon-2">✉️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="guides">
        <div className="container-2">
          <div className="title-12">What Our Customers Say</div>
          <p className="text-wrapper-4">Read the reviews from travelers who have experienced the wonders of Burundi.</p>
          
        </div>
        <div className="list-3">
          <div className="card-2">
            <div className="avatar-wrapper">
              <div className="avatar">
                <div className="avatar-3"> <FaCircleUser /> </div>
                <div className="frame-9">
                  <div className="title-15">Alice Smith</div>
                </div>
              </div>
            </div>
            <p className="title-16">
              The tour guide was fantastic! He was knowledgeable, friendly, and made the experience truly memorable.
            </p>
            <div className="icon-buttons-2">
              <div className="icon-2">👍</div>
              <div className="icon-2">📝</div>
            </div>
          </div>
          <div className="card-2">
            <div className="avatar-wrapper">
              <div className="avatar">
              <div className="avatar-3"> <FaCircleUser /> </div>
                <div className="frame-9">
                  <div className="title-15">Bob Johnson</div>
                </div>
              </div>
            </div>
            <p className="title-16">
              I highly recommend booking a tour guide through Wanderlust. They exceeded my expectations in every way.
            </p>
            <div className="icon-buttons-2">
              <div className="icon-2">👍</div>
              <div className="icon-2">📝</div>
            </div>
          </div>
        </div>
        <img className="vector-3" alt="Vector" src="https://c.animaapp.com/mudMg3Nq/img/vector-200-1.svg" />
      </div>
        </>
    )
}

export default Home;