import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoLogInOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import { FaCircleUser } from "react-icons/fa6";
import './css/nav.css'
const Nav = () => {
        const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
        <>
        <div className='main_header'>
            <div className='container'>
                <div className='logo'>
                <p>Wanderlust</p>
                </div>
                <div className='search_box'>
                    <input type='text' value='' placeholder='Search your Destination...' autoComplete='off'></input>
                    <a className='button'><CiSearch /></a>
                </div>
                <div className='nav'>
                <ul>
                    <li>
                        <Link to='/destinations' className='link'>Destinations</Link>
                    </li>
                    <li>
                        <Link to='/guides' className='link'>Guides</Link>
                    </li>
                    {/* <li>
                        <Link to='/bookings' className='link'>Bookings</Link>
                    </li> */}
                    <li>
                        <button onClick={() => loginWithRedirect()}>Login</button>
                    {/* </li>
                    <li>
                        <Link style={{textDecoration: 'none'}} to="/"><IoLogOutOutline /></Link> */}
                    </li>
                    <li>
                        <div className='icon'>
                            {
                                isAuthenticated && 
                                (
                                    <div className='account'>
                                        <div className='user-icon'>
                                        <FaCircleUser />
                                        </div>
                                        <p>{user.name}</p>
                                    </div>
                                )
                            }
                            
                        </div>
                    </li>
                </ul>
                </div>                   
            </div>

        </div>
        <div className="header">
            <div className='container'>
                <div className='nav'>
                <ul>
                    <li>
                        <Link to='/' className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to='/destinations' className='link'>Destinations</Link>
                    </li>
                    <li>
                        <Link to='/guides' className='link'>Guides</Link>
                    </li>
                    <li>
                        <Link to='/guides' className='link'>Bookings</Link>
                    </li>
                    <li>
                        <Link to='/guides' className='link'>Profile</Link>
                    </li>
                </ul>
                </div>
                <div className='auth'>
                        {
                            isAuthenticated ?
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><IoLogOutOutline /></button>
                            :
                            <button onClick={() => loginWithRedirect()}><IoLogInOutline /></button>
                        }
                   
                    
                 </div>
            </div>

        </div>
        </>
    )
}

export default Nav