import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import './css/bookings.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";


const stripePromise = loadStripe("");

const Booking = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedDate = queryParams.get("date");
    const totalPrice = queryParams.get("price");

    const [bookings, setBookings] = useState([]);
    const [selectedBookingIndex, setSelectedBookingIndex] = useState(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [newDate, setNewDate] = useState(null);
    const [selectedPeople, setSelectedPeople] = useState(0);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

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

    const handleUpdateBooking = (index) => {
        setSelectedBookingIndex(index);
        setNewDate(new Date(bookings[index].date));
        setSelectedPeople(bookings[index].numberOfPeople);
        setShowUpdateModal(true);
    };

    const handlePayment = (index) => {
        setSelectedBookingIndex(index);
        setShowPaymentModal(true);
    };

    const [updatedBooking, setUpdatedBooking] = useState(null);

    const handleUpdateConfirm = () => {
        if (selectedBookingIndex !== null && newDate !== null) {
            setBookings((prevBookings) => {
                const updatedBookings = [...prevBookings];
                const currentUpdatedBooking = updatedBookings[selectedBookingIndex];
    
                // Update date and number of people
                const localDate = new Date(newDate.setMinutes(newDate.getMinutes() - newDate.getTimezoneOffset()));
                currentUpdatedBooking.date = localDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    
                currentUpdatedBooking.numberOfPeople = selectedPeople;
    
                // Check if 'place' is defined in the booking
                if (currentUpdatedBooking.place && currentUpdatedBooking.place.price) {
                    // Retrieve place information from the booking
                    const place = currentUpdatedBooking.place;
    
                    // Recalculate price based on the place's price and new number of people
                    const placePrice = place.price || 0; // Assuming place.price is defined
                    currentUpdatedBooking.price = selectedPeople * placePrice;
    
                    console.log("Updated Booking with New Price:", currentUpdatedBooking);
                } else {
                    // Handle the case where 'place' or 'price' is not defined
                    console.error("Place or price is not defined in the booking.");
                }
    
                localStorage.setItem("bookings", JSON.stringify(updatedBookings));
                return updatedBookings;
            });
        }
    
       
    
        // Log information if conditions are not met
        if (selectedBookingIndex === null || newDate === null) {
            console.error("Conditions not met for updating. Check selectedBookingIndex and newDate.");
        }
    };
    
    
    
    return (
        <Elements stripe={stripePromise}>
            <div className="bookings">
                <h2>Bookings List</h2>
                {bookings.length === 0 ? (
                    <p style={{ padding: "150px 0px", fontSize: "40px", textAlign: "center" }}>There's no Bookings.</p>
                ) : (
                    <table className="booking_table">
                        <thead>
                            <tr>
                                <th>Place Name</th>
                                <th>Date</th>
                                <th>Number of People</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={index}>
                                <td>{booking.placeTitle}</td>
                                <td>{new Date(booking.date).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</td>
                                <td>{booking.numberOfPeople}</td>
                                <td>${booking.price}</td>

                                <td>
                                    <button onClick={() => handlePayment(index)} className="pay">Pay</button>
                                    <button onClick={() => handleUpdateBooking(index)} className="update">Update</button>
                                    <button onClick={() => handleDeleteBooking(index)} className="delete">Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}

                {/* Update Modal */}
                {showUpdateModal && (
                    <div className="modal">
                        <h3>Update Booking</h3>
                        <label>New Date: </label>
                        <DatePicker
                            selected={newDate}
                            onChange={(date) => setNewDate(date)}
                            placeholderText="Select a new date"
                            dateFormat="MM/dd/yyyy"
                        />
                        <label>New Number of People: </label>
                        <select
                            value={selectedPeople}
                            onChange={(e) => setSelectedPeople(parseInt(e.target.value, 10))}
                        >
                            <option value=''></option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>
                            <option value='14'>14</option>
                            <option value='15'>Maximum</option>
                        </select>
                        <button onClick={() => setShowUpdateModal(false)}className="update">Cancel</button>
                        <button onClick={handleUpdateConfirm} className="pay">Update</button>
                    </div>
                )}
                {/* Payment Modal */}
                {showPaymentModal && (
                    <div className="modal">
                        <h3>Payment</h3>
                        {/* Add Stripe payment form or redirect logic here */}
                        <button onClick={() => setShowPaymentModal(false)} className="pay">Cancel</button>
                    </div>
                )}
            </div>
        </Elements>
    );
};

export default Booking;
