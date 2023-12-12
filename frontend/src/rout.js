import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Destinations from './components/destinations';
import Details from './components/details';
import Guides from './components/guides';
import Guidesc from './components/guidesc';
import Booking from './components/bookings';
import { useAuth0 } from "@auth0/auth0-react";

const Rout = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <>
        <Routes>
        <Route path='/' element={<Home />} />   
            <Route path='/home' element={<Home />} />
            <Route path='/destinations' element={<Destinations />} />
            <Route path='/details/:id' element={<Details match />} />
            <Route path='/guidesc/:id' element={<Guidesc match />} />
            <Route path='/guides' element ={<Guides />} />
            <Route path='/guidesc' element={<Guidesc />} />
            {
               isAuthenticated  &&
               (
                <Route path='/bookings' element = {<Booking />} />
               )
            }

        </Routes>
        </>
    )
}

export default Rout;