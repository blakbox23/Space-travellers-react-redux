import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header-section flex">
      <div className="logo">
        <img src="https://cdn-icons-png.flaticon.com/512/3212/3212567.png" alt="logo-img" className="logo-img" />
        <span className="fs-3"> Space Traveler&apos;s Hub </span>
      </div>
      <ul className="nav-links flex">
        <li>
          <NavLink to="/" exact activeClassName="active-link">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missions" exact activeClassName="active-link">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/profile" exact activeClassName="active-link">My Profile</NavLink>
        </li>

      </ul>
    </div>
  );
}

export default Header;
