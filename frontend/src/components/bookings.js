import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import './css/bookings.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const stripePromise = loadStripe("your_stripe_publishable_key");

const Booking = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedDate = queryParams.get("date");
    const totalPrice = queryParams.get("price");

    const [bookings, setBookings] = useState([]);
    const [selectedBookingIndex, setSelectedBookingIndex] = useState(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [newDate, setNewDate] = useState(null);
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
        setShowUpdateModal(true);
    };

    const handlePayment = (index) => {
        setSelectedBookingIndex(index);
        setShowPaymentModal(true);
    };

    const handleUpdateConfirm = () => {
        if (selectedBookingIndex !== null && newDate !== null) {
            const updatedBookings = [...bookings];
            const updatedBooking = { ...updatedBookings[selectedBookingIndex] };
            updatedBooking.date = newDate.toISOString();
            updatedBookings[selectedBookingIndex] = updatedBooking;

            localStorage.setItem("bookings", JSON.stringify(updatedBookings));
            setBookings(updatedBookings);
            setShowUpdateModal(false);
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
                                    <td>{booking.date}</td>
                                    <td>{booking.numberOfPeople}</td>
                                    <td>${booking.price}</td>
                                    <td>
                                        <button onClick={() => handleUpdateBooking(index)}>Update</button>
                                        <button onClick={() => handlePayment(index)}>Payment</button>
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
                        <button onClick={() => setShowUpdateModal(false)}>Cancel</button>
                        <button onClick={handleUpdateConfirm}>Update</button>
                    </div>
                )}

                {/* Payment Modal */}
                {showPaymentModal && (
                    <div className="modal">
                        <h3>Payment</h3>
                        {/* Add Stripe payment form or redirect logic here */}
                        <button onClick={() => setShowPaymentModal(false)}>Cancel</button>
                    </div>
                )}
            </div>
        </Elements>
    );
};

export default Booking;
