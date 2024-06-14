import React from 'react';
import './dashboard.css'; // Import the CSS file
import NavLinks from './nav-links'; // Ensure the correct import path

const SideNav = () => {
  return (
    <div className="sidenav">
      <nav>
        <NavLinks />
      </nav>
    </div>
  );
};

export default SideNav;
