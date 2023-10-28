import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <nav>
                    <div className="logo"><a href="#wanderlust">Wanderlust</a></div>
                    <ul className="nav-links">
                      <li><a href="#home">Home</a></li>
                      <li><a href="#explore">Explore</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#faq">FAQ</a></li>
                    </ul>
                    <div className='search-bar'>
                      <div className='search-bar-content'>Search for Destinations</div>
                    </div>
                    <div className='sidebar-toggle'>☰</div>
                </nav>
            </header>
          
            <main>
                <section id='hero'>
                  <div className="hero-image"></div>
                  <div className="hero-content">
                    <h1>Explore the world with us!</h1>
                    <p>Discover amazing destinations and creat unforgettable memories.</p>
                    <a href="#explore" className="explore-button">Explore Now</a>
                  </div>                   
                </section>

                <section id='explore'>
                  {/*  */}
                </section>

                <section id='about'>
                  {/*  */}
                </section>

                <section id='faq'>
                  {/*  */}
                </section>
            </main>
        </div>
    );
}

export default App;