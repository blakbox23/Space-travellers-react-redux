import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header-section flex">
      <div className="logo">
        <img src="https://cdn-icons-png.flaticon.com/512/3212/3212567.png" alt="logo-img" className="logo-img" />
        <span> Space Traveler&apos;s Hub </span>
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
  );
}

export default Header;
