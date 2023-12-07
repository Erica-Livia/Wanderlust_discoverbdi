import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import './css/bookings.css';

const Booking = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedDate = queryParams.get("date");
    const totalPrice = queryParams.get("price");

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Retrieve bookings from local storage
        const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
        setBookings(storedBookings);
    }, []);

    const handleDeleteBooking = (index) => {
        // Delete a booking from the local storage
        const updatedBookings = [...bookings];
        updatedBookings.splice(index, 1);
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));
        setBookings(updatedBookings);
    };

    return (
        <div className="bookings">
        
            <h2>Bookings List</h2>
            <ol className="booking_list">
                {bookings.map((booking, index) => (
                    <li key={index}>
                        {booking.date}, Price: ${booking.price}
                        <button onClick={() => handleDeleteBooking(index)} className="delete">Delete</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </li> 
                ))}
            </ol>
        </div>
        
    );
};


export default Booking;
