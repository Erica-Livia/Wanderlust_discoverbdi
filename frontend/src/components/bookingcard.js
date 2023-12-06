import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './css/bookingcard.css';
import "react-datepicker/dist/react-datepicker.css";


const Bookingcard = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedPeople, setSelectedPeople] = useState(0); // Initialize with 0
    const [showBookingInfo, setShowBookingInfo] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handlePeopleChange = (e) => {
        const numberOfPeople = parseInt(e.target.value, 10);
        setSelectedPeople(numberOfPeople);
    };

    const handleCheckAvailability = () => {
        // Calculate total price based on the number of people (assuming $20 per person)
        const calculatedPrice = selectedPeople * 20;
        setTotalPrice(calculatedPrice);

        // You can perform additional logic here before showing the booking info
        setShowBookingInfo(true);
    };

    return(
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
                {showBookingInfo && (
                    <div className='bookingInfo'>
                        <p>Seleted Date: {selectedDate && selectedDate.toDateString()}</p>
                        <p>Total Price: ${totalPrice}</p>
                    </div>
                )}
        </div>
        
        </>
    )
}
export default Bookingcard;