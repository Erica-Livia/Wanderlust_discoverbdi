import React from "react";
import './css/booking.css';

const Booking = () => {
    return(
        <>
        <div className="bookingcard">
            <div className="frame">
                <p>Select participants and date</p>
            </div>
            <div className="container">
                <div className="people">
                    <img className="icon-group" src="icon-group.png" />
                    <p>People x </p>
                    <select id='number-dd' name='number'>
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

        </div>
        </>
    )
}