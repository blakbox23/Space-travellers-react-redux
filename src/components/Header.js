import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <div className="header-section flex">
        <div className="logo">
            {/* <img  > */}
           <span> Space Traveler's Hub </span>
        </div>
        <ul className="nav-links flex">
        <li>
                <NavLink to="/">Rockets</NavLink>
            </li>
            <li>
                <NavLink to="/missions">Missions</NavLink>
            </li>
            <li>
                <NavLink to="/profile">My Profile</NavLink>
            </li>
            
        </ul>
        </div>
    )
}

export default Header
