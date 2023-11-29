import React  from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoLogInOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import { FaCircleUser } from "react-icons/fa6";
import './nav.css';


const Nav = () => {
    const {loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return (
        <>
        <div className="main_header">
            <div className="container">
                <div className="logo">
                <Link to='/home' className="link">Wanderlust</Link>
                </div>
                <div className='search_box'>
                    <input type='text' value='' placeholder='Search your Destination' autoComplete="off"></input>
                    <a className='button'><CiSearch /></a>
                </div>
                <div className="nav">
                            <ul>
                                <li>
                                    <Link to='/destinations' className="link">Destinations</Link>
                                </li>
                                <li>
                                    <Link to='/guides' className="link">Guides</Link>
                                </li>
                                {
                                    isAuthenticated &&
                                    (
                                        <li>
                                            <Link to='/bookings' className="link">Bookings</Link>
                                        </li>
                                    )
                                }
                                {
                                    isAuthenticated &&
                                    (
                                        <li>
                                            <Link to='/profile' className='link'><div className='icon'><FaCircleUser /></div></Link>
                                        </li>
                                    )
                                }                                
                                {/* <li>
                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}></button>
                                </li>
                                                        */}
                            </ul>
                             <div className='auth'>
                                {
                                    isAuthenticated ?
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} alt='logout'><IoLogOutOutline /></button>
                                    :
                                    <button onClick={() => loginWithRedirect()} alt='login'><IoLogInOutline /></button>
                                }
                            </div>

                        </div>
                        
                    </div>
                </div>
        </>
    )
}
export default Nav;