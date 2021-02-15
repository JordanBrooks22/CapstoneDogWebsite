import React from 'react';
import logo from '../images/SCCR LOGO.png';

import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>

                </li>
                <li>
                    <NavLink to="/bookingPage">bookingPage</NavLink>

                </li>
                <li>
                    <NavLink to="/contactPage">contactPage</NavLink>

                </li>
                <li>
                    <NavLink to="/directionsPage">directionsPage</NavLink>

                </li>
                <li>
                    <NavLink to="/intakeForm">intakeForm</NavLink>

                </li>
            </ul>
        </nav>
        
 
    )
}

export default NavBar;
