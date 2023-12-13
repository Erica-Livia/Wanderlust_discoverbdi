import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Link, useNavigate, useParams } from "react-router-dom";
import './css/bookingcard.css';
import "react-datepicker/dist/react-datepicker.css";
import { useAuth0 } from "@auth0/auth0-react";
import { places } from "../db/place";

const Bookingcard = () => {
    const { id } = useParams();
    const place = places.find(p => p.id === parseInt(id));

    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedPeople, setSelectedPeople] = useState(0);
    const [showBookingInfo, setShowBookingInfo] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handlePeopleChange = (e) => {
        const numberOfPeople = parseInt(e.target.value, 10);
        setSelectedPeople(numberOfPeople);
    };

    const handleCheckAvailability = () => {
        if (!selectedDate || selectedDate < new Date()) {
            setErrorMessage("Please select a future date.");
        } else if (selectedPeople <= 0) {
            setErrorMessage("Please select the number of people.");
        } else {
            setErrorMessage(null);
            const placePrice = place.price || 0;
            const calculatedPrice = selectedPeople * placePrice;
            setTotalPrice(calculatedPrice);
            setShowBookingInfo(true);
        }
    };

    const handleBook = () => {
        if (!selectedDate || selectedDate < new Date() || selectedPeople <= 0) {
            setErrorMessage("Please select a future date and the number of people.");
        } else {
            setErrorMessage(null);
            // Save booking information to local storage
            const booking = {
                placeTitle: place.title, // Include place title in the booking data
                date: selectedDate.toISOString(),
                numberOfPeople: selectedPeople,
                price: totalPrice,
            };
            const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
            bookings.push(booking);
            localStorage.setItem("bookings", JSON.stringify(bookings));

            // Redirect to the bookings page
            navigate(`/bookings`);
        }
    };

    return (
        <>
            <div className="bookingcard">
                <div className="cardContainer">
                    <div className="select">
                        <p id="p">Select participants and date</p>
                    </div>
                    <div className="containerr">
                        <div className="people">
                            <img className="icon-group" src="" />
                            <p id='p'>People</p>
                            <div className="number">
                                <select id='number-dd' name='number' onChange={handlePeopleChange}>
                                    <option value=''></option>
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
                            </div>
                        </div>
                        <div className="date">
                            <DatePicker className="date_container"
                                selected={selectedDate}
                                onChange={handleDateChange}
                                placeholderText="Select a date"
                                dateFormat="MM/dd/yyyy"
                            />
                        </div>
                        <div className="checkCont">
                            <button className="check" onClick={handleCheckAvailability}><label>Check Availability</label></button>
                        </div>
                    </div>
                </div>
                {errorMessage && (
                    <div className="error-message">
                        {errorMessage}
                    </div>
                )}
                {showBookingInfo && (
                    <div className='bookingInfo'>
                        <p>Selected Date: {selectedDate && selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                        <p>Total Price: ${totalPrice}</p>
                        {isAuthenticated ? (
                            <div>
                                <button className="save" onClick={handleBook}>Book</button>
                            </div>
                        ) : (
                            <div>
                                <p>Please <Link onClick={() => loginWithRedirect()} alt='login'>Login</Link> or <Link onClick={() => loginWithRedirect()} alt='login'>Sign up</Link> to book.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Bookingcard;
