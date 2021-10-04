import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <div className="header-section flex">
        <div className="logo">
            LOGO
        </div>
        <ul className="nav-links flex">
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
